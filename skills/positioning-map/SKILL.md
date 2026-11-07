---
name: "positioning-map"
description: "Use when Ilia asks to position a company or product: finds meaningful differentiation factors, maps competitors on one or more positioning charts, and writes the positioning phrase and statement."
---

# Positioning map

Goal: show, on one page, where a company stands against its competitors on the factors buyers actually choose on, and say in one phrase why it is the better choice for a specific buyer. The output is a positioning visualization plus a positioning phrase. Positioning only: messaging comes later (use the messaging-house skill).

## 1. Brief (ask only what's missing, max 4 questions, in one message)
Start from the company's website, deck or LinkedIn and fetch them. Then ask only for what you can't find:
- The product or business unit to position (if the company has several)
- The target buyer: segment, role, company size, region
- The competitors the buyer compares it with (if unknown, find them)
- What the buyer would use if this product didn't exist (the real alternative, often "do nothing" or a spreadsheet)

If nobody is there to answer, make reasonable assumptions, list them at the top, and continue.

## 2. Research the competitive set
- Pick 4–7 competitors the buyer really considers, plus the status-quo alternative.
- For each one, read their website, pricing page, product pages and recent press. Note who they target, what they claim, how they price, what they can prove.
- Note what buyers say they care about: reviews (G2, Capterra, Trustpilot), RFP criteria, analyst reports, trade press, the company's own case studies.
- Keep a source next to every fact.

## 3. Find meaningful differentiation factors
List 8–12 candidate factors, then score each one on three tests:
- **Meaningful**: buyers actually choose on it (evidence from reviews, case studies, RFPs, interviews).
- **Different**: competitors are spread out on it; if everyone scores the same, it can't position anyone.
- **Defensible**: the company has proof and it is hard to copy quickly.

Keep only factors that pass all three. Then:
- Write each factor as a spectrum with plain words at both ends, e.g. "Off-the-shelf ↔ Built to your spec", "Lab scale ↔ Industrial scale", "Self-serve ↔ Hands-on expert support".
- Avoid empty factors: "quality", "innovation", "customer focus", "value". Avoid "cheap ↔ premium" unless price really is the choice.
- Check that the two axes on a chart are independent (if high on one almost always means high on the other, pick another pair).

## 4. Score the competitors
- Score every company 1–10 on each kept factor. Write one line of evidence for each score.
- Mark scores based on public claims only as "claimed", and those with real proof as "proven".
- Score the target company with the same strictness as the others. If it doesn't stand apart on a factor, say so instead of moving the dot.

## 5. Build the visualization
Read the dataviz skill before drawing. Make:
- **Primary map**: one 2×2 chart on the two strongest, independent factors. Each company is a labelled dot; the target company is the only coloured dot (brand colour, or Byzantine purple #702963 by default); all others are grey. Axis ends are labelled in words, not numbers. Mark the open space the target company can own with a light outline and a short label.
- **1–2 alternative maps** on other factor pairs, only if they show something the primary map doesn't (e.g. a different buyer segment).
- **Factor profile** when more than two factors matter: one row per factor, a dot per company on a 1–10 line (dot plot), target company highlighted. Use this instead of a radar chart.
- **Score table**: factors × companies, with the evidence lines and "claimed/proven" marks, collapsed below the charts.

Design: minimal, one font family (Montserrat by default, or the client's), lots of white space, no 3D, no gradients, no icons, no quadrant clichés like "Leaders / Challengers". Quadrant labels, if any, describe the buyer's situation in plain words.

Build it as one HTML artifact (hand-built SVG or a charting library), so it can be shared and exported. If a Design or Dashboard artifact type is listed and fits, use it.

## 6. Write the positioning
- **Positioning phrase**: one line, 12 words or fewer, that a salesperson could say out loud. It names who it's for and the one difference that matters. E.g. "Industrial-scale microcapsules, with lab-level precision, for fragrance houses."
- **Positioning statement** (internal, not a tagline):
  For [target buyer] who [need or problem], [product] is a [category] that [key benefit]. Unlike [main alternative], it [main proof-backed difference].
- **Why we win**: 3 bullets, each tied to a factor on the map and a proof point.
- **Where we don't compete**: 1–2 lines on buyers or needs the company should not chase.

Plain language. No buzzwords ("unlock", "leverage", "seamless", "next-generation", "best-in-class"). Every claim must be backed by the score table; anything unproven is marked as a hypothesis to validate.

## 7. Check before showing
- [ ] Every factor passed Meaningful, Different and Defensible, with evidence
- [ ] The two axes on each map are independent and labelled in words
- [ ] The target company was scored as strictly as competitors; it isn't top-right just by wishful thinking
- [ ] The status-quo alternative is on the map
- [ ] The phrase is 12 words or fewer and names the buyer and the difference
- [ ] The statement's "unlike" names a real alternative, and its claim is proven or marked as a hypothesis
- [ ] Competitor swap test: could a competitor say the same phrase? If yes, sharpen it

## 8. Handoff
In the reply: the chosen factors and why, the open space on the map, the positioning phrase, and any hypothesis that needs customer validation (suggest 5 customer interviews to test it). Offer one next step: build the messaging house from this positioning.