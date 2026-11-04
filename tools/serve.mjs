// Tiny static server for local testing: node tools/serve.mjs [port]  (mimics Vercel clean URLs + 404.html)
import http from 'node:http'; import fs from 'node:fs'; import path from 'node:path';
const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..', 'public');
const T = {'.html':'text/html; charset=utf-8','.js':'text/javascript','.css':'text/css','.webp':'image/webp','.png':'image/png','.jpg':'image/jpeg','.svg':'image/svg+xml','.xml':'application/xml','.txt':'text/plain','.woff2':'font/woff2'};
http.createServer((q, s) => {
  let p = decodeURIComponent(q.url.split('?')[0]); let f = path.join(ROOT, p);
  if (!f.startsWith(ROOT)) {s.writeHead(403); return s.end();}
  if (fs.existsSync(f) && fs.statSync(f).isDirectory()) f = path.join(f, 'index.html');
  else if (!fs.existsSync(f) && fs.existsSync(f + '/index.html')) f = f + '/index.html';
  if (!fs.existsSync(f)) {s.writeHead(404, {'content-type': T['.html']}); return s.end(fs.readFileSync(path.join(ROOT, '404.html')));}
  s.writeHead(200, {'content-type': T[path.extname(f)] || 'application/octet-stream'}); fs.createReadStream(f).pipe(s);
}).listen(+process.argv[2] || 4173, () => console.log('serving'));
