// English UI strings for the hub. Hebrew twin: i18n-he.js.
const HUB_I18N = {
  lang: "en",
  all: "All",
  statProjects: (n) => `${n} projects`,
  statSites: (n) => `${n} live sites`,
  showing: (n) => `Showing ${n} projects`,
  found: (v, t) => `Found ${v} of ${t} projects`,
  liveSite: "Live site",
  copySite: "Copy live site link",
  copyGit: "Copy GitHub link",
  copied: "Copied!",
  copyFailed: "Copy failed",
  noSite: "No live site — code only",
  updated: "Updated:",
  formatDate: (iso) => {
    if (!iso) return "";
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    const p = iso.split("-");
    return `${Number(p[2])} ${months[Number(p[1]) - 1]} ${p[0]}`;
  },
};
