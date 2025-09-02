# DARQBA - Rejtélyes Logikai Társasjáték

DARQBA egy logikai játék, amely a barkóbát ötvözi a krimik izgalmával és misztikumával. Az alkalmazás célja, hogy egyedi és szórakoztató élményt nyújtson a játékosok számára, miközben logikai készségeiket fejlesztik.

## 🌟 Alkalmazás célja

A DARQBA egy interaktív társasjáték, amelyben a játékosok egy játékmester segítségével próbálnak megoldani különböző rejtélyeket. A játékosok kérdéseket tehetnek fel, amelyekre a játékmester csak "IGEN" vagy "NEM" válaszokat adhat. A cél, hogy a játékosok logikai következtetésekkel eljussanak a rejtély megoldásához.

---

## 🛠️ Tech Stack

- **Framework**: Nuxt.js 3
- **CSS**: TailwindCSS
- **Backend**: Firebase (Firestore, Firebase Functions)
- **Deployment**: Vercel
- **Egyéb eszközök**:
  - PostCSS
  - TurboRepo
  - Prettier (TailwindCSS plugin)

---

## 📂 Projekt felépítése

- **`assets/`**: Statikus fájlok, például CSS és betűtípusok.
- **`components/`**: Újrahasznosítható Vue komponensek, mint például `Navbar`, `Footer`, `PostList`.
- **`composables/`**: Egyedi JavaScript funkciók, például `getPost` és `getPosts`.
- **`data/`**: JSON formátumú adatfájlok.
- **`pages/`**: Nuxt.js oldalak, például a főoldal (`index.vue`) és a posztok oldala.
- **`server/`**: Backend logika, például Firebase integráció.
- **`public/`**: Nyilvános fájlok, például favicon.

---

## 🚀 Telepítési útmutató

### 1. Klónozd a repót

```bash
git clone https://github.com/szolzol/darqba.git
cd darqba
```

### 2. Telepítsd a függőségeket

A projekt `pnpm` csomagkezelőt használ. Telepítsd a függőségeket az alábbi paranccsal:

```bash
pnpm install
```

### 3. Fejlesztői szerver indítása

Futtasd a fejlesztői szervert:

```bash
pnpm dev
```

Ezután az alkalmazás elérhető lesz a `http://localhost:3000` címen.

### 4. Build készítése

Készítsd el a production buildet:

```bash
pnpm build
```

### 5. Deployment

A projektet a `Vercel` platformra lehet deployolni. Használd az alábbi parancsot:

```bash
pnpm deploy
```

---

## 📜 Modulok és funkciók

- **`@nuxthq/ui`**: UI komponensek.
- **`nuxt-icon`**: Ikonok egyszerű használata.
- **`@nuxtjs/tailwindcss`**: TailwindCSS integráció.
- **`firebase`**: Backend szolgáltatások.
- **`gh-pages`**: GitHub Pages deploy.

---

## 🔧 Konfiguráció

### Nuxt.js konfiguráció (`nuxt.config.ts`)

- **TailwindCSS**: Egyedi CSS útvonal (`~/assets/css/tailwind.css`).
- **PostCSS**: TailwindCSS és Autoprefixer támogatás.
- **Firebase**: Alapértelmezett Firebase beállítások.

### TypeScript konfiguráció (`tsconfig.json`)

A projekt TypeScript támogatással rendelkezik, és kiterjeszti a Nuxt.js alapértelmezett beállításait.

---

## 👥 Közreműködők

- **Fejlesztő**: szolzol
- **GitHub Repository**: [darqba-vue](https://github.com/szolzol/darqba)

---

## 📄 Licenc

Ez a projekt nyílt forráskódú, és az MIT licenc alatt érhető el.
