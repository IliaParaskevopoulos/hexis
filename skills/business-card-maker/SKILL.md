---
name: "business-card-maker"
description: "Use when Ilia asks to design a business card for himself, a client or a venture: brief, 3 directions, front/back design with real QR and logo, print-ready."
---

# Business Card Maker

Goal: a card people keep. It has one clear name, one clear reason to remember the person, and contact details you can read at arm's length. Look and feel come first, specific to the person and brand, never a template.

House reference: Ilia's own card "Business Card — AI Marketing Services" (https://claude.ai/artifact/VpD9mL6S3NJWJa6LQ8fNtZ). When making a card for Ilia, read it first and keep what works unless he asks for a redesign.
- Front: white, with the name very large and the title in the accent colour. One plain line says what he does ("I diagnose marketing systems and propose upgrades using AI"), with the website on the right and the logo mark on the side.
- Back: a full brand-colour field (deep purple) with the company name and short tagline, 2 sectors, then contact lines and a real QR code on a white tile.
- One family (Montserrat), one accent (magenta #A3127A), one colour field (#4B2080).

## 1. Brief (ask only what's missing, max 4 questions)
- Whose card: name exactly as printed, title, company/brand
- Contact lines to print (pick 3–4 max): website, email, phone, LinkedIn, address. Fewer is better.
- Brand assets: logo (SVG preferred), colours, fonts. If none exist, offer the logo-maker skill first or propose a simple wordmark.
- One line that makes the person memorable (what they do, in plain words), and where the QR should point
- Language(s), size (EU/CH 85 × 55 mm default; US 3.5 × 2 in), print or digital-only

If nobody is around to answer, use the defaults above, state them, and continue. Never invent phone numbers, emails or titles; use placeholders like [Phone].

## 2. Three directions
Show 3 genuinely different front/back pairs, each named with a mood line, fonts and palette (hex). Examples of real range:
- **Name-led**: huge name, almost nothing else on the front; everything practical on the back
- **Colour-field**: one side solid brand colour with only the logo or mark; the other side clean type
- **Mark-led**: an oversized cropped logo or brand graphic bleeding off the edge, with type set small and precise
- **Editorial**: strict grid, small type, generous white space, a single rule line
Let Ilia pick or mix. If he says "just pick", choose one and say which.

## 3. Layout rules
- **Hierarchy**: the name is the biggest thing on the card; the title is second; everything else is clearly smaller. One idea per side.
- **Front vs back**: the front is identity (name, title, one-liner, logo); the back is action (contacts, QR) or pure brand (colour field + mark). Don't repeat the same info on both sides, apart from the logo or website.
- **Contacts**: one per line, aligned, with no icons unless they are from one consistent set. Write them the short way (iliaparaskevopoulos.com, not https://www.…). Phone in international format (+41 …).
- **QR code**: generate a real, scannable QR with Python `qrcode`, using the dark brand colour on white, with a quiet zone of at least 4 modules and a print size of at least 18 mm. Upload it as an asset. Never draw a fake QR pattern. Test it by decoding it (e.g. `pyzbar`/`opencv`) before using it.
- **Logo**: use the real file (SVG or high-res PNG), uploaded as an asset. Never redraw someone's logo by hand.
- **Type**: 1 family (2 at most). Name 14–24 pt; title 8–10 pt; contacts 7–9 pt, never below 7 pt. Check the font covers every language used (Greek, German).
- **Colour**: one brand colour plus one accent at most. Text contrast ≥ 4.5:1; light text on dark fields needs extra weight (500+).
- **Spacing**: equal margins on all sides (≥ 4 mm safe zone), with elements aligned to edges and to each other. Use space between groups instead of divider lines; one rule line at most.

## 4. Avoid the "AI template" look (hard rules)
- No tiny tracked-caps labels like "EMAIL", "PHONE" or "CONTACT" in front of each line, and no numbered sections.
- No emoji, no clip-art icons, no gradient washes, no glassmorphism, no generic circuit or neural-network patterns for "AI".
- No left-border accent blocks, no outline chip tags, and no stats on a business card.
- No buzzword taglines ("Empowering growth through innovation"). The one-liner must be something the person would actually say out loud.
- Don't default to cream + serif + terracotta. Take colours from the person's own brand.
- The design device must come from the person or brand (their logo, mark, initials, product, place), not from a stock style.

## 5. Build (Design canvas)
- If a Design artifact type is listed, build there. Use two artboards, `Main.dc.html` (front) and `Back.dc.html` (back), side by side, with `radius` on the board only if the card will have rounded corners.
- Work at 12 px per mm: 85 × 55 mm = 1020 × 660 px (US 3.5 × 2 in = 1050 × 600 px). Safe margin of at least 48 px (4 mm); 72 px reads better.
- Make the accent colour a tweak, with 3 brand-safe swatch options. Copy stays literal text so it can be retyped in place.
- Optional: a third artboard showing both sides on a neutral background as a mockup, only if asked.

## 6. Print specs
- Trim 85 × 55 mm (EU/CH) or 3.5 × 2 in (US); 3 mm bleed on all sides, which backgrounds and colour fields must extend into; 4 mm safe zone.
- Note in the handoff that the canvas PDF export has no bleed or crop marks, so the print shop (or a final PDF step) must add them. Offer to build a print PDF with bleed in HTML → PDF if needed.
- Paper suggestions: 350–400 g uncoated or matte. Optional finishes (only if it fits the brand): soft-touch laminate, spot UV on the logo, or a coloured edge in the accent colour.

## 7. Review checklist
- [ ] At arm's length (zoom out to ~25%), the name and what the person does are readable at once
- [ ] Every contact detail is correct and comes from the person; no invented data
- [ ] The QR code scans and points to the right URL
- [ ] Nothing important sits within 4 mm of the edge, and the margins are equal
- [ ] Contacts are no smaller than 7 pt and contrast passes on both sides
- [ ] None of the section 4 patterns appear
- [ ] The front and back feel like one card: same family, same colours, and the same alignment logic

## 8. Handoff
In the reply, give a short note with the size, paper and finish suggestion, the fonts and colours (hex + CMYK approximations), the QR target URL, and any placeholders still to fill. Offer one next step: a matching email signature, LinkedIn banner, or letterhead.