const fs = require('fs');
const path = require('path');

const rootSrc = path.join(__dirname, 'src');
const importsSrc = path.join(rootSrc, 'imports');
const appSrc = path.join(rootSrc, 'app');

function getFromStatements(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const matches = [];
  const re = /from\s+['"]([^'"]+)['"]/g;
  let m;
  while ((m = re.exec(content)) !== null) {
    matches.push(m[1]);
  }
  return matches;
}

function walkDir(dir, result = []) {
  if (!fs.existsSync(dir)) return result;
  for (const item of fs.readdirSync(dir)) {
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) {
      walkDir(full, result);
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      result.push(full);
    }
  }
  return result;
}

const lines = [];

lines.push('=== FILES INSIDE src/imports AND THEIR INTERNAL IMPORTS ===\n');
for (const f of walkDir(importsSrc)) {
  const rel = f.replace(rootSrc + path.sep, '').replace(/\\/g, '/');
  const froms = getFromStatements(f);
  const internal = froms.filter(x => x.startsWith('.'));
  if (internal.length > 0) {
    lines.push(`[${rel}]`);
    for (const i of internal) lines.push(`  relative: ${i}`);
    lines.push('');
  }
}

lines.push('\n=== PAGE FILES IN src/app AND WHAT THEY IMPORT FROM src/imports ===\n');
for (const f of walkDir(appSrc)) {
  const rel = f.replace(rootSrc + path.sep, '').replace(/\\/g, '/');
  const froms = getFromStatements(f);
  const fromImports = froms.filter(x => x.includes('imports') || x.includes('@/'));
  if (fromImports.length > 0) {
    lines.push(`[${rel}]`);
    for (const i of fromImports) lines.push(`  ${i}`);
    lines.push('');
  }
}

const output = lines.join('\n');
fs.writeFileSync('import-analysis.txt', output, 'utf8');
console.log(output);
