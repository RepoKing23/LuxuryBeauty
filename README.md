# Luxury Beauty by Cleo R. — static site (https://luxurybeautyaesthetic.com)

Plain static site. No vercel.json and no build step needed: every page has its own folder with an index.html, which Vercel serves automatically.

## Deploy to Vercel
1. Put the CONTENTS of this folder at the root of your GitHub repo (index.html, js/, jsx/, assets/, treatments/, concerns/ … at top level). Delete any old vercel.json / now.json from the repo.
2. Vercel → Add New → Project → import the repo.
3. Framework Preset: Other. Build Command, Output Directory, Root Directory: empty.
4. Deploy, then add luxurybeautyaesthetic.com under Settings → Domains.

## Pages
Each URL has its own HTML file with its title, description, canonical, robots and Open Graph tags baked in (Google and link previews read them without JavaScript):
- index.html
- treatments/index.html
- concerns/index.html
- about/index.html
- cleo-difference/index.html
- your-visit/index.html
- faq/index.html
- inclusive-care/index.html
- before-after/index.html
- contact/index.html
- policies/index.html
- privacy/index.html
- thank-you/index.html
- 404.html
- treatments/botox-neurotoxins/index.html
- treatments/dermal-fillers/index.html
- treatments/lip-filler/index.html
- treatments/fat-dissolving/index.html
- treatments/weight-loss/index.html
- treatments/skin-boosters/index.html
- treatments/iv-infusions/index.html
- concerns/fine-lines-wrinkles/index.html
- concerns/facial-volume-definition/index.html
- concerns/skin-hydration-radiance/index.html
- concerns/wellness-weight-management/index.html
- concerns/lips/index.html → redirects to /treatments/lip-filler

## SEO
- sitemap.xml lists the indexable pages; robots.txt points to it.
- Noindex (meta robots, excluded from sitemap): /policies, /privacy, /thank-you, 404.html.
- Google Search Console verification tag kept from the live site.

## Structure
- js/ds-bundle.js: design-system components · js/*.js: content, SEO meta, animations · jsx/: page components · styles.css + tokens/: design tokens · assets/: logo + photos

## Run locally
`npx serve .`
