import fs from 'node:fs';
import path from 'node:path';

const src = path.resolve(process.cwd(), 'tokens.json');
const outDir = path.resolve(process.cwd(), 'dist');
const outFile = path.resolve(outDir, 'index.js');
const outTypes = path.resolve(outDir, 'index.d.ts');
const tokensCss = path.resolve(process.cwd(), 'tokens.css');
const tokensJsonOut = path.resolve(outDir, 'tokens.json');
const tokensCssOut = path.resolve(outDir, 'tokens.css');

fs.mkdirSync(outDir, { recursive: true });
const tokensRaw = fs.readFileSync(src, 'utf-8');
const tokens = JSON.parse(tokensRaw);
const requiredTopLevelKeys = [
  'color',
  'typography',
  'spacing',
  'radii',
  'shadow',
  'borderWidth',
  'zIndex',
  'motion',
  'state',
  'breakpoints',
];

const missingKeys = requiredTopLevelKeys.filter((key) => !(key in tokens));
if (missingKeys.length > 0) {
  throw new Error(`Missing required token groups: ${missingKeys.join(', ')}`);
}

const content = `export const tokens = ${JSON.stringify(tokens, null, 2)};\n`;
const types = [
  'export type AuroraTokens = typeof tokens;',
  'export const tokens: AuroraTokens;',
  '',
].join('\n');

fs.writeFileSync(outFile, content, 'utf-8');
fs.writeFileSync(outTypes, types, 'utf-8');
fs.writeFileSync(tokensJsonOut, tokensRaw, 'utf-8');
fs.copyFileSync(tokensCss, tokensCssOut);
