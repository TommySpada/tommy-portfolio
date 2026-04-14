# Tommaso Spada — Portfolio

Sito web personale costruito con **React** e **Vite**, con animazioni e componenti interattivi da [reactbits.dev](https://reactbits.dev).

> **[www.tommyspada.com](https://www.tommyspada.com)** o **[www.tommyspada.it](https://www.tommyspada.it)**

---

## Caratteristiche

- **Vite + React 19** — bundling ultrarapido e HMR istantaneo
- **Dark theme** con design system custom (CSS vanilla, nessun framework)
- **Aurora** — sfondo WebGL animato con shader (OGL)
- **FadeContent** — animazioni fade-in su scroll (GSAP + ScrollTrigger)
- **BubbleMenu** — menu a bolle animato con GSAP
- **Dock** — dock macOS-style con effetto magnification (Motion)
- **BounceCards** — card animate con effetto bounce (GSAP)
- **Responsive** — layout mobile-first con breakpoint adattivi
- **Iubenda** — cookie consent integrato

## Pagine

| Pagina | Route | Descrizione |
|--------|-------|-------------|
| **Home** | `/` | Hero con Aurora, formazione, competenze, chi sono, progetti |
| **Social** | `/social` | Link social, community e affiliazioni |
| **Contatti** | `/contatti` | Email con copia negli appunti |
| **PC** | `/pc` | Setup hardware con schede componenti |

## Tech Stack

| Tecnologia | Utilizzo |
|------------|----------|
| [React 19](https://react.dev) | UI framework |
| [Vite 8](https://vite.dev) | Build tool + dev server |
| [React Router 7](https://reactrouter.com) | Routing SPA |
| [GSAP](https://gsap.com) | Animazioni scroll e bounce |
| [Motion](https://motion.dev) | Dock con magnification |
| [OGL](https://github.com/oframe/ogl) | WebGL shader (Aurora) |

## Quick Start

```bash
# Clona il repository
git clone https://github.com/TommyPlaysGames/tommy-portfolio.git
cd tommy-portfolio

# Installa le dipendenze
npm install

# Avvia il dev server
npm run dev
```

Il sito sarà disponibile su `http://localhost:5173`.

## Build per produzione

```bash
npm run build
npm run preview   # anteprima locale della build
```

I file compilati saranno nella cartella `dist/`.

## Struttura progetto

```
src/
├── components/
│   ├── Aurora/          # Sfondo WebGL animato
│   ├── BounceCards/     # Card con animazione bounce
│   ├── BubbleMenu/      # Menu a bolle (mobile nav)
│   ├── Dock/            # Dock macOS-style (bottom nav)
│   └── FadeContent/     # Fade-in su scroll
├── pages/
│   ├── HomePage.jsx
│   ├── SocialPage.jsx
│   ├── ContattiPage.jsx
│   ├── PCPage.jsx
│   ├── ClockPage.jsx
│   └── TurniPage.jsx
├── App.jsx              # Layout, routing e navigazione
├── main.jsx             # Entry point
└── index.css            # Design system e stili globali
```

## Licenza

© Tommaso Spada. Tutti i diritti riservati.

---

<p align="center">
  Realizzato con ❤️ e React
</p>
