/* ============================================================
   ★★★  TU PRIEBEŽNE PRIDÁVAŠ VECI  ★★★
   Toto je jediný súbor, ktorý bežne edituješ.
   Celý web sa z neho sám prekreslí.

   AKO PRIDAŤ PROJEKT:
   1. Skopíruj jeden blok { ... } v poli PROJECTS
   2. Zmeň title, description, tags, links
   3. Ulož súbor a obnov stránku (F5)

   AKO PRIDAŤ SKÚSENOSŤ: pridaj blok do EXPERIENCE (navrch).
   AKO PRIDAŤ ZRUČNOSŤ: pridaj slovo do SKILLS.
   ============================================================ */

const PROFILE = {
  name: "Tvoje Meno",
  role: "Junior Developer",
  hi: "Ahoj, som",
  desc: "Študujem / programujem vo voľnom čase. Zaujímam sa o webové technológie a toto portfólio si budujem priebežne – každý nový projekt pribudne sem.",
  about: "Sem napíš 3–5 viet o sebe: čo študuješ / kde pracuješ, čo ťa baví, akým smerom sa chceš uberať (frontend, backend, hry…). Tento text sa zobrazuje v sekcii O mne.",
  now: "Práve sa učím JavaScript a Git. Ďalší cieľ: dokončiť 3 vlastné projekty a naučiť sa základy Reactu.",
  facts: ["📍 Slovensko", "🎓 Študent / samouk", "💬 SK / EN", "⚡ K dispozícii na menšie projekty"],
  email: "tvoj@email.com",
  github: "https://github.com/tvoje-meno",
  linkedin: "https://linkedin.com/in/tvoje-meno",
  portfolio: "https://tvoje-portfolio.sk",
};

const SKILLS = [
  { category: "Frontend", items: ["HTML", "CSS", "JavaScript"] },
  { category: "Nástroje", items: ["Git", "GitHub", "VS Code"] },
  // PRÍKLAD pridania kategórie – odkomentuj / skopíruj:
  // { category: "Backend", items: ["Node.js", "Python"] },
];

const PROJECTS = [
  // ---------- PROJEKT 1 (vzor – prepíš alebo vymaž) ----------
  {
    title: "Moja prvá webová stránka",
    description: "Jednoduchá responzívna stránka v čistom HTML/CSS. Naučil som sa na nej flexbox, layout a nasadenie na GitHub Pages.",
    tags: ["HTML", "CSS"],
    status: "Hotové",
    date: "2026-09",
    demo: "#",            // nahraď reálnym linkom alebo nechaj "#"
    code: "#",            // link na GitHub repozitár
    details: [
      "Responzívny layout bez frameworku",
      "Vlastný dizajn v CSS premenných",
      "Nasadené na GitHub Pages",
    ],
  },
  // ---------- PROJEKT 2 (vzor) ----------
  {
    title: "To-Do aplikácia v JavaScripte",
    description: "Aplikácia na správu úloh s ukladaním do localStorage, filtrom a vyhľadávaním. Môj prvý väčší JS projekt.",
    tags: ["HTML", "CSS", "JavaScript"],
    status: "Hotové",
    date: "2026-10",
    demo: "#",
    code: "#",
    details: [
      "Pridávanie / mazanie / filtrovanie úloh",
      "Ukladanie do localStorage",
      "Renderovanie z poľa objektov",
    ],
  },
  // ---------- PROJEKT 3 (vzor – rozrobený) ----------
  {
    title: "Mini blog",
    description: "Rozrobený projekt – jednoduchý blog, kde sa články načítavajú z JS poľa. Slúži ako šablóna na učenie.",
    tags: ["JavaScript"],
    status: "Vo vývoji",
    date: "2026-10",
    demo: "#",
    code: "#",
    details: [
      "Zatiaľ len návrh – dopíš sem, čo plánuješ",
      "Plán: pridávanie článkov cez formulár",
    ],
  },

  // ======== SEM VKLADAJ NOVÉ PROJEKTY (skopíruj blok vyššie) ========
];

const EXPERIENCE = [
  // Najnovšie navrch. Blok skopíruj, keď pribudne škola / brigáda / kurz.
  {
    role: "Študent / samouk",
    company: "Vlastné vzdelávanie",
    date: "2026 – teraz",
    points: [
      "Učím sa HTML, CSS, JavaScript a Git",
      "Budujem si toto portfólio a ukladám sem projekty",
      "Cieľ: prvý platený projekt / stáž",
    ],
  },
  {
    role: "Prvý kurz programovania",
    company: "Online (napr. freeCodeCamp / YouTube)",
    date: "2026",
    points: [
      "Základy webu a responzívneho dizajnu",
      "Vlastné mini projekty",
    ],
  },
];

const CONTACT = {
  text: "Hľadám príležitosti na učenie, stáže alebo menšie projekty. Najrýchlejšie ma zastihneš e-mailom.",
};
