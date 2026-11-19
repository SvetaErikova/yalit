#!/usr/bin/env node

// node fix-assets-path.js ./dist ignore=admin,tmp

import fs from "fs";
import path from "path";

// Аргументы
const distPath = process.argv[2];
const ignoreArg = process.argv.find((a) => a.startsWith("ignore="));
const ignoreDirs = ignoreArg ? ignoreArg.replace("ignore=", "").split(",") : [];

if (!distPath) {
  console.error(
    "Укажите путь к dist. Пример:\nnode fix-assets-path.js ./dist ignore=admin,tmp"
  );
  process.exit(1);
}

if (!fs.existsSync(distPath) || !fs.statSync(distPath).isDirectory()) {
  console.error("Ошибка: указанной папки не существует или она не директория.");
  process.exit(1);
}

console.log(
  "Игнорируем папки:",
  ignoreDirs.length ? ignoreDirs.join(", ") : "—"
);

// Рекурсивный обход
function processDirectory(dir) {
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    // Проверка на игнорируемые директории
    if (stat.isDirectory()) {
      const dirName = path.basename(fullPath);
      if (ignoreDirs.includes(dirName)) {
        console.log("Пропускаем:", fullPath);
        continue;
      }
      processDirectory(fullPath);
      continue;
    }

    // Обработка HTML
    if (stat.isFile() && item.endsWith(".html")) {
      fixHtml(fullPath);
    }

    // Обработка CSS
    if (stat.isFile() && item.endsWith(".css")) {
      fixCss(fullPath);
    }
  }
}

// Вычисление относительного пути к assets от указанной директории
function getRelativeAssets(fromDir) {
  const assetsPath = path.join(distPath, "assets");
  let relativeAssets = path.relative(fromDir, assetsPath).replace(/\\/g, "/");

  // Если файл в корне — делаем ./assets
  if (!relativeAssets.startsWith(".")) {
    relativeAssets = "./" + relativeAssets;
  }

  return relativeAssets;
}

// Обработка HTML файла
function fixHtml(filePath) {
  let content = fs.readFileSync(filePath, "utf8");

  const htmlDir = path.dirname(filePath);
  const relativeAssets = getRelativeAssets(htmlDir);

  // Регулярки:
  // src="/assets/..."  href="/assets/..."  url(/assets/...)
  // 🚫 НЕ заменяем, если это абсолютный URL: http:// https:// //
  const patterns = [
    {
      regex: /src="\/assets\/([^"]+)"/g,
      replacement: (m, file) => `src="${relativeAssets}/${file}"`,
    },
    {
      regex: /href="\/assets\/([^"]+)"/g,
      replacement: (m, file) => `href="${relativeAssets}/${file}"`,
    },
    {
      regex: /url\(\s*['"]?\/assets\/([^'")]+)['"]?\s*\)/g,
      replacement: (m, file) => `url(${relativeAssets}/${file})`,
    },
  ];

  let newContent = content;
  patterns.forEach((p) => {
    newContent = newContent.replace(p.regex, p.replacement);
  });

  fs.writeFileSync(filePath, newContent, "utf8");

  console.log("Обработан HTML:", filePath, `→ ${relativeAssets}`);
}

// Обработка CSS файла
function fixCss(filePath) {
  let content = fs.readFileSync(filePath, "utf8");

  const cssDir = path.dirname(filePath);
  const relativeAssets = getRelativeAssets(cssDir);

  let newContent = content;

  // url(/assets/...), url('/assets/...'), url("/assets/...")
  // Не трогаем абсолютные URL (http://, https://, //, data:),
  // т.к. regex требует /assets/ сразу после url( или кавычки.
  const urlRegex = /url\(\s*(['"]?)\/assets\/([^'")]+)\1\s*\)/g;
  newContent = newContent.replace(
    urlRegex,
    (m, quote, file) => `url(${quote}${relativeAssets}/${file}${quote})`
  );

  // @import "/assets/..."  и  @import '/assets/...'
  const importRegex = /@import\s+(['"])\/assets\/([^'"]+)\1/g;
  newContent = newContent.replace(
    importRegex,
    (m, quote, file) => `@import ${quote}${relativeAssets}/${file}${quote}`
  );

  // sourceMappingURL=/assets/...
  const sourceMapRegex = /\/\*#\s*sourceMappingURL=\/assets\/([^*]+)\*\//g;
  newContent = newContent.replace(
    sourceMapRegex,
    (m, file) => `/*# sourceMappingURL=${relativeAssets}/${file}*/`
  );

  if (newContent !== content) {
    fs.writeFileSync(filePath, newContent, "utf8");
    console.log("Обработан CSS:", filePath, `→ ${relativeAssets}`);
  } else {
    console.log("Без изменений CSS:", filePath);
  }
}

// Запуск
processDirectory(distPath);
console.log("\nГотово!");
