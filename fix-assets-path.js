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
    }

    // Обработка HTML
    if (stat.isFile() && item.endsWith(".html")) {
      fixHtml(fullPath);
    }
  }
}

// Обработка HTML файла
function fixHtml(filePath) {
  let content = fs.readFileSync(filePath, "utf8");

  // Путь к assets в корне dist
  const htmlDir = path.dirname(filePath);
  const assetsPath = path.join(distPath, "assets");

  // Вычисляем относительный путь
  let relativeAssets = path.relative(htmlDir, assetsPath).replace(/\\/g, "/");

  // ВАЖНО: если файл в корне — делаем ./assets
  if (!relativeAssets.startsWith(".")) {
    relativeAssets = "./" + relativeAssets;
  }


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

  // Пропуск абсолютных URL
  const skipAbsolute = /(['"(])(https?:\/\/|\/\/)/;

  if (skipAbsolute.test(content)) {
    // Мы не удаляем абсолютные URL — просто избегаем их вредного изменения
  }

  let newContent = content;
  patterns.forEach((p) => {
    newContent = newContent.replace(p.regex, p.replacement);
  });

  fs.writeFileSync(filePath, newContent, "utf8");

  console.log("Обработан:", filePath, `→ ${relativeAssets}`);
}

// Запуск
processDirectory(distPath);
console.log("\nГотово!");
