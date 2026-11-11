// ============================================================
//  Project list — to add a project, copy one block, change the
//  values, and push. The site updates itself.
//
//  Inclusion rule: only projects we worked on together recently.
//  Do not import old repos or portfolio sites from the account.
//
//  The hub is bilingual: English (default, at /) and Hebrew (/he/).
//  Fill in both desc_en/desc_he and tags_en/tags_he for each project.
//
//  Fields:
//    name        repo name on GitHub (required, exactly as in the URL)
//    desc_en     short description in English
//    desc_he     תיאור קצר בעברית
//    icon        card icon — one of: gamepad, graph, package, slides,
//                users, store, code, anchor, refresh, terminal
//    hue         card and icon hue (0-360)
//    lang        main programming language (shown as a badge)
//    tags_en     filter tags in English
//    tags_he     תגיות לפילטר בעברית
//    pages       true if a live GitHub Pages site exists, false otherwise
//    updated     last update date, yyyy-mm-dd (display only)
// ============================================================

const PROJECTS = [
  {
    name: "urlcallapp",
    desc_en: "Colorful builder for clickable links that trigger native actions: call, SMS, WhatsApp, email, FaceTime.",
    desc_he: "בונה צבעוני לקישורים לחיצים שמפעילים פעולות: שיחה, SMS, וואטסאפ, מייל, FaceTime.",
    icon: "anchor",
    hue: 320,
    lang: "HTML",
    tags_en: ["Tools", "Web"],
    tags_he: ["כלים", "ווב"],
    pages: true,
    updated: "2026-11-11",
  },
  {
    name: "kids-learn-games",
    desc_en: "Hebrew learning-games portal for kids, with search, tags and saved progress.",
    desc_he: "פורטל משחקי למידה בעברית לילדים, עם חיפוש, תגיות ושמירת התקדמות.",
    icon: "gamepad",
    hue: 262,
    lang: "JavaScript",
    tags_en: ["Kids", "Games", "Hebrew"],
    tags_he: ["ילדים", "משחקים", "עברית"],
    pages: true,
    updated: "2026-11-11",
  },
  {
    name: "kubekin",
    desc_en: "A live relationship map for Kubernetes manifests: load YAML and see what belongs to what.",
    desc_he: "מפת קשרים חיה למניפסטים של Kubernetes: טוענים YAML ורואים מי שייך למי.",
    icon: "graph",
    hue: 205,
    lang: "TypeScript",
    tags_en: ["Kubernetes", "Dev tools"],
    tags_he: ["קוברנטיס", "כלי פיתוח"],
    pages: true,
    updated: "2026-11-11",
  },
  {
    name: "kubekin-samples",
    desc_en: "Sample manifests for testing KubeKin's URL import.",
    desc_he: "מניפסטים לדוגמה לבדיקת הייבוא מכתובת ב־KubeKin.",
    icon: "package",
    hue: 190,
    lang: "HTML",
    tags_en: ["Kubernetes"],
    tags_he: ["קוברנטיס"],
    pages: true,
    updated: "2026-11-11",
  },
  {
    name: "lion-habitat-slides",
    desc_en: "Animated Hebrew slide deck about lions and their habitat, with illustrations and animations.",
    desc_he: "מצגת שקפים מונפשת בעברית על האריה ובית הגידול שלו, עם איורים ואנימציות.",
    icon: "slides",
    hue: 32,
    lang: "HTML",
    tags_en: ["Kids", "Hebrew"],
    tags_he: ["ילדים", "עברית"],
    pages: true,
    updated: "2026-11-11",
  },
  {
    name: "kids-profiles",
    desc_en: "Kids+ — a \"who's watching\" style profile picker for kids, with avatar, color and lock code.",
    desc_he: "Kids+‎ — בחירת פרופילים לילדים בסגנון \"מי צופה\", עם אוואטר, צבע וקוד נעילה.",
    icon: "users",
    hue: 330,
    lang: "HTML",
    tags_en: ["Kids"],
    tags_he: ["ילדים"],
    pages: true,
    updated: "2026-11-09",
  },
  {
    name: "offlinechromewebstore",
    desc_en: "Offline Chrome extension store for air-gapped environments, including malicious-extension scanning.",
    desc_he: "חנות תוספי Chrome אופליינית לסביבות מנותקות מהאינטרנט (air-gapped), כולל סריקת תוספים זדוניים.",
    icon: "store",
    hue: 145,
    lang: "Python",
    tags_en: ["Offline", "Security", "Dev tools"],
    tags_he: ["אופליין", "אבטחה", "כלי פיתוח"],
    pages: true,
    updated: "2026-11-05",
  },
  {
    name: "vscodeoffline",
    desc_en: "Offline VS Code extension gallery for air-gapped environments.",
    desc_he: "גלריית תוספים אופליינית ל־VS Code לסביבות מנותקות מהאינטרנט.",
    icon: "code",
    hue: 220,
    lang: "Python",
    tags_en: ["Offline", "Dev tools"],
    tags_he: ["אופליין", "כלי פיתוח"],
    pages: true,
    updated: "2026-11-05",
  },
  {
    name: "kubectl-argo",
    desc_en: "kubectl plugin that translates standard commands into Argo CD API calls, with automatic app resolution.",
    desc_he: "תוסף kubectl שמתרגם פקודות רגילות לקריאות Argo CD API, עם זיהוי אפליקציה אוטומטי.",
    icon: "anchor",
    hue: 15,
    lang: "Go",
    tags_en: ["Kubernetes", "Dev tools"],
    tags_he: ["קוברנטיס", "כלי פיתוח"],
    pages: true,
    updated: "2026-11-11",
  },
];
