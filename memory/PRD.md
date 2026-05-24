# McLir Seaweed — Product Requirements Doc

## Original problem statement
Premium B2B marketing site for **McLir Seaweed**, a Belgium-based (Plombières) producer of Atlantic *Ascophyllum nodosum* bio-products. Site must present a focused two-format portfolio — Liquid Seaweed and Granulates / Soil Conditioner — for professional agriculture, corporate farming, luxury landscaping and world-class lawns across Europe and the Middle East. Hard requirements: zero animal-feed content, premium dark oceanic visual identity, multilingual EN / DE / FR, GDPR-aligned legal page, contact page must remain stable. Brand assets: McLir@Sea-Weed.DE, Plombières, Belgium, Belderbusch 10, +49 177 1546204.

## Architecture
- **Frontend only** (React 19 + Tailwind + shadcn/ui + lucide-react + Recharts)
- React Router with 8 routes
- All content in /app/frontend/src/data/content.js (single source of truth)
- All translations in /app/frontend/src/i18n/i18n.jsx (en / de / fr)
- Static site — mailto contact, no backend persistence

## Tech stack
- React 19 + react-router-dom 7
- Tailwind CSS 3 with custom dark oceanic theme + kelp/amber accents
- Cormorant Garamond + Manrope + IBM Plex Mono (Google Fonts)
- Recharts for market insights
- lucide-react for icons

## Languages
- **EN** English, **DE** Deutsch, **FR** Français
- Estonian and Gaeilge / Gaelic both fully removed
- Persisted in localStorage as `mclir_lang`

## Routes
- `/` Home
- `/liquid` Liquid Seaweed (Cold Press 10 & 15 only)
- `/granulates` Granulates & Soil Conditioner
- `/lawns-and-turf` Lawns & Turf
- `/manufacturing` Manufacturing Process (10-step timeline with images)
- `/market-insights` Market Insights (6 charts)
- `/contact` Contact
- `/impressum-datenschutz` Imprint & Privacy Policy

## User personas
- B2B agricultural distributor evaluating product range & export readiness
- Corporate-farm purchasing manager / agronomist
- Golf course superintendent / luxury-turf programme owner
- Hotel / palace / estate grounds-keeping decision-maker
- Investor / partner sizing the seaweed biostimulants market

## Core requirements (static)
1. Multi-page nav with mega-menu for Products family
2. Premium dark oceanic visual identity (no AI-slop purples)
3. Liquid range = exactly two SKUs: **Cold Press 10** (10 % w/v) and **Cold Press 15** (15 % w/v), spec content sourced from official McLir TDS PDFs
4. Granulate visual = warm earth tones + noise overlay
5. Manufacturing process = 10-step alternating vertical timeline; each card has an inline image
6. Market Insights = 6 Recharts (region bar, buyer-segments donut with hover %, biostimulants line, EU imports bar, turf-by-region stacked, drought area)
7. Lawns & Turf chapter dedicated to corporate / luxury / golf use cases
8. GDPR Imprint & Privacy page in EN/DE/FR
9. Premium glass medallion crest on the Home hero (no harsh rectangle behind logo)
10. data-testid on every interactive element
11. Contact page strictly preserved
12. ZERO animal / Water Soluble Powder / Estonian / Gaelic content anywhere

## Implemented changelog

### 2026-02 — Three-language overhaul + Legal page + Cold Press only
- **i18n**: dropped `ga` (Gaeilge); LANGS now `[en, de, fr]`; added complete `page.impressum.*`, `impressum.*`, `privacy.*` keys
- **Liquid range**: rewrote `LIQUID_PRODUCTS` to only Cold Press 10 + Cold Press 15. Spec tables (dry matter, K₂O, amino acids, organic matter, alginic acid, mannitol, laminarin, phenolics, pH) sourced from official McLir TDS datasheets. Heavy-metals analysis tables (Iodine, Iron, Cu, iAs, Pb, Hg, Ni, Sn, Zn) included. Packaging `1 L · 5 L · 10 L · 20 L · 210 L · 1000 L · 1040 L`. Shelf life 3 years. Storage 4 – 40 °C. Certifications block (Organic Association, Ecocert, OMRI, Sustainable Seaweed Harvest). Origin block (Made in Ireland · North Atlantic). Foliar / Fertigation / Mixing usage block per datasheet
- **Liquid label imagery**: each product panel renders the official McLir bottle-label PNG supplied by the client
- **Manufacturing Process**: each of the 10 alternating-timeline cards now embeds a topic-relevant image (harvest, washing, milling, drying, sizing, batching, bagging, palletisation)
- **Home hero medallion**: rebuilt with double-glow + glass crest; logo uses `mix-blend-screen` so it sits naturally inside the medallion with no harsh rectangle
- **Impressum & Datenschutz page** (`/impressum-datenschutz`): GDPR-aligned, three-language. Imprint rows: Company, Owner placeholder, Address (Belderbusch 10, Plombières), Email, Phone, VAT placeholder, Register placeholder. Privacy sections: Controller, Personal data, Contact-form data, Analytics/Cookies, Legal basis (Art. 6(1)(b) + (f) GDPR), Storage duration, Rights, Transfers outside EU, Privacy-request contact, Updates. Legal-review disclaimer banner included
- **Footer**: added `Legal / Rechtliches / Mentions légales` block with link to `/impressum-datenschutz`
- **Background imagery**: added more ocean / Atlantic / kelp / agri-tech visuals across pages without crowding text
- **Routing**: added `/impressum-datenschutz` route in `App.js`

### 2026-01 (prior iterations)
- Lawns & Turf page, alternating timeline, market insights with hover percentages, 4 new charts, animal-feed and Water Soluble Powder removed

## Testing status
- iteration_6 (2026-02): 100 % frontend pass, 0 console errors. Acceptance criteria verified: GA fully removed, EN/DE/FR translations active, Cold Press 10/15 only, label images render, 10 process-step images render, donut center-label hover works, contact page unchanged, impressum reachable from footer in all three languages
- Backend: N/A (frontend-only static site)

## Prioritized backlog (P0 / P1 / P2)
- **P1** Per-product PDF data-sheet download (currently CTAs trigger mailto)
- **P1** Working contact form -> SendGrid / Resend (currently mailto only — fastest MVP)
- **P2** Distributor portal with login (price lists, MSDS, COA)
- **P2** Blog / case-study chapter for grower & turf-manager testimonials
- **P2** Schema.org Product markup for SEO discoverability of Cold Press 10 / 15
- **P3** Public batch-traceability lookup ("enter delivery number → see harvest origin")
- **P3** Lead capture: gated PDF download in exchange for email

## Future / enhancement ideas
- Cookie-consent banner if web analytics is added
- Brand-true favicon + Open Graph image set
- Cold Press 5 % SKU once the formulation is finalised

## Next tasks
- Await user review on the new Liquid range, Impressum copy and process imagery
- Once the legal-review disclaimer copy is signed off by the McLir legal team, switch placeholders (owner name, VAT, register) to final values
- Optional: add a downloadable PDF for the Imprint & Privacy page
