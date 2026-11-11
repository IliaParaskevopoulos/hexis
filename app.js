(function () {
  "use strict";

  var CLAUDE_NEW = "https://claude.ai/new?q=";
  var skills = [];
  var cache = {};

  var $ = function (id) { return document.getElementById(id); };
  var esc = function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };
  var fileUrl = function (slug) { return "skills/" + slug + "/SKILL.md"; };
  var absolute = function (path) { return new URL(path, location.href).href; };


  var P = '#702963', T = '#f1e7ef';
  function svg(inner) { return '<svg viewBox="0 0 48 48" fill="none" stroke="' + P + '" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + inner + '</svg>'; }
  var ICONS = {
    "positioning-map": svg('<rect x="4" y="4" width="40" height="40" rx="5" fill="' + T + '" stroke="none"/><path d="M24 9v30M9 24h30"/><circle cx="16" cy="31" r="2.2" fill="#a39aa0" stroke="none"/><circle cx="31" cy="30" r="2.2" fill="#a39aa0" stroke="none"/><circle cx="15" cy="17" r="2.2" fill="#a39aa0" stroke="none"/><circle cx="33" cy="15" r="4" fill="' + P + '" stroke="none"/>'),
    "messaging-house": svg('<path d="M6 19 24 7l18 12" fill="' + T + '"/><path d="M6 19h36"/><path d="M13 23v14M24 23v14M35 23v14"/><path d="M7 41h34"/>'),
    "icp-buyer-personas": svg('<rect x="4" y="4" width="40" height="40" rx="5" fill="' + T + '" stroke="none"/><circle cx="13" cy="19" r="4"/><path d="M6 33c1-5 4-7 7-7s6 2 7 7"/><circle cx="35" cy="19" r="4"/><path d="M28 33c1-5 4-7 7-7s6 2 7 7"/><circle cx="24" cy="15" r="5" fill="' + P + '" stroke="none"/><path d="M15 37c1.5-7 5-10 9-10s7.5 3 9 10" fill="#fff"/>'),
    "sales-battlecards": svg('<rect x="6" y="9" width="22" height="30" rx="3" fill="' + T + '" stroke="none"/><rect x="6" y="9" width="22" height="30" rx="3"/><rect x="20" y="9" width="22" height="30" rx="3" fill="#fff"/><path d="M25 17h12M25 23h12M25 29h8"/><circle cx="13" cy="17" r="3" fill="' + P + '" stroke="none"/>'),
    "objection-handling": svg('<path d="M6 10h28a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H18l-8 6v-6H6a4 4 0 0 1-4-4V14a4 4 0 0 1 4-4z" fill="' + T + '"/><path d="M14 21l4 4 8-8"/><circle cx="40" cy="34" r="5" fill="' + P + '" stroke="none"/>'),
    "market-intelligence-newsletter": svg('<rect x="9" y="5" width="30" height="38" rx="3" fill="' + T + '" stroke="none"/><path d="M15 12h12"/><path d="M15 19h18M15 23h18M15 27h12"/><path d="M15 33h18M15 37h10"/><circle cx="34" cy="12" r="2.2" fill="' + P + '" stroke="none"/>'),
    "social-media-content": svg('<rect x="4" y="12" width="20" height="20" rx="2" fill="' + T + '"/><rect x="27" y="6" width="17" height="21" rx="2"/><rect x="31" y="29" width="10" height="16" rx="2"/><path d="M8 27l5-6 4 4 3-3 4 5"/>'),
    "brochure-maker": svg('<path d="M5 10l12-3v31L5 41z" fill="' + T + '"/><path d="M17 7l14 3v31l-14-3z"/><path d="M31 10l12-3v31l-12 3z" fill="' + T + '"/><path d="M21 17h6M21 22h6M21 27h4"/>'),
    "logo-maker": svg('<rect x="6" y="6" width="36" height="36" rx="6" fill="' + T + '" stroke="none"/><circle cx="24" cy="24" r="10"/><circle cx="24" cy="24" r="3.5" fill="' + P + '" stroke="none"/><path d="M24 6v6M24 36v6M6 24h6M36 24h6" stroke-dasharray="2 3"/>'),
    "business-card-maker": svg('<rect x="3" y="11" width="42" height="26" rx="3" fill="' + T + '"/><path d="M9 19h14M9 24h10M9 30h8"/><rect x="30" y="18" width="10" height="10" fill="' + P + '" stroke="none"/><rect x="32.5" y="20.5" width="2" height="2" fill="#fff" stroke="none"/><rect x="35.5" y="23.5" width="2" height="2" fill="#fff" stroke="none"/>')
  };
  function icon(slug) { return ICONS[slug] || ""; }

  // ---------- Library ----------
  function renderList() {
    var groups = [];
    skills.forEach(function (s) { if (groups.indexOf(s.group) === -1) groups.push(s.group); });
    $("groups").innerHTML = groups.map(function (g) {
      return '<section class="group"><h2>' + esc(g) + '</h2><div class="cards">' +
        skills.filter(function (s) { return s.group === g; }).map(function (s) {
          return '<a class="card" href="#skill/' + esc(s.slug) + '"><span class="icon" aria-hidden="true">' + icon(s.slug) + '</span><strong>' + esc(s.name) + '</strong>' +
            '<p class="flow"><span>' + esc(s.give) + '</span><i aria-hidden="true">→</i><b>' + esc(s.get) + '</b></p></a>';
        }).join("") + '</div></section>';
    }).join("");
  }

  function steps(md) {
    var out = [], re = /^##\s+(?:\d+\.\s*)?(.+)$/gm, m;
    while ((m = re.exec(md))) out.push(m[1].replace(/\s*\(.*\)\s*$/, "").replace(/:.*$/, ""));
    return out;
  }

  // ---------- Minimal Markdown renderer (headings, lists, tables, bold, code, links) ----------
  function inline(t) {
    t = esc(t);
    t = t.replace(/`([^`]+)`/g, "<code>$1</code>");
    t = t.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    t = t.replace(/(^|[^*])\*([^*\s][^*]*)\*/g, "$1<em>$2</em>");
    t = t.replace(/\[([^\]]+)\]\((https?:[^)\s]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
    t = t.replace(/(^|[\s(])(https?:\/\/[^\s)<]+)/g, '$1<a href="$2" target="_blank" rel="noopener">$2</a>');
    return t;
  }

  function markdown(src) {
    src = src.replace(/^---[\s\S]*?\n---\s*\n/, ""); // strip frontmatter
    var lines = src.split("\n"), out = [], i = 0, list = null, para = [];
    var flushPara = function () { if (para.length) { out.push("<p>" + inline(para.join(" ")) + "</p>"); para = []; } };
    var closeList = function () { if (list) { out.push("</" + list + ">"); list = null; } };

    while (i < lines.length) {
      var line = lines[i], m;
      if (/^```/.test(line)) {
        flushPara(); closeList();
        var code = []; i++;
        while (i < lines.length && !/^```/.test(lines[i])) { code.push(lines[i]); i++; }
        out.push("<pre><code>" + esc(code.join("\n")) + "</code></pre>"); i++; continue;
      }
      if (/^\s*$/.test(line)) { flushPara(); closeList(); i++; continue; }
      if ((m = line.match(/^(#{1,4})\s+(.*)$/))) {
        flushPara(); closeList();
        var n = m[1].length; out.push("<h" + n + ">" + inline(m[2]) + "</h" + n + ">"); i++; continue;
      }
      if (/^\|/.test(line) && lines[i + 1] && /^\|[\s:|-]+\|?\s*$/.test(lines[i + 1])) {
        flushPara(); closeList();
        var cells = function (l) { return l.replace(/^\||\|\s*$/g, "").split("|").map(function (c) { return c.trim(); }); };
        var html = "<table><thead><tr>" + cells(line).map(function (c) { return "<th>" + inline(c) + "</th>"; }).join("") + "</tr></thead><tbody>";
        i += 2;
        while (i < lines.length && /^\|/.test(lines[i])) {
          html += "<tr>" + cells(lines[i]).map(function (c) { return "<td>" + inline(c) + "</td>"; }).join("") + "</tr>"; i++;
        }
        out.push(html + "</tbody></table>"); continue;
      }
      if ((m = line.match(/^\s*([-*]|\d+\.)\s+(.*)$/))) {
        flushPara();
        var type = /\d/.test(m[1]) ? "ol" : "ul";
        if (list !== type) { closeList(); out.push("<" + type + ">"); list = type; }
        var text = m[2], task = text.match(/^\[[ xX]\]\s+(.*)$/);
        out.push(task ? '<li class="task">' + inline(task[1]) + "</li>" : "<li>" + inline(text) + "</li>");
        i++; continue;
      }
      closeList(); para.push(line.trim()); i++;
    }
    flushPara(); closeList();
    return out.join("\n");
  }

  // ---------- Detail view ----------
  function showDetail(slug) {
    var s = skills.filter(function (x) { return x.slug === slug; })[0];
    if (!s) { showHome(); return; }
    $("home").hidden = true; $("detail").hidden = false;
    document.title = s.name + " — Hexis";
    $("d-name").textContent = s.name;
    $("d-icon").innerHTML = icon(slug);
    $("d-give").textContent = s.give;
    $("d-get").textContent = s.get;
    $("d-steps").innerHTML = "";
    $("d-download").href = "downloads/" + slug + ".zip";
    $("d-download").setAttribute("download", slug + ".zip");
    $("d-md").href = fileUrl(slug);
    $("d-md").setAttribute("download", slug + "-SKILL.md");
    $("d-try").href = CLAUDE_NEW + encodeURIComponent(
      "Read this skill and follow its method for my task: " + absolute(fileUrl(slug)) +
      "\n\nMy task: "
    );
    $("d-body").innerHTML = "<p>Loading…</p>";
    window.scrollTo(0, 0);
    var done = function (txt) {
      $("d-body").innerHTML = markdown(txt);
      $("d-steps").innerHTML = steps(txt).map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("");
    };
    if (cache[slug]) return done(cache[slug]);
    fetch(fileUrl(slug)).then(function (r) { if (!r.ok) throw 0; return r.text(); })
      .then(function (t) { cache[slug] = t; done(t); })
      .catch(function () { $("d-body").innerHTML = '<p>Could not load this skill. <a href="' + esc(fileUrl(slug)) + '">Open the file directly.</a></p>'; });
  }

  function showHome() {
    $("detail").hidden = true; $("home").hidden = false;
    document.title = "Hexis — Ilia Paraskevopoulos's Claude skills";
  }

  function route() {
    var m = location.hash.match(/^#skill\/([\w-]+)/);
    if (m) showDetail(m[1]);
    else {
      var wasDetail = !$("detail").hidden;
      showHome();
      var target = location.hash && document.querySelector(location.hash);
      if (target) target.scrollIntoView();
      else if (wasDetail) window.scrollTo(0, 0);
    }
  }

  window.addEventListener("hashchange", route);

  // ---------- Boot ----------
  fetch("skills.json").then(function (r) { return r.json(); })
    .then(function (data) { skills = data; renderList(); route(); })
    .catch(function () {
      $("list").innerHTML = '<li class="empty">The library could not load. If you opened this file from your computer, run <code>python3 -m http.server</code> in this folder and open http://localhost:8000.</li>';
    });
})();
