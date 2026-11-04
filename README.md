# Luxury Beauty by Cleo R. — static site (https://luxurybeautyaesthetic.com)

Plain static site. No vercel.json and no build step: every page has its own folder with an index.html, which Vercel serves automatically.

## Deploy
1. Put the CONTENTS of this folder at the root of your GitHub repo. Delete any old vercel.json / now.json.
2. Vercel → Add New → Project → import the repo. Framework Preset: Other. Build Command, Output Directory, Root Directory: empty.
3. Deploy, then add luxurybeautyaesthetic.com under Settings → Domains.

## Pages (29)
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
- /locations
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
- /med-spa-burlington
- /med-spa-milton
- /med-spa-mississauga
- /concerns/lips → redirects to /treatments/lip-filler

## SEO
- sitemap.xml: 25 indexable URLs; robots.txt points to it.
- Noindex: /policies, /privacy, /thank-you, 404.html.
- Location pages (/locations, /med-spa-burlington, /med-spa-milton, /med-spa-mississauga) include MedicalBusiness, BreadcrumbList and FAQPage schema.
- After deploying: resubmit sitemap in Search Console; test schema at https://search.google.com/test/rich-results

## Run locally
`npx serve .`
