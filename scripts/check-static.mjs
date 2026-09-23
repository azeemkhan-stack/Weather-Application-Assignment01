import { access, readFile } from 'node:fs/promises';

const requiredFiles = [
  'index.html',
  'css/variables.css',
  'css/style.css',
  'css/components.css',
  'css/animations.css',
  'css/responsive.css',
  'js/config.js',
  'js/api.js',
  'js/helpers.js',
  'js/ui.js',
  'js/app.js'
];

for (const file of requiredFiles) {
  await access(file);
}

const html = await readFile('index.html', 'utf8');
if (!html.includes('<!DOCTYPE html>') || !html.includes('</html>')) {
  throw new Error('index.html is missing a valid document wrapper');
}
if (!html.includes('<script type="module"')) {
  throw new Error('index.html must load the application as an ES module');
}

console.log(`Static build check passed: ${requiredFiles.length} application files verified.`);
