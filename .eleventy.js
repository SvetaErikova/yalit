import { deleteSync } from "del";
import * as esbuild from "esbuild";
import fs from "fs";
import path from "path";
import * as prettier from "prettier";
import * as sass from "sass";
import eleventyPreact from "./eleventy-plugin-preact.js";

const config = {
  quiet: true,
  dir: {
    input: "src/pages",
    output: "dist",
    includes: "../components",
    layouts: "../layouts",
  },
};

const logger = {
  enabled: false,
  enableStats: false,
  info: (...args) => {
    if (logger.enabled) {
      console.log(...args);
    }
  },
  error: (...args) => {
    if (logger.enabled) {
      console.error(...args);
    }
  },
  stats: (...args) => {
    if (logger.enabled && logger.enableStats) {
      console.log(...args);
    }
  },
};

const dirToClean = path.join(config.dir.output, "*");
deleteSync(dirToClean, { dot: true });
logger.info("Cleaned dist directory");

export default async function (eleventyConfig) {
  eleventyConfig.addGlobalData("permalink", () => {
    return (data) => `${data.page.filePathStem}.${data.page.outputFileExtension}`;
  });
  eleventyConfig.addPlugin(eleventyPreact, {
    minify: false,
    enableCache: true, // Кэш всегда включен для оптимизации
    cacheSize: 100, // Больше кэша в dev режиме
    logger,
    postProcess: ({ html }) => {
      const resultHtml = `<!DOCTYPE html>${html}`;
      const formattedHtml = prettier.format(resultHtml, {
        parser: "html",
        singleAttributePerLine: false,
        useTabs: true,
        tabWidth: 2,
        bracketSameLine: true,
      });
      return formattedHtml;
    },
  });

  const watchTargets = ["./src/assets/css", "./src/assets/js", "./src/templates", "./src/shared", "./src/scripts", "./src/styles", "./src/components"];
  watchTargets.forEach((target) => {
    eleventyConfig.addWatchTarget(target);
  });

  eleventyConfig.addPassthroughCopy({
    "src/assets/img": "assets/img",
    "src/assets/video": "assets/video",
    "src/assets/fonts": "assets/fonts",
  });

  // Умная очистка кэша только при изменении зависимостей
  eleventyConfig.on("beforeWatch", async (changedFiles) => {
    if (changedFiles && changedFiles.length > 0) {
      const cssExtensions = [".scss", ".sass", ".css"];
      const needsClearSass = changedFiles.some((file) => cssExtensions.some((ext) => file.includes(ext)) || file.includes("src/styles/") || file.includes("src/components/"));
      const needsClearJS = changedFiles.some((file) => (file.includes(".js") && !file.includes(".jsx")) || file.includes("src/scripts/"));

      if (needsClearSass) {
        buildCache.sass.clear();
        logger.info("🔄 Sass cache cleared");
      }
      if (needsClearJS) {
        buildCache.js.clear();
        logger.info("🔄 JS cache cleared");
      }
    }
  });

  eleventyConfig.on("beforeBuild", async () => {
    const startTime = Date.now();
    logger.info("🚀 Starting asset build...");

    try {
      await Promise.all([buildSass(), buildJS()]);

      const buildTime = Date.now() - startTime;
      logger.info(`✅ Asset build completed in ${buildTime}ms`);
    } catch (error) {
      const buildTime = Date.now() - startTime;
      logger.error(`❌ Asset build failed after ${buildTime}ms:`, error.message);
      throw error;
    }
  });
  return {
    ...config,
    // Добавьте эти параметры:
    serverOptions: {
      host: "0.0.0.0", // Позволяет доступ с других устройств
      port: 8080, // Можно выбрать любой свободный порт
      showAllHosts: true, // Показывает все доступные адреса
      https: false, // Если не используете HTTPS
    },
  };
}

// Кэш для отслеживания времени изменения файлов
const buildCache = {
  sass: new Map(),
  js: new Map(),
};

async function buildSass() {
  const sassDir = path.resolve(import.meta.dirname, "src/assets/css");
  const outDir = path.resolve(import.meta.dirname, "dist/assets/css");
  const supportedExtensions = [".sass", ".scss", ".css"];

  try {
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

    const files = fs.readdirSync(sassDir).filter((f) => supportedExtensions.some((ext) => f.endsWith(ext)));
    let compiledCount = 0;

    for (const filename of files) {
      const inputPath = path.join(sassDir, filename);
      const outputPath = path.join(outDir, filename.replace(/\.(sass|scss|css)$/, ".css"));

      // Проверяем, нужно ли перекомпилировать файл
      const inputStat = fs.statSync(inputPath);
      const inputMtime = inputStat.mtime.getTime();

      const cachedMtime = buildCache.sass.get(filename);
      const outputExists = fs.existsSync(outputPath);

      if (cachedMtime === inputMtime && outputExists) {
        continue; // Файл не изменился, пропускаем
      }

      const minifyExtensions = [".min.scss", ".min.sass", ".min.css"];
      const isMinify = minifyExtensions.some((ext) => filename.endsWith(ext));

      try {
        let outputContent;

        if (filename.endsWith(".css")) {
          // Для обычных CSS файлов просто копируем с возможной минификацией
          outputContent = fs.readFileSync(inputPath, "utf8");
          if (isMinify) {
            // Простая минификация CSS (удаление пробелов и переносов)
            outputContent = outputContent.replace(/\s+/g, " ").replace(/;\s*}/g, "}").trim();
          }
        } else {
          // Для Sass/SCSS компилируем
          const result = sass.compile(inputPath, {
            sourceMap: false,
            style: isMinify ? "compressed" : "expanded",
          });
          outputContent = result.css;
        }

        fs.writeFileSync(outputPath, outputContent);
        buildCache.sass.set(filename, inputMtime);
        compiledCount++;
      } catch (sassError) {
        logger.error(`❌ Sass compilation error in ${filename}:`, sassError.message);
        throw sassError;
      }
    }

    if (compiledCount > 0) {
      logger.info(`✅ Compiled ${compiledCount} Sass file(s)`);
    }
  } catch (error) {
    logger.error("❌ Sass build failed:", error.message);
    throw error;
  }
}

async function buildJS() {
  const jsDir = path.resolve(import.meta.dirname, "src/assets/js");
  const outDir = path.resolve(import.meta.dirname, "dist/assets/js");

  try {
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

    const files = fs.readdirSync(jsDir).filter((f) => f.endsWith(".js"));
    const buildPromises = [];
    let compiledCount = 0;

    for (const filename of files) {
      const inputPath = path.join(jsDir, filename);
      const outputPath = path.join(outDir, filename);

      // Проверяем, нужно ли перекомпилировать файл
      const inputStat = fs.statSync(inputPath);
      const inputMtime = inputStat.mtime.getTime();

      const cachedMtime = buildCache.js.get(filename);
      const outputExists = fs.existsSync(outputPath);

      if (cachedMtime === inputMtime && outputExists) {
        continue; // Файл не изменился, пропускаем
      }

      const buildPromise = esbuild
        .build({
          entryPoints: [inputPath],
          bundle: true,
          minify: filename.endsWith(".min.js"),
          sourcemap: false,
          outfile: outputPath,
          platform: "browser",
          target: ["es2020"],
          treeShaking: true,
          metafile: false,
          format: "esm",
        })
        .then(() => {
          buildCache.js.set(filename, inputMtime);
          compiledCount++;
        })
        .catch((error) => {
          logger.error(`❌ JS build error in ${filename}:`, error.message);
          throw error;
        });

      buildPromises.push(buildPromise);
    }

    if (buildPromises.length > 0) {
      await Promise.all(buildPromises);
      logger.info(`✅ Compiled ${compiledCount} JS file(s)`);
    }
  } catch (error) {
    logger.error("❌ JS build failed:", error.message);
    throw error;
  }
}
