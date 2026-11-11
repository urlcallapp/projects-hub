// ============================================================
//  רשימת הפרויקטים — כדי להוסיף פרויקט חדש, מעתיקים בלוק אחד,
//  משנים את הערכים, ודוחפים. האתר מתעדכן לבד.
//
//  כלל הכללה: רק פרויקטים שעבדנו עליהם ביחד לאחרונה.
//  לא מייבאים לכאן ריפואים ישנים או אתרי portfolio מהחשבון.
//
//  שדות:
//    name        שם הריפו ב-GitHub (חובה, באנגלית כמו שמופיע בכתובת)
//    desc        תיאור קצר בעברית
//    icon        אייקון הכרטיס — אחד מהשמות: gamepad, graph, package, slides, users, store, code, anchor, refresh, terminal
//    hue         גוון הצבע של הכרטיס והאייקון (0-360)
//    lang        שפת התכנות הראשית (תופיע כתג)
//    tags        תגיות לפילטר — רק תגיות שקיימות כאן יופיעו באתר
//    pages       true אם יש אתר GitHub Pages חי, false אם אין
//    updated     תאריך עדכון אחרון, yyyy-mm-dd (הצגה בלבד)
// ============================================================

const PROJECTS = [
  {
    name: "kids-learn-games",
    desc: "פורטל משחקי למידה בעברית לילדים, עם חיפוש, תגיות ושמירת התקדמות.",
    icon: "gamepad",
    hue: 262,
    lang: "JavaScript",
    tags: ["ילדים", "משחקים", "עברית"],
    pages: true,
    updated: "2026-11-11",
  },
  {
    name: "kubekin",
    desc: "מפת קשרים חיה למניפסטים של Kubernetes: טוענים YAML ורואים מי שייך למי.",
    icon: "graph",
    hue: 205,
    lang: "TypeScript",
    tags: ["קוברנטיס", "כלי פיתוח"],
    pages: true,
    updated: "2026-11-11",
  },
  {
    name: "kubekin-samples",
    desc: "מניפסטים לדוגמה לבדיקת הייבוא מכתובת ב־KubeKin.",
    icon: "package",
    hue: 190,
    lang: "HTML",
    tags: ["קוברנטיס"],
    pages: true,
    updated: "2026-11-11",
  },
  {
    name: "lion-habitat-slides",
    desc: "מצגת שקפים מונפשת בעברית על האריה ובית הגידול שלו, עם איורים ואנימציות.",
    icon: "slides",
    hue: 32,
    lang: "HTML",
    tags: ["ילדים", "עברית"],
    pages: true,
    updated: "2026-11-11",
  },
  {
    name: "kids-profiles",
    desc: "Kids+‎ — בחירת פרופילים לילדים בסגנון \"מי צופה\", עם אוואטר, צבע וקוד נעילה.",
    icon: "users",
    hue: 330,
    lang: "HTML",
    tags: ["ילדים"],
    pages: true,
    updated: "2026-11-09",
  },
  {
    name: "offlinechromewebstore",
    desc: "חנות תוספי Chrome אופליינית לסביבות מנותקות מהאינטרנט (air-gapped), כולל סריקת תוספים זדוניים.",
    icon: "store",
    hue: 145,
    lang: "Python",
    tags: ["אופליין", "אבטחה", "כלי פיתוח"],
    pages: true,
    updated: "2026-11-05",
  },
  {
    name: "vscodeoffline",
    desc: "גלריית תוספים אופליינית ל־VS Code לסביבות מנותקות מהאינטרנט.",
    icon: "code",
    hue: 220,
    lang: "Python",
    tags: ["אופליין", "כלי פיתוח"],
    pages: true,
    updated: "2026-11-05",
  },
  {
    name: "kubectl-argo",
    desc: "תוסף kubectl שמתרגם פקודות רגילות לקריאות Argo CD API, עם זיהוי אפליקציה אוטומטי.",
    icon: "anchor",
    hue: 15,
    lang: "Go",
    tags: ["קוברנטיס", "כלי פיתוח"],
    pages: false,
    updated: "2026-11-03",
  },
];
