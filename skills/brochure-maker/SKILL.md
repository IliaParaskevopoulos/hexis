---
name: "brochure-maker"
description: "Use when Ilia asks to design a brochure, leaflet, flyer, tri-fold, bi-fold or product booklet for a client, prospect or own venture — from brief to 3 visual directions to print-ready PDF."
---

# Brochure Maker

Goal: brochures that look like a good agency made them for this one client, not like a template. Look and feel comes first. Copy is clear and plain. Print specs are correct.

## 1. Brief (ask only what is missing, max 4 questions)
- Who reads it, and where they get it (trade fair, sales visit, mailbox, reception rack, PDF by email)
- The one thing the reader should do after reading (CTA)
- Format: tri-fold DL, bi-fold A4, A5/A4 booklet (4/8/12 pp), or single flyer
- Brand assets: logo, colours, fonts, photos. If none, say so and propose them
- Language(s) and amount of content (product list, specs, testimonials)

If the person is not around to answer, pick sensible defaults, state them at the top, and continue.

## 2. Content skeleton before design
- One message per panel/page. Write the panel map first, but derive it from the subject, not a fixed template. A product sheet, a guest leaflet and an event flyer need different structures.
- Headlines: 3–8 words, concrete, no buzzwords. Body: short sentences, benefits before features.
- Copy is simple and human. Avoid AI-sounding phrasing (no "unlock", "elevate", "seamless", "in today's fast-paced world").
- Cut copy until each panel has room to breathe. White space beats completeness.
- Never invent facts or numbers. Use only sourced claims; missing details become visible placeholders like [Phone] or [Sleeps X].

## 3. Three visual directions
Present 3 named directions. For each one: a mood sentence, a reference style, a type pair, a palette (hex) and one cover thumbnail. Make them clearly different, e.g.:
- **Editorial / Swiss**: strict grid, big grotesk headlines, lots of white, one strong accent
- **Warm / Crafted**: serif display + humanist sans, earthy palette, textured or photographic
- **Bold / Industrial-tech**: dark backgrounds, condensed type, technical line graphics, data callouts
- **Clinical premium** (life sciences): soft neutrals, thin rules, generous margins, precise iconography
Let Ilia pick or mix, then lock the system. If he says "just pick", choose one and say which.

## 4. Avoid the "AI template" look (hard rules)
These patterns make a brochure look machine-made. Do not use them:
- **No numbered section kickers**: no "01 — WHY IT MATTERS", "02 — THE RANGE", "03 — ABOUT US".
- **No small tracked-caps eyebrow label above every headline.** If a page needs a locator, make the headline itself do it (e.g. the city or product name as the headline).
- **No generic "How we work with you" process strip** of 3–4 numbered circles (Specify → Design → Deliver). Only show a process if the client really sells one, and then draw it in a way specific to them.
- **No default 3-big-stats row** with thin rules on top. Use a number only when it is real and is the story; give it its own treatment.
- **No A/B/C/D lettered card grids, no outline "chip" tag rows, no left-border accent cards, no gradient washes, no emoji.**
- **No monospace "technical" labels as decoration** unless the brand really uses mono.
- **Don't repeat the same page skeleton** (label → headline → paragraph → grid) on every page. Vary the layout: one full-bleed image page, one type-led page, one dense detail page.

Do instead:
- Let the subject drive the visual device: a real product photo or diagram, a map, a site plan, a material texture, a signature graphic drawn from what the client actually makes.
- Hierarchy through scale and placement, not labels: one dominant element per page.
- Write headings as a person would say them, in sentence case.
- Use real photography of the client's own product, place or people. If missing, leave clearly labelled photo placeholders and design around them so the layout still works once photos arrive.

## 5. Design system (lock before layout)
**Typography**
- Max 2 families (Google Fonts, embedded). Check language support (Greek, German umlauts, etc.) before choosing.
- Fixed scale (e.g. 9 / 11 / 14 / 20 / 32 / 56 pt). Body ≥ 11–12 pt print, line-height 1.35–1.5, 45–75 characters per line.
- One hero line per panel. Hierarchy through size and weight, not more colours.
- Left-aligned body text, no full-justify without hyphenation, no centred paragraphs.
- Use tabular numbers for specs and prices, real quotes and dashes, and no orphans or widows.
- Bilingual: pick a primary language and set the second clearly subordinate (smaller, lighter or italic), consistently on every panel.

**Colour**
- 60/30/10: neutral base, brand primary, one accent used only for CTA and key highlights.
- Body text contrast ≥ 4.5:1. Never grey text on photos without an overlay.
- Define colours as CSS variables, and give CMYK approximations in the handoff notes.
- Don't default to cream + serif + terracotta; pick colours from the client's world.

**Grid & spacing**
- Use a 12-column or modular grid per panel and an 8 pt (or 4 mm) spacing scale. Margins are always equal and generous (≥ 10 mm outer).
- Align everything to the grid. Images bleed or sit on the grid, never float randomly.
- Rhythm: alternate dense and airy panels, with at least one full-bleed image or colour field.

**Imagery & graphics**
- One consistent photo treatment (all duotone, all natural, or all cut-out). Never mix stock styles.
- Icons come from one set with one stroke weight.
- No clip art, no generic handshake stock, no gradients unless the brand uses them.
- Don't put photos of real public figures in the brochure. Use the client's own photos, licensed stock or abstract graphics.

## 6. Print specs
| Format | Trim | Panels |
|---|---|---|
| Tri-fold DL | 297 × 210 mm | 6 panels; inside-fold panel 97 mm, others 100 mm |
| Bi-fold A4 | 420 × 297 mm flat | 4 pages A4 |
| A5 booklet | 148 × 210 mm | multiples of 4 pages |
| Flyer | A5 or A4 | 1–2 sides |
- 3 mm bleed on all sides, 5 mm safe zone inside the trim and fold lines.
- Images ≥ 300 dpi at final size, logo as SVG.
- Tri-fold order: outside = [inside flap | back | cover], inside = [3 panels]. The cover goes on the right outside panel.

## 7. Build
- If a Design artifact type is listed, build there (one artboard per page, or per tri-fold face). Otherwise build HTML/CSS with exact mm units and render to PDF with Chromium headless or WeasyPrint.
- Deliver: print PDF (with bleed and crop marks, or tell Ilia the print shop must add bleed if the export has none), screen PDF, and previews.

## 8. Review (checklist)
- [ ] Squint test: is the hierarchy obvious and the eye path clear (cover → headline → CTA)?
- [ ] None of the section 4 template patterns appear anywhere
- [ ] Pages don't all share one skeleton; the visual device is specific to this client
- [ ] Everything on the grid, with equal margins and nothing in the fold or safe zone
- [ ] Panels don't feel crowded, with ≥ 30% white space on text panels
- [ ] No orphans/widows, overflow, clipped text or awkward line breaks in headlines
- [ ] Contrast OK, and the accent is used only for emphasis/CTA
- [ ] Fonts support every language used, and images are sharp at 100%
- [ ] CTA and contact details are on the back or last page and easy to find
- [ ] Copy is plain, typo-free, consistent in tone, and every claim is sourced or a placeholder

## 9. Handoff
Give one short note with the format, paper suggestion (e.g. 170 g silk inside, 300 g cover for booklets), the fonts and colours used, and the list of placeholders still to fill. Offer one next step, e.g. a matching flyer, a LinkedIn carousel or a translated version.