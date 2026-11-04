// Build: bundles the React app (production), prerenders every route to static HTML, writes sitemap.
// Run: npm run build   (output is committed; Vercel serves the static files as-is)
import {build} from 'esbuild';
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {createRequire} from 'node:module';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const SRC = p => path.join(ROOT, 'src', p);
const read = p => fs.readFileSync(SRC(p), 'utf8');
const require = createRequire(import.meta.url);

// Order matters: later files use globals defined by earlier ones.
const ORDER = [
  'ds.js', 'content/data.js', 'content/treatmentContent.js', 'content/concernContent.js',
  'content/areaContent.js', 'content/seoMeta.js', 'content/scrollReveal.js',
  'jsx/Shared.jsx', 'jsx/HomeSeo.jsx', 'jsx/Home.jsx', 'jsx/Treatments.jsx', 'jsx/TreatmentDetail.jsx',
  'jsx/ConcernDetail.jsx', 'jsx/Pages.jsx', 'jsx/MorePages.jsx', 'jsx/ServiceArea.jsx', 'app.jsx',
];
const body = ORDER.map(f => `\n/* ---- ${f} ---- */\n` + read(f)).join('\n');

const common = {
  bundle: true, write: false, loader: {'.js': 'jsx', '.jsx': 'jsx'}, jsx: 'transform',
  define: {'process.env.NODE_ENV': '"production"'}, logLevel: 'error',
};

// ---- client bundle ----
const clientEntry = `
import React from 'react';
import {createRoot, hydrateRoot} from 'react-dom/client';
window.React = React; window.LB_HISTORY = true;
${body}
const rootEl = document.getElementById('root');
if (rootEl.hasChildNodes()) hydrateRoot(rootEl, React.createElement(App)); else createRoot(rootEl).render(React.createElement(App));
`;
const client = await build({...common, stdin: {contents: clientEntry, loader: 'jsx', resolveDir: ROOT, sourcefile: 'client-entry.jsx'},
  format: 'iife', platform: 'browser', target: 'es2019', minify: true});
const js = client.outputFiles[0].text;
const hash = crypto.createHash('sha1').update(js).digest('hex').slice(0, 10);
fs.mkdirSync(path.join(ROOT, 'js'), {recursive: true});
for (const f of fs.readdirSync(path.join(ROOT, 'js'))) if (/^app\.[0-9a-f]{10}\.js$/.test(f)) fs.unlinkSync(path.join(ROOT, 'js', f));
const jsName = `app.${hash}.js`;
fs.writeFileSync(path.join(ROOT, 'js', jsName), js);

// ---- server bundle (prerender) ----
const serverEntry = `
import React from 'react';
import {renderToString} from 'react-dom/server';
globalThis.window = globalThis; window.React = React; window.LB_HISTORY = true;
globalThis.location = {pathname: '/'};
globalThis.document = {head: {querySelector() {return null}}, getElementById() {return null}, querySelector() {return null}, querySelectorAll() {return []}};
globalThis.setInterval = () => 0;
globalThis.localStorage = {getItem() {return null}, setItem() {}};
${body}
globalThis.__lb = {
  render(p) {location.pathname = p; return renderToString(React.createElement(App))},
  paths() {
    const M = window.LB_META, D = window.LB_DATA, out = [];
    for (const k of Object.keys(M.pages)) out.push({page: k, path: M.pages[k].path});
    for (const t of D.treatments) out.push({page: 'treatment', key: t.slug, path: window.LB_routeToPath({page: 'treatment', key: t.slug})});
    for (const c of D.concerns) if (c.name !== 'Lips') out.push({page: 'concern', key: c.name, path: window.LB_routeToPath({page: 'concern', key: c.name})});
    for (const a of Object.keys(window.LB_AREAS)) out.push({page: 'area', key: a, path: window.LB_AREAS[a].path});
    return out;
  },
  meta(page, key) {return window.LB_getMeta(page, key)},
};
`;
const server = await build({...common, stdin: {contents: serverEntry, loader: 'jsx', resolveDir: ROOT, sourcefile: 'server-entry.jsx'},
  format: 'cjs', platform: 'node', target: 'node18'});
const tmp = path.join(ROOT, 'node_modules', '.lb-server.cjs');
fs.writeFileSync(tmp, server.outputFiles[0].text);
require(tmp);
const lb = globalThis.__lb;

// ---- HTML shell ----
const esc = s => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const SITE = window.LB_SITE;
const FONTS = 'https://fonts.googleapis.com/css2?family=Bellefair&family=Inter:wght@300..700&family=Mrs+Saint+Delafield&display=swap';
const css = fs.existsSync(path.join(ROOT, 'src/site.css')) ? '' : '';
function page(r) {
  const m = lb.meta(r.page, r.key);
  const html = lb.render(m.path);
  const og = r.page === 'Home' ? 'website' : 'article';
  const head = [
    '<meta charset="utf-8">',
    '<meta name="viewport" content="width=device-width, initial-scale=1">',
    `<title>${esc(m.title)}</title>`,
    `<meta name="description" content="${esc(m.desc)}">`,
    `<meta name="robots" content="${esc(m.robots)}">`,
    `<link rel="canonical" href="${esc(m.canonical)}">`,
    '<meta property="og:locale" content="en_CA">',
    `<meta property="og:type" content="${og}">`,
    `<meta property="og:title" content="${esc(m.title)}">`,
    `<meta property="og:description" content="${esc(m.desc)}">`,
    `<meta property="og:url" content="${esc(m.canonical)}">`,
    `<meta property="og:site_name" content="${esc(SITE.name)}">`,
    `<meta property="og:image" content="${SITE.url}${SITE.image}">`,
    '<meta name="twitter:card" content="summary_large_image">',
    `<meta name="twitter:title" content="${esc(m.title)}">`,
    `<meta name="twitter:description" content="${esc(m.desc)}">`,
    `<meta name="twitter:image" content="${SITE.url}${SITE.image}">`,
    '<meta name="google-site-verification" content="YRgNkUO9V9HT7ugG-mby_EjH4SFpdBaLlNuj4dc9TCo">',
    '<link rel="icon" type="image/png" href="/assets/logo-icon.png">',
    '<link rel="preconnect" href="https://fonts.googleapis.com">',
    '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>',
    `<link rel="stylesheet" href="${FONTS}">`,
    '<link rel="stylesheet" href="/styles.css">',
    m.schema ? `<script type="application/ld+json" id="lb-schema">${JSON.stringify(m.schema).replace(/</g, '\\u003c')}</script>` : '',
    `<script defer src="/js/${jsName}"></script>`,
  ].filter(Boolean).join('\n');
  return `<!DOCTYPE html>\n<html lang="en-CA">\n<head>\n${head}\n</head>\n<body>\n<div id="root">${html}</div>\n</body>\n</html>\n`;
}

const routes = lb.paths();
const written = [];
for (const r of routes) {
  const file = r.page === 'NotFound' ? '404.html' : (r.path === '/' ? 'index.html' : r.path.slice(1) + '/index.html');
  const out = path.join(ROOT, file);
  fs.mkdirSync(path.dirname(out), {recursive: true});
  fs.writeFileSync(out, page(r));
  written.push({...r, file, robots: lb.meta(r.page, r.key).robots});
}

// ---- sitemap ----
const today = new Date().toISOString().slice(0, 10);
const urls = written.filter(r => !/noindex/.test(r.robots)).map(r =>
  `  <url><loc>${SITE.url}${r.path === '/' ? '/' : r.path}</loc><lastmod>${today}</lastmod></url>`);
fs.writeFileSync(path.join(ROOT, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`);
console.log(`bundle js/${jsName} ${(js.length / 1024).toFixed(0)} KB; ${written.length} pages; ${urls.length} in sitemap`);
process.exit(0);
