# McLir Seaweed — Product Requirements Doc

## Original problem statement
Rebuild the prototype at https://seaweed-turf-premium.preview.emergentagent.com/ into V2 for **McLir Seaweed**, a premium Atlantic *Ascophyllum nodosum* bio-products company. Keep the prototype's section flow (hero → product families → process → testimonials → FAQ → contact) but expand depth: more chapters, drill-downs, deeper technical content, full animal-feed chapter, manufacturing process, market insights with charts. Rebrand fully to McLir Seaweed (logo, name, contact = McLir@Sea-Weed.DE, location = Plombières, Belgium). Use the McLir Animal Feed Range brochure as content authority. Granulates should feel natural/earthy; liquid bottles should feel premium glass.

## Architecture
- **Frontend only** (React 19 + Tailwind + shadcn/ui + lucide-react + Recharts)
- React Router with 8 routes
- All content in /app/frontend/src/data/content.js (single source of truth)
- Static site — mailto contact, no backend persistence

## Tech stack
- React 19 + react-router-dom 7
- Tailwind CSS 3 with custom dark oceanic theme
- Cormorant Garamond + Manrope + IBM Plex Mono (Google Fonts)
- Recharts for market insights
- lucide-react for icons

## User personas
- B2B agricultural distributor evaluating product range & export readiness
- Feed compounder / mill QA reviewing technical specs and traceability
- Dairy / beef / equine / sheep / goat / poultry / pet-food formulator
- Investor / partner sizing the seaweed market opportunity

## Core requirements (static)
1. Multi-page nav with mega-menu for Products family
2. Premium dark oceanic visual identity (no AI-slop purples)
3. Liquid bottle visual = glass / premium feel
4. Granulate visual = warm earth tones + noise overlay
5. Animal Feed = full chapter, not just a card
6. Manufacturing process = 10-step visual timeline w/ 75°C / 12-14% moisture / batch traceability
7. Market Insights = Recharts bar (region) + pie (buyer segments)
8. data-testid on every interactive element
9. Brand: McLir Seaweed, McLir@Sea-Weed.DE, Plombières (Belgium)

## What's been implemented (2026-01)
- Sticky glass navigation with desktop mega-menu + mobile sheet
- Home page: hero + marquee + 4 family cards + stats + 3 pillars + animal CTA + process teaser + market teaser + FAQ accordion + contact band
- Liquid Seaweed page: 5 product tabs (Cold Press, Superior 30 Alkaline, Superior 30 Aqueous, Superior 20 Alkaline, Superior 20 Dried) with full per-product detail panel: source, method, tech-spec table, bioactives, use cases, rate, packaging, storage, batch note, sample CTA
- Granulates page: warm earth styling, noise overlay, 2 products (Soil Conditioner, Granulated Seaweed Meal) with technical spec tables, decorative granule cluster visual
- Water Soluble Powder page: premium product visual, full spec table, benefits, packaging, sample CTA
- Animal Feeding chapter: hero + sticky sub-nav (8 anchor sections) + Why Seaweed + Benefits-by-livestock cards + FBAM Fresh Frozen + Dry Meal composition table + Minerals/Vitamins/Amino Acids tables + 16-row Feeding Recommendations table + 5 Particle Sizes (2/10, 6/20, 10/20, 20/60, T60) + 4 Packaging formats + Final CTA
- Manufacturing Process page: 10-step alternating timeline w/ glowing nodes, stats panel (4:1, 75 °C, 12-14 %)
- Market Insights page: bar chart (6 regions including Ireland), donut/pie chart (5 buyer segments), 3 takeaway cards
- Contact page: large email display, 5 quick-subject mailto buttons, 4 contact tiles, export logistics panel
- Footer site-wide with email, location, section links

## Testing status
- iteration_1: 100% frontend pass, 0 console errors, all routes / CTAs / charts / tables / mailto links verified.
- Backend: N/A (frontend-only static site).

## Prioritized backlog (P0 / P1 / P2)
- **P1** Hi-res in-place product photography (currently uses kelp/Atlantic stock + decorative SVG vessels)
- **P1** Multilingual EN / FR / DE / NL toggle (Belgium-based — useful for export)
- **P1** Working contact form -> SendGrid / Resend (currently mailto only — fastest MVP)
- **P2** Per-product PDF data-sheet download
- **P2** Distributor portal with login (price lists, MSDS, COA)
- **P2** Blog / case-study chapter for grower & farmer testimonials
- **P3** Public batch-traceability lookup ("enter delivery number → see harvest origin")

## Future / enhancement ideas
- Lead capture: gated PDF download in exchange for email — turns the brochure site into a B2B lead engine
- Schema.org Product markup for SEO discoverability of each format

## Next tasks
- Await user review for content accuracy
- Add multilingual support if confirmed
- Wire backend contact form if confirmed
