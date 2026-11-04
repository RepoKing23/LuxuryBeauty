// Converts PNG/JPG in assets/images to WebP (originals removed after conversion). Run: npm run images
import sharp from 'sharp'; import fs from 'node:fs'; import path from 'node:path';
const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..', 'assets', 'images');
const KEEP_DIMS = /before-after/;             // crops in data.js use pixel coordinates, so never resize these
function* walk(d) {for (const e of fs.readdirSync(d, {withFileTypes: true})) {const p = path.join(d, e.name); if (e.isDirectory()) yield* walk(p); else yield p;}}
for (const f of walk(ROOT)) {
  if (!/\.(png|jpe?g)$/i.test(f)) continue;
  const out = f.replace(/\.(png|jpe?g)$/i, '.webp');
  let img = sharp(f); const m = await img.metadata();
  if (!KEEP_DIMS.test(f) && m.width > 1600) img = img.resize({width: 1600});
  await img.webp({quality: KEEP_DIMS.test(f) ? 82 : 78, effort: 5}).toFile(out);
  const a = fs.statSync(f).size, b = fs.statSync(out).size;
  console.log(path.relative(ROOT, f), m.width + 'x' + m.height, (a / 1024).toFixed(0) + 'KB ->', (b / 1024).toFixed(0) + 'KB');
  fs.unlinkSync(f);
}
