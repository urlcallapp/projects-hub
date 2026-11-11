# Projects Hub 🗂️

A bilingual landing page that brings all of [urlcallapp](https://github.com/urlcallapp)'s repos into one place: a link to the code on GitHub, a link to the live GitHub Pages site (when one exists), free-text search and tag filters.

**Live site:** https://urlcallapp.github.io/projects-hub/ (English, default) · https://urlcallapp.github.io/projects-hub/he/ (עברית)

## What belongs in the hub

The hub lists only projects we worked on together recently — no old repos or portfolio sites from the account. The list is manual on purpose: there is no automatic import of every repo in the account, and future additions should follow the same rule.

## Adding a new project

All content lives in one file: [`projects.js`](projects.js). You never touch the HTML, CSS or `app.js`.

1. Open `projects.js`.
2. Copy an existing project block and paste it into the list.
3. Update the fields — the hub is bilingual, so fill in both languages:

| Field | Meaning |
| --- | --- |
| `name` | Repo name exactly as it appears in the GitHub URL |
| `desc_en` | Short description in English |
| `desc_he` | תיאור קצר בעברית |
| `icon` | Card icon, one of the names defined in `app.js`: `gamepad`, `graph`, `package`, `slides`, `users`, `store`, `code`, `anchor`, `refresh`, `terminal` |
| `hue` | Card and icon color hue, a number between 0 and 360 |
| `lang` | Main programming language |
| `tags_en` / `tags_he` | Filter tags per language. A filter chip is created automatically for every tag in use |
| `pages` | `true` if a live site exists at `urlcallapp.github.io/<name>/`, otherwise `false` (the card then shows a code-only link) |
| `updated` | Last update date, `yyyy-mm-dd` |

4. Push to `main` — the site updates itself.

Cards are sorted automatically by `updated`, newest first, and the project counter at the top updates on its own.

## Structure

- `index.html` — English page (default), LTR
- `he/index.html` — Hebrew page, RTL; shares all assets with the English page
- `i18n-en.js` / `i18n-he.js` — UI strings per language
- `styles.css` — styling (logical properties, so one stylesheet serves both directions)
- `app.js` — search, filters and card rendering; picks strings and project fields by page language
- `projects.js` — **the only file you edit** when adding or updating a project

Fully static site, no build step and no dependencies.
