# Chiaty Outdoor — B2B Manufacturer Website — Design Contract

Produced via `canvas-designer` subagent (Canvas Design Contract Gate passed).

## Design Direction
"Rugged Industrial Manufacturer" — blends utilitarian, high-trust B2B identity with
earthy, adventurous outdoor aesthetics. Massive condensed headings evoke industrial
signage and premium outdoor gear; monospaced metadata carries factory stats (years,
MOQ, capacity, certifications). Palette grounded in forest green, sand, and charcoal.
Photography-heavy. Reads credible and professional for overseas wholesale buyers.

## Reference Sources
- vendor/open-design/adapter/STATIC_POLICY.md
- vendor/open-design/upstream/design-systems/Industrial-Brutalist-Utility/DESIGN.md
- vendor/open-design/upstream/design-systems/Industrial-Brutalist-Utility/tokens.css
- vendor/open-design/upstream/design-systems/Industrial-Brutalist-Utility/components.html
- vendor/open-design/upstream/craft/anti-ai-slop.md
- Real product data: Chiaty Alibaba store export (50 products) — products_list.json
- Example product: Chiaty CT-308 Portable Foldable Sport Camping Chair (metal frame)
- Manufacturer: Jinhua Jiading Leisure Co., Ltd (7+ yrs)

## Design Tokens
Colors:
- --color-canvas #D9CDB8 (sand/tan base)
- --color-ink #1A1A1A (charcoal text / primary UI)
- --color-forest #2D4F1E (forest green section blocks / brand)
- --color-accent #B85C38 (rust/clay CTAs + highlights)
- --color-paper #F1F0EE (off-white cards / inverse text)
- --color-border rgba(26,26,26,0.2)

Typography (SYSTEM FONTS ONLY — no Google Fonts / no @import / no external CDN):
- --font-display: 'Arial Narrow', 'Helvetica Neue Condensed', Impact, system-ui, sans-serif (condensed, uppercase)
- --font-mono: ui-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, monospace
- --font-body: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif

Scale/rhythm:
- h1 clamp(56px,12vw,140px), tracking -0.04em
- h2 clamp(40px,7vw,80px)
- meta 12px mono uppercase
- radius-sm 0px (industrial); radius-lg 24px (lifestyle image containers)
- section padding 96px 24px

## Page Structure
1. Home: industrial hero (lifestyle bg + huge H1 + origin utility bar) → capability marquee
   (OEM/ODM • capacity • ISO • BSCI) → category grid (Beach Chairs, Camping & Folding Chairs,
   Outdoor Tables, Loungers & Cots, Accessories) → factory-strength split (stats) →
   featured products → inquiry CTA band.
2. Products: monospaced category filter bar → responsive product grid (real 50 products),
   each card = image + name + price range + MOQ spec badges + "Request Quote" → inquiry.
3. About / Factory: company story → manufacturing capabilities stats → 4-step QC process →
   certifications strip → timeline.
4. Contact / Inquiry: lead-gen form (name, company, email, country, product interest,
   quantity/MOQ, message) with mailto submission fallback + direct contact block + Alibaba store link.

## Component Plan
UtilityBar (header, brand + location + sticky Request Quote), IndustrialHero, MarqueeStats,
CategoryCard, ProductCard (image + price range + MOQ), SpecBadge, StatBlock, InquiryForm, Footer.

## Copy Tone
Direct, utilitarian, rugged, professional. Lead with numbers. "Direct Factory Export",
"MOQ from 100pcs", "OEM/ODM Available". Avoid lifestyle fluff. CTA = "Request Quote" / "Submit Inquiry".

## Responsive Rules
- <768px: h1 down to ~48px, utility bar collapses, product grid 1-col.
- 768–1024px: 2-col grids, About sections stack.
- >1024px: full scale, max container 1400px, sticky Request Quote.

## Implementation Notes
- React + Vite + react-router-dom (already in template). Plain CSS with tokens (no Tailwind).
- lucide-react for icons (1.5px stroke). No emojis.
- Inquiry form: mailto: generator fallback (no backend yet).
- Hover ease cubic-bezier(0.16,1,0.3,1).
- Real product data lives in src/data/products.js. Images downloaded to public/assets/images/.

## Image Manifest
- Real product photos: 50 images downloaded from alicdn CDN → public/assets/images/products/*.jpg (provided/download).
- img-hero: home hero background → imageGenerate (rugged outdoor camp/beach lifestyle) OR fallback stock.
- img-factory: about factory floor → imageGenerate OR fallback.
- img-qc: about QC macro → imageGenerate OR fallback.
- Category thumbnails: reuse representative real product photos.

## Risks / Open Questions
- Factory stats (sq meters, capacity, certifications) are placeholder-typical; user to confirm exact figures.
- Contact email/WhatsApp to be confirmed by user; Alibaba store link used as canonical inquiry channel.
- Hero/factory/QC lifestyle images pending AI-generation approval; real product photos used as primary imagery.
