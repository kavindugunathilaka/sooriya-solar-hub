# Sooriya Solar Hub — sample site

A sample B2B + B2C solar wholesale webshop for the Sri Lankan market, modelled on European trade distributors (e.g. ESTG) and adapted for:

- **Installers:** trade accounts, 30-day credit, rural partner tiers, stock by province
- **Homeowners:** battery upgrade kits and a Net Plus savings calculator
- **Training:** Sooriya Academy courses with NVQ Level 3 preparation (the requirement starts 1 Jan 2028)
- **Network:** main warehouse + branch stores + partner depots across all 9 provinces

> "Sooriya Solar Hub" is a placeholder brand. All prices, stock levels, phone numbers and terms are **sample data** (`lib/data.ts`).

## Stack

- Next.js 15 (App Router, static export) + React 19 + TypeScript 5
- Tailwind CSS v4 with design tokens in `app/globals.css`
- Self-hosted fonts via Fontsource: Bricolage Grotesque (display), Instrument Sans (body), Noto Sans Sinhala
- lucide-react icons

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in ./out
```

> Use TypeScript 5.x: TypeScript 7 breaks Next 15's config loading.

## Pages

| Route | What it shows |
|---|---|
| `/` | Hero, category tiles, spotlight products, battery upgrade kits, locally made racking, brands, savings calculator, academy, provincial network, FAQ |
| `/shop/` | Catalogue with category, search, region-stock filter and sort (`?c=inverters`, `?q=jinko`) |
| `/academy/` | Courses, NVQ timeline, seat reservation |
| `/account/` | Trade account / homeowner / academy sign-up (sends via WhatsApp in this demo) |

## Next steps for production

- Go API for products, stock by branch, trade pricing tiers, credit and orders
- Auth for trade accounts; quote → order → invoice flow
- Sinhala and Tamil versions (`lang="si"` / `lang="ta"`)
- Real product photos, verified brand-authorisation, CEB/LECO-approved equipment flags
- CI/CD (GitHub Actions → Vercel / Cloudflare Pages), Playwright + axe tests

Built by Voyage.
