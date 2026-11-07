# Hexis

A library of the Claude skills I've built, with a page to make new ones.
Plain HTML, CSS and JavaScript — no build step, so it runs on GitHub Pages as is.

## Put it online (GitHub Pages)

1. Create a new public repository on GitHub, e.g. `hexis`.
2. Upload every file in this folder (keep the `skills/` folder and the `.nojekyll` file).
3. In the repo: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, pick `main` and `/ (root)`, then **Save**.
4. After a minute the site is live at `https://<your-username>.github.io/hexis/`.

To show it on iliaparaskevopoulos.com, link to that address from your AI lab section,
or point a subdomain (e.g. `skills.iliaparaskevopoulos.com`) at it: add the subdomain under
**Settings → Pages → Custom domain**, and create a CNAME record at your domain host pointing to `<your-username>.github.io`.

## Add a skill

1. Make the skill with Claude.
2. Create a folder `skills/<skill-name>/` and put its `SKILL.md` inside.
3. Add one entry to `skills.json`:

```json
{
  "slug": "skill-name",
  "name": "Skill name",
  "line": "One plain sentence on what it does.",
  "use": "When to reach for it.",
  "gets": "What you end up with.",
  "origin": "Where the method comes from (optional).",
  "group": "Strategy or Content and design",
  "give": "What you put in, 2-5 words",
  "get": "What comes out, 2-6 words",
  "added": "2026"
}
```

4. Commit. GitHub Pages updates itself.

Or just ask Claude: "add my new skill to Hexis and push it."

## Preview on your computer

The page loads `skills.json` and the `SKILL.md` files, which browsers block when you
double-click `index.html`. Run a tiny local server instead:

```
python3 -m http.server
```

then open http://localhost:8000.
