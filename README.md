# Moje portfólio

Jednoduché developerské portfólio v čistom **HTML / CSS / JS** — bez buildu, bez frameworku.
Otvoríš `index.html` v prehliadači a funguje. Ideálne na **priebežné dopĺňanie**.

## Štruktúra

```
├── index.html      ← kostra stránky (sekcie, sem bežne nesiahaš)
├── css/style.css   ← vzhľad (farby zmeníš hore v :root)
├── js/data.js      ← ★ TU PRIDÁVAŠ VECI (projekty, zručnosti, skúsenosti)
├── js/main.js      ← vykresľovanie (sem nesiahaj)
└── assets/         ← sem dávaj obrázky k projektom
```

## Ako priebežne pridávať veci (90 % času edituješ len `js/data.js`)

### 1. Nový projekt
V `js/data.js` v poli `PROJECTS` skopíruj jeden blok `{ ... }` a prepíš:

```js
{
  title: "Názov projektu",
  description: "1–2 vety: čo to robí a čo si sa naučil.",
  tags: ["HTML", "CSS", "JavaScript"],
  status: "Hotové",   // alebo "Vo vývoji" / "Nápad"
  date: "2026-10",
  demo: "#",           // link na živé demo (alebo "#", ak nie je)
  code: "#",           // link na GitHub repozitár
  details: [
    "Čo projekt vie (bod 1)",
    "Čo projekt vie (bod 2)",
  ],
},
```

Ulož → obnov stránku (F5) → hotovo. Filter, vyhľadávanie aj počítadlo sa zaktualizujú samé.

### 2. Nová zručnosť
```js
{ category: "Backend", items: ["Node.js", "Python"] },
```
alebo len dopíš slovo do existujúceho `items: [...]`.

### 3. Nová skúsenosť (škola / kurz / brigáda / stáž)
Pridaj blok **navrch** poľa `EXPERIENCE`:
```js
{
  role: "Pozícia",
  company: "Firma / škola",
  date: "2026 – teraz",
  points: ["Čo si robil (bod 1)", "Čo si sa naučil (bod 2)"],
},
```

### 4. Údaje o sebe
Hore v `PROFILE` zmeň meno, rolu, e-mail, GitHub/LinkedIn linky. Prejavia sa v hero sekcii, kontaktnej sekcii aj v pätičke.

## Spustenie

- Dvojklik na `index.html`, alebo
- cez VS Code ekstenciu **Live Server** (odporúčané), alebo
- `npx serve .` v tomto priečinku.

## Tipy na priebežné ukladanie

1. **Každý projekt hneď zapíš** — aj rozrobený so statusom `"Vo vývoji"`. Lepšie ako ho zabudnúť.
2. **Popis píš vzorom:** čo to je → aké technológie → čo si sa naučil.
3. **Tagy drž konzistentne** (`JavaScript`, nie raz `JS` a raz `Javascript`) — podľa nich funguje filtrovanie.
4. **Obrázky** dávaj do `assets/` a do projektu pridaj neskôr pole `image: "assets/moj-projekt.png"` (podpora sa dá doplniť).
5. Commituj pravidelne: `git add . && git commit -m "pridany projekt X" && git push`.

## Čo vieme doplniť neskôr

- [ ] Fotky / náhľady projektov
- [ ] Markdown súbory na projekty (`projekty/moj-projekt.md`)
- [ ] Formulár s ukladaním (localStorage / Formspree)
- [ ] Prepínač svetlý/tmavý režim
- [ ] Anglická verzia
