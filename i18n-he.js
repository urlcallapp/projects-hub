// Hebrew UI strings for the hub. English twin: i18n-en.js.
const HUB_I18N = {
  lang: "he",
  all: "הכל",
  statProjects: (n) => `${n} פרויקטים`,
  statSites: (n) => `${n} אתרים חיים`,
  showing: (n) => `מוצגים ${n} פרויקטים`,
  found: (v, t) => `נמצאו ${v} מתוך ${t} פרויקטים`,
  liveSite: "אתר חי",
  noSite: "אין אתר חי — קוד בלבד",
  updated: "עודכן:",
  formatDate: (iso) => {
    if (!iso) return "";
    const p = iso.split("-");
    return `${p[2]}/${p[1]}/${p[0]}`;
  },
};
