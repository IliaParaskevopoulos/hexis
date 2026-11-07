"""Rebuild the .zip downloads after adding or editing a skill: python3 build-downloads.py"""
import json, os, zipfile
data = json.load(open("skills.json"))
items = data["skills"] if isinstance(data, dict) else data
os.makedirs("downloads", exist_ok=True)
with zipfile.ZipFile("downloads/hexis-all-skills.zip", "w", zipfile.ZIP_DEFLATED) as allz:
    for s in items:
        slug = s["slug"]; md = f"skills/{slug}/SKILL.md"
        with zipfile.ZipFile(f"downloads/{slug}.zip", "w", zipfile.ZIP_DEFLATED) as z:
            z.write(md, f"{slug}/SKILL.md")
        allz.write(md, f"{slug}/SKILL.md")
print("Built", len(items), "skill downloads")
