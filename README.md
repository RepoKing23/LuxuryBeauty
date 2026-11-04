# Luxury Beauty by Cleo R. — static site (https://luxurybeautyaesthetic.com)

Plain static site. No vercel.json and no build step: every page has its own folder with an index.html, which Vercel serves automatically.

## Deploy to Vercel
1. Put the CONTENTS of this folder at the root of your GitHub repo. Delete any old vercel.json / now.json.
2. Vercel → Add New → Project → import the repo.
3. Framework Preset: Other. Build Command, Output Directory, Root Directory: empty.
4. Deploy, then add luxurybeautyaesthetic.com under Settings → Domains.

## Pages (29, each with its own title/description/canonical/robots/Open Graph baked in)
- /
- /treatments
- /concerns
- /about
- /cleo-difference
- /your-visit
- /faq
- /inclusive-care
- /before-after
- /contact
- /locations (schema)
- /policies
- /privacy
- /thank-you
- 404.html
- /treatments/botox-neurotoxins
- /treatments/dermal-fillers
- /treatments/lip-filler
- /treatments/fat-dissolving
- /treatments/weight-loss
- /treatments/skin-boosters
- /treatments/iv-infusions
- /concerns/fine-lines-wrinkles
- /concerns/facial-volume-definition
- /concerns/skin-hydration-radiance
- /concerns/wellness-weight-management
- /med-spa-burlington (schema)
- /med-spa-milton (schema)
- /med-spa-mississauga (schema)
- /concerns/lips → redirects to /treatments/lip-filler

## Location pages (local SEO)
- /locations: hub. Schema: MedicalBusiness (areaServed Oakville, Burlington, Milton, Mississauga), CollectionPage + ItemList + BreadcrumbList, FAQPage.
- /med-spa-burlington, /med-spa-milton, /med-spa-mississauga. Schema: MedicalBusiness (areaServed Oakville + city), WebPage + BreadcrumbList, FAQPage.
- Content lives in js/areaContent.js; titles/descriptions in js/seoMeta.js.
- Validate after deploy: https://search.google.com/test/rich-results

## SEO
- sitemap.xml: 25 indexable URLs; robots.txt points to it.
- Noindex: /policies, /privacy, /thank-you, 404.html.

## Run locally
`npx serve .`
