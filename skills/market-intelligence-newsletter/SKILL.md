---
name: "market-intelligence-newsletter"
description: "Use when Ilia gives a company name and asks for a market intelligence newsletter, competitor briefing or weekly market update for that company's leadership."
---

# Market intelligence newsletter

Goal: a weekly letter that a CEO reads in three minutes and comes away knowing what moved in their market and why it matters to them. Only the basics, all of it sourced. The input is just a company name.

## 1. Find the company
- Search the name. Confirm the right company: official website, what it sells, HQ country, size, listed or private (ticker if listed).
- If the name could be more than one company, ask one question listing the options (name, country, what each sells). If nobody is there to answer, take the most likely one and say which at the top.
- Write a one-line company profile for yourself: what they sell, to whom, where. Every later search uses it.

## 2. Map the market
- Find 5–8 direct competitors: companies the target loses deals to. Use the company's own site, analyst and trade press, "alternatives to" pages, and listings of the category. Prefer direct over adjacent.
- Also list its known customers and partners (named in its press releases and on its website).
- Note 2–3 trade publications and regulators that matter for this industry (e.g. FDA/EMA for pharma, EFSA for food supplements, FINMA for Swiss finance).
- Keep the lists stable week to week. If a competitor is added or dropped, say so in the letter.

## 3. Search the week
Default period: the last 7 days (state the dates). Search the target company, each competitor, its known customers and partners, and the market as a whole, separately. Look for:
- Strategy moves, partnerships, M&A, pricing, new markets, big customer wins
- Product launches, new versions, line extensions
- Patents, new technology, studies, pilots
- Approvals, lawsuits, recalls, new rules, standards, consultations
- Results, guidance, funding rounds, valuations, layoffs, major investments
- C-level and key hires or exits, big hiring pushes, new sites
- Market data, sales trends, trade shows, supply chain
(Section 5 decides which category each finding goes in.)

Search rules:
- Run many short, separate searches. One combined query returns thin results.
- Open the article before summarising it. Never summarise from a search snippet alone.
- Prefer primary sources (company press releases, regulators, filings) and solid trade or business press. Skip SEO blogs, content farms and undated pages.
- Check the date. Anything older than the period is out, unless section 4 allows it as a backfill item.
- Two outlets reporting the same story = one item, citing the better source.

## 4. Select
- Keep only what a leader would act on or need to know. Aim for 5–9 items in total.
- If the last 7 days give fewer than 5 strong items, add the best items from the previous 30 days. They go into their normal category with their own date; say under the header that some items are older. Never pad with weak items, and never repeat an item from an earlier letter.
- Never invent facts, figures, names or dates. If a detail is unclear, leave it out.
- If the week was quiet for the company itself, say so in the one-line summary.

## 5. Categorise each item
Put every item in the one category that says what the news means for this company. Decide in this order, and stop at the first that fits:
1. **The company itself**: news about the target company.
2. **Customers and partners**: a company it already sells to, supplies, or is partnered with or funded by.
3. **Competitors**: a company that sells something similar to the same buyers.
4. **Prospects**: a company it could realistically sell to (no relationship yet).
If none of these fits, categorise by topic:
5. **Product launches**: new products, versions, line extensions in the market.
6. **Innovation and R&D**: patents, new technology, studies, pilots.
7. **Legal and regulatory**: new rules, approvals, lawsuits, recalls, standards.
8. **Financing and deals**: funding rounds, M&A, investments, IPOs.
9. **Leadership and hiring**: C-level moves, big hiring pushes, new sites.
10. **Market demand**: sales trends, market data, consumer behaviour.
11. **Events**: trade shows, awards, conferences worth attending.

Rules:
- One category per item. A competitor's funding round goes under Competitors, not Financing and deals: who it is matters more than what it is.
- Use the exact category names above as section headings. Show only categories that have items.
- Order sections by importance this week; order items inside a section by importance, newest first when equal.
- Never use catch-all headings like "Other signals" or "Recent context".
- The footer explains the relationship categories in one line (e.g. "prospects: companies it could sell to") and names the tracked competitors that had no news.

## 6. Write each item
Every item has exactly three parts:
1. **Title in bold**: what happened, plain and specific, 6–12 words. "[Competitor] opens second US plant, doubling capsule capacity", not "Big news in capsules".
2. **Source line**: publication · date, linked to the article.
3. **Summary: 1–3 sentences.** Sentence one says what happened, with the key fact or number. The next says why it matters for *this* company (threat, opportunity, what to watch). Write the implication as a careful reading, not a certainty.

Language: simple and human. No buzzwords ("game-changer", "landscape", "unlock", "leverage", "in today's fast-paced world"). No exclamation marks. Paraphrase; quote at most a few words, only when the exact wording matters.

## 7. Design the letter
Minimal, letter-like, one column. Byzantine purple and Montserrat. Nothing else.
- Width 600 px, white background, generous margins, left-aligned.
- Header: the company name, "Market intelligence", the week's dates, and (only if older items are included) one small grey line saying so. One thin purple rule below. Nothing more.
- Optional first line under the header: "This week in one line:" plus the single most important development.
- Section headings in Byzantine purple (#702963), Montserrat 600, sentence case.
- Item title: Montserrat 700, near-black (#1F1A1E). Source line: 13 px, grey (#6B6168), linked. Summary: 15 px, line-height 1.55.
- Space between items, not lines. No cards, icons, emoji, images, stat boxes, coloured backgrounds or numbered section labels.
- Footer, small and grey: the period covered (and how far back older items go), what the relationship categories mean, the competitors tracked and which had no news, and "Prepared with Claude".

Build it as email-safe HTML: table layout, inline styles, Montserrat loaded from Google Fonts with Arial as fallback, so it can be pasted into Gmail or Outlook or sent as is. Use this skeleton:

```html
<!DOCTYPE html>
<html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap" rel="stylesheet">
</head>
<body style="margin:0;background:#ffffff;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td align="center">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="font-family:Montserrat,Arial,sans-serif;color:#1F1A1E;text-align:left;">
  <tr><td style="padding:48px 32px 20px;border-bottom:2px solid #702963;">
    <div style="font-size:24px;font-weight:700;color:#702963;">[Company]</div>
    <div style="font-size:15px;margin-top:4px;">Market intelligence · [3–9 Nov 2026]</div>
  </td></tr>
  <tr><td style="padding:28px 32px 0;">
    <div style="font-size:17px;font-weight:600;color:#702963;margin:0 0 16px;">Competitors</div>
    <div style="margin:0 0 26px;">
      <div style="font-size:16px;font-weight:700;line-height:1.35;">[Title of the news]</div>
      <div style="font-size:13px;color:#6B6168;margin:4px 0 8px;"><a href="[url]" style="color:#6B6168;">[Publication]</a> · [date]</div>
      <div style="font-size:15px;line-height:1.55;">[1–3 sentences: what happened, why it matters for the company.]</div>
    </div>
  </td></tr>
  <tr><td style="padding:24px 32px 48px;font-size:12px;color:#6B6168;border-top:1px solid #E4DDD9;">
    Period: [dates]. [What the relationship categories mean.] Tracked: [competitors]; no news from [names]. Prepared with Claude.
  </td></tr>
</table>
</td></tr></table>
</body></html>
```

Deliver the letter as an HTML artifact (or an .html file if artifacts aren't available). If the person asks for a PDF, render the same HTML to PDF.

## 8. Check before sending
- [ ] Every item links to a real article that was opened, and its date is inside the period (or the last 30 days, shown with its date)
- [ ] Every fact and number matches its source
- [ ] Each summary says why it matters for this company, not just what happened
- [ ] 5–9 items; each in exactly one category from section 5, decided in that order
- [ ] No empty, padded or catch-all sections, no duplicate stories
- [ ] Titles are bold, sources are under them, summaries are 1–3 sentences
- [ ] Only purple, near-black and grey; only Montserrat; nothing decorative
- [ ] It reads in about three minutes

## 9. Handoff
In the reply, give one line on the week (the biggest development), the competitor list used, and any company you were unsure about. Then ask:

"Do you want this to arrive every week without asking? You can turn it into your own agent: create your own Claude account at claude.ai, add this skill, and set up a weekly scheduled task such as 'Every Monday at 7:00, run the market intelligence newsletter for [Company] and send it to me.' I can walk you through it."

If the person is Ilia setting it up for himself or for a client demo, offer to create the weekly scheduled task here as well.
