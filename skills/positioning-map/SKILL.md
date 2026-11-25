---
name: "positioning-map"
description: "Use when Ilia asks to position a company or product: makes the five connected positioning decisions (alternatives, unique attributes, value, best-fit buyers, category), maps competitors on positioning charts, and writes the positioning phrase and statement."
---

# Positioning map

Goal: show, on one page, where a company stands against its competitors on the factors buyers actually choose on, and say in one phrase why it is the better choice for a specific buyer. The output is a positioning visualization plus a positioning phrase. Positioning only: messaging comes later (use the messaging-architecture skill).

Positioning, in practice, is a set of five connected decisions (based on April Dunford's *Obviously Awesome*). Make them in this order; each one comes from the one before it, and if an early one changes, redo the later ones:
1. **Alternatives**: which alternatives the buyer is really comparing you against (step 2)
2. **Unique attributes**: which attributes you have that those alternatives do not (steps 3–4)
3. **Value**: what value those attributes produce (step 4b)
4. **Best-fit buyers**: which buyers care about that value the most (step 4c)
5. **Category**: what category frames the whole picture so the value is obvious to the right buyer (step 4d)

Never start from the category or the features. Always start from the alternatives.

Reuse any value-proposition, icp-buyer-personas or messaging-architecture output that already exists for the company instead of re-researching.

## 1. Brief (ask only what's missing, max 4 questions, in one message)
Start from the company's website, deck or LinkedIn and fetch them. Then ask only for what you can't find:
- The product or business unit to position (if the company has several)
- The target buyer: segment, role, company size, region
- The competitors the buyer compares it with (if unknown, find them)
- What the buyer would use if this product didn't exist (the real alternative, often "do nothing" or a spreadsheet)

If nobody is there to answer, make reasonable assumptions, list them at the top, and continue.

## 2. Decision 1: competitive alternatives
- List what a buyer would actually do if the company didn't exist, not only named competitors: an in-house team, a broker or agency, a consultant, spreadsheets, an ERP add-on, doing nothing.
- Rank them by how often they come up in real deals (evidence first; mark assumptions).
- For each: why buyers pick it today, and where it falls short.
- Name the **main alternative**. Everything after this is measured against it.
- Pick 4–7 competitors the buyer really considers, plus the status-quo alternative, for the map.
- For each one, read their website, pricing page, product pages and recent press. Note who they target, what they claim, how they price, what they can prove.
- Note what buyers say they care about: reviews (G2, Capterra, Trustpilot), RFP criteria, analyst reports, trade press, the company's own case studies.
- Keep a source next to every fact.

## 3. Decision 2: unique attributes, as differentiation factors
First list the company's attributes (features, capabilities, data, team expertise, business model, delivery, integrations, references). Keep only those the main alternative really lacks; cut anything a competitor could also claim. Mark each proven or claimed ([PLACEHOLDER: proof needed]). Then turn them into factors for the map:
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

## 4b. Decision 3: value
- Turn each unique attribute into value with "which means that...": attribute → benefit → business outcome (money saved, risk avoided, time freed, revenue won).
- Group into 2–4 value themes. Each traces back to at least one unique attribute. One real proof per theme; missing proof becomes [PLACEHOLDER]. Never invent stats or customers.

## 4c. Decision 4: best-fit buyers
- Find the characteristics that make a buyer care most about the value themes: industry, size, footprint, situation, trigger event, team setup.
- Describe the segment specifically enough that sales could build a target list from it. Name public example customers.
- Say who is NOT a good fit and why. If several segments fit, pick the beachhead and say why.

## 4d. Decision 5: market category
- Test 2–3 options: an existing category (head-to-head), a subcategory ("X for Y"), or a new category (only if the market is truly unserved; name the cost of educating buyers).
- For each: what buyers assume when they hear it, who you get compared to, and whether it makes the value obvious or hides it.
- Pick one and say why.

## 5. Build the visualization
Read the dataviz skill before drawing. Make:
- **Positioning chain** (first board): the five decisions as five linked cards left to right with arrows: main alternative → top unique attribute → top value → best-fit buyer → category. Each card shows the decision in one line and its evidence in a small note; proven/claimed/assumed marked. Below it, the one-line positioning.
- **Value ladder**: for each value theme, a short row attribute → benefit → business outcome, with its proof.
- **Category test**: the 2–3 category options side by side, the chosen one highlighted, each with "buyers assume / compared to / value obvious or hidden".
- **Primary map**: one 2×2 chart on the two strongest, independent factors. Each company is a labelled dot; the target company is the only coloured dot (brand colour, or Byzantine purple #702963 by default); all others are grey. Axis ends are labelled in words, not numbers. Mark the open space the target company can own with a light outline and a short label.
- **1–2 alternative maps** on other factor pairs, only if they show something the primary map doesn't (e.g. a different buyer segment).
- **Factor profile** when more than two factors matter: one row per factor, a dot per company on a 1–10 line (dot plot), target company highlighted. Use this instead of a radar chart.
- **Score table**: factors × companies, with the evidence lines and "claimed/proven" marks, collapsed below the charts.

Design: minimal, one font family (Montserrat by default, or the client's), lots of white space, no 3D, no gradients, no icons, no quadrant clichés like "Leaders / Challengers". Quadrant labels, if any, describe the buyer's situation in plain words.

Build it in the Design artifact type (canvas) when listed: one artboard each for the positioning chain, the primary map, the value ladder, the category test, plus the factor profile/score table and the summary. Otherwise one HTML artifact (hand-built SVG or a charting library), so it can be shared and exported.

## 6. Write the positioning
- **One-line positioning**: "[Company] is the [category] for [best-fit buyers] that [key value], unlike [main alternative]."
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
- [ ] The five decisions connect: every value traces to a unique attribute, every attribute is unique vs. the main alternative, the best-fit buyers are defined by caring about that value, and the category makes that value obvious. No orphans
- [ ] Every [PLACEHOLDER] and assumption is listed under risks and open questions
- [ ] The phrase is 12 words or fewer and names the buyer and the difference
- [ ] The statement's "unlike" names a real alternative, and its claim is proven or marked as a hypothesis
- [ ] Competitor swap test: could a competitor say the same phrase? If yes, sharpen it

## 8. Handoff
In the reply (3–5 lines): the main alternative, the chosen category, the open space on the map, the positioning phrase, the biggest risk, and any hypothesis that needs customer validation (suggest 5 customer interviews to test it). Offer one next step: build the messaging architecture from this positioning.