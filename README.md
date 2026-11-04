# Luxury Beauty by Cleo R. — static site (https://luxurybeautyaesthetic.com)

React site that is **prerendered to plain HTML at build time**. Every page ships with its full content, title, meta tags and JSON-LD in the HTML, then React hydrates it for client-side navigation. No server: Vercel builds once and serves static files.

## Edit → build → deploy
Source lives in `src/`. The build writes the deployable site to `public/` (git-ignored). Vercel runs `npm run build` on every push, so you only commit source changes.

```bash
npm install          # once
npm run build        # bundles React (production), prerenders all pages, rewrites sitemap.xml
node tools/serve.mjs # preview at http://localhost:4173
npm run images       # converts any new PNG/JPG in assets/images to WebP
```
Commit and push. `vercel.json` sets the build command and `public` as the output directory. Use Framework Preset **Other**.

## Where things are
- `src/content/seoMeta.js`: titles, descriptions, URLs and all JSON-LD schema (business, service, FAQ, breadcrumbs).
- `src/content/treatmentContent.js`, `concernContent.js`, `areaContent.js`, `data.js`: page copy.
- `src/jsx/*.jsx`: page layouts. `src/ds.js`: shared components (header, footer, cards). `src/app.jsx`: router.
- `vercel.json`: clean URLs, 301 redirects for removed pages, and cache headers.

## Pages
- `/`, `/treatments`, `/concerns`, `/about`, `/your-visit`, `/faq`, `/before-after`, `/contact`, `/locations`
- `/treatments/{botox-neurotoxins, dermal-fillers, lip-filler, fat-dissolving, weight-loss, skin-boosters, iv-infusions}`
- `/concerns/{under-eye-hollows-tired-eyes, jaw-clenching-teeth-grinding, smile-lines-marionette-lines}`
- `/med-spa-burlington`, `/med-spa-milton`, `/med-spa-mississauga`
- Noindex: `/policies`, `/privacy`, `/thank-you`, `404.html`

Removed (301-redirected in `vercel.json`): `/cleo-difference` and `/inclusive-care` (merged into `/about`), and the four old concern pages that competed with treatment pages.

## After deploying
1. Resubmit `sitemap.xml` in Search Console and request indexing for `/about` and the three new concern pages.
2. Test schema at https://search.google.com/test/rich-results
3. Review the three new concern pages and the longer treatment sections with Cleo before launch (typical clinical norms; Cleo to confirm).
