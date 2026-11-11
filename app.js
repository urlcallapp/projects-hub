(function () {
  "use strict";

  var GH_BASE = "https://github.com/urlcallapp/";
  var PAGES_BASE = "https://urlcallapp.github.io/";

  var grid = document.getElementById("grid");
  var chipsEl = document.getElementById("chips");
  var searchEl = document.getElementById("search");
  var countEl = document.getElementById("result-count");
  var emptyEl = document.getElementById("empty");
  var statsEl = document.getElementById("stats");
  var clearBtn = document.getElementById("clear-filters");

  var state = { query: "", tag: null };

  var GIT_SVG =
    '<svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"/></svg>';
  var LINK_SVG =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>';

  // Card icons: self-contained inline SVG (stroke, 24x24) so nothing
  // depends on the viewer's emoji font. Add a new key here when a new
  // project needs a new icon.
  var ICONS = {
    gamepad: '<rect x="2" y="7" width="20" height="11" rx="5.5"/><line x1="7.5" y1="11" x2="7.5" y2="14"/><line x1="6" y1="12.5" x2="9" y2="12.5"/><circle cx="15.5" cy="11.2" r="0.6" fill="currentColor"/><circle cx="17.8" cy="13.6" r="0.6" fill="currentColor"/>',
    graph: '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>',
    package: '<path d="M16.5 9.4L7.5 4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>',
    slides: '<rect x="2" y="3" width="20" height="14" rx="2"/><polygon points="10 7.5 15.5 10 10 12.5 10 7.5"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>',
    users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    store: '<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>',
    code: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
    anchor: '<circle cx="12" cy="5" r="3"/><line x1="12" y1="22" x2="12" y2="8"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/>',
    refresh: '<polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>',
    terminal: '<polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/>',
  };

  function iconSvg(key) {
    var body = ICONS[key] || ICONS.code;
    return (
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      body +
      "</svg>"
    );
  }

  // Newest first
  var projects = PROJECTS.slice().sort(function (a, b) {
    return (b.updated || "").localeCompare(a.updated || "");
  });

  // Tags in use only, first-seen order
  var tagsInUse = [];
  projects.forEach(function (p) {
    (p.tags || []).forEach(function (t) {
      if (tagsInUse.indexOf(t) === -1) tagsInUse.push(t);
    });
  });

  function formatDate(iso) {
    if (!iso) return "";
    var parts = iso.split("-");
    return parts[2] + "/" + parts[1] + "/" + parts[0];
  }

  function matches(p) {
    if (state.tag && (p.tags || []).indexOf(state.tag) === -1) return false;
    if (!state.query) return true;
    var q = state.query.toLowerCase();
    var hay = [p.name, p.desc, p.lang || ""]
      .concat(p.tags || [])
      .join(" ")
      .toLowerCase();
    return hay.indexOf(q) !== -1;
  }

  function renderStats() {
    var sites = projects.filter(function (p) { return p.pages; }).length;
    statsEl.innerHTML =
      '<span class="stat">' + projects.length + " פרויקטים</span>" +
      '<span class="stat">' + sites + " אתרים חיים</span>";
  }

  function renderChips() {
    var html = '<button class="chip' + (state.tag === null ? " active" : "") +
      '" data-tag="">הכל</button>';
    tagsInUse.forEach(function (t) {
      html += '<button class="chip' + (state.tag === t ? " active" : "") +
        '" data-tag="' + t + '">' + t + "</button>";
    });
    chipsEl.innerHTML = html;
  }

  function renderCards() {
    var visible = projects.filter(matches);

    countEl.textContent =
      visible.length === projects.length
        ? "מוצגים " + projects.length + " פרויקטים"
        : "נמצאו " + visible.length + " מתוך " + projects.length + " פרויקטים";

    emptyEl.hidden = visible.length !== 0;

    grid.innerHTML = visible.map(function (p) {
      var gh = GH_BASE + p.name;
      var tags = (p.tags || []).map(function (t) {
        return '<span class="card-tag">' + t + "</span>";
      }).join("");

      var links;
      if (p.pages) {
        links =
          '<a class="btn btn-site" href="' + PAGES_BASE + p.name + '/" target="_blank" rel="noopener">' +
            LINK_SVG + "אתר חי</a>" +
          '<a class="btn btn-git" href="' + gh + '" target="_blank" rel="noopener">' +
            GIT_SVG + "GitHub</a>";
      } else {
        links =
          '<a class="btn btn-git solo" href="' + gh + '" target="_blank" rel="noopener">' +
            GIT_SVG + "GitHub</a>" +
          '<span class="no-site">אין אתר חי — קוד בלבד</span>';
      }

      return (
        '<article class="card" style="--hue:' + p.hue + '">' +
          '<div class="card-head">' +
            '<div class="card-icon">' + iconSvg(p.icon) + "</div>" +
            "<div>" +
              '<div class="card-name">' + p.name + "</div>" +
              (p.lang ? '<span class="card-lang">' + p.lang + "</span>" : "") +
            "</div>" +
          "</div>" +
          '<p class="card-desc">' + p.desc + "</p>" +
          '<div class="card-tags">' + tags + "</div>" +
          '<div class="card-meta">עודכן: ' + formatDate(p.updated) + "</div>" +
          '<div class="card-links">' + links + "</div>" +
        "</article>"
      );
    }).join("");
  }

  function render() {
    renderChips();
    renderCards();
  }

  chipsEl.addEventListener("click", function (e) {
    var btn = e.target.closest(".chip");
    if (!btn) return;
    state.tag = btn.dataset.tag || null;
    render();
  });

  searchEl.addEventListener("input", function () {
    state.query = searchEl.value.trim();
    renderCards();
  });

  clearBtn.addEventListener("click", function () {
    state.query = "";
    state.tag = null;
    searchEl.value = "";
    render();
  });

  renderStats();
  render();
})();
