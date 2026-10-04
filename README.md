# Pyrros

Pyrros is the new home of ByteForge, a builder community started in Kanpur in 2024. The site tells the story of the early hackathons, the IIT Kanpur hacker house, and Execron 1.0. It introduces a planned ₹5,000 to ₹20,000 grant program for high school and college builders.

## Run locally

Requires Node.js 24.

```bash
npm install
npm run dev
```

Set `PUBLIC_SITE_URL` in `.env.local` for canonical metadata and the sitemap. The site is a Next.js app with static pages and no database.

## Content

- `src/app/page.tsx`: homepage
- `src/app/story/page.tsx`: history and event record
- `src/app/grants/page.tsx`: planned grant program
- `src/app/people/page.tsx`: team and Execron contributors
- `src/app/brand.css`: visual system and responsive styles
- `public/pyrros`: original editorial art

Team photographs can be added to `public/pyrros` when available. Grant applications are not open yet; the current contact path is [Instagram](https://www.instagram.com/bytteforgespace/).
