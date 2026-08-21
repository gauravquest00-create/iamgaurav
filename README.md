# Gaurav — Senior Full-Stack Developer & System Architect Portfolio

> A premium, high-performance developer portfolio and digital product studio website built with React, Vite, CSS3, and React Router.

![Gaurav Portfolio](public/favicon.svg)

---

## ⚡ Key Highlights & Features

- **Digital Product Aesthetic:** Clean, editorial design with deep contrast, subtle glow effects, and modern typography hierarchy (Inter + Manrope).
- **Interactive 3D System Matrix:** Pure HTML5 Canvas particle orb & geodesic wireframe responding to cursor position and touch at 60 FPS.
- **Theme System (Dark & Light):** Built-in instant theme switcher with `localStorage` persistence and CSS variable architecture.
- **Data-Driven Dynamic Architecture:** Zero hardcoded portfolio content in JSX. All projects, skills, profile, and socials load dynamically from JSON local stores in `src/data/`.
- **Strict Separation of Concerns:** Every major JSX component and page has its own dedicated `.css` stylesheet.
- **Mobile-First Responsiveness:** Flawlessly adapted across 360px, 375px, 390px, 768px, 1024px, 1280px, and 1440px+ viewports with zero horizontal overflow.
- **Desktop Spring Cursor:** Magnetic feel on interactive elements and contextual text labels on project cards.
- **Animated Navigation & Page Transitions:** Smooth route transitions and viewport scroll reveals with staggered delays.
- **Built-in PDF Resume:** Downloadable from navbar, hero, about snapshot, and footer.

---

## 🛠️ Tech Stack

- **Frontend Core:** React 18
- **Build Tool:** Vite 5
- **Routing:** React Router v6 (`react-router-dom`)
- **Styling:** Modular Pure CSS3 (CSS Variables, Flexbox, Grid, `clamp()` fluid typography)
- **Data Architecture:** Modular JSON database (`src/data/`)
- **Icons:** Custom high-precision SVG icon system (`src/components/Icons.jsx`)

---

## 📁 Project Structure

```text
gaurav-portfolio/
├── public/
│   ├── favicon.svg
│   └── resume.pdf                   # Complete professional PDF resume
├── src/
│   ├── components/
│   │   ├── CustomCursor/           # Desktop spring cursor (CustomCursor.jsx, CustomCursor.css)
│   │   ├── Footer/                 # Minimal editorial footer (Footer.jsx, Footer.css)
│   │   ├── HeroVisual/             # 3D interactive Canvas orb (HeroVisual.jsx, HeroVisual.css)
│   │   ├── Icons.jsx               # SVG icons system
│   │   ├── Navbar/                 # Sticky navbar & mobile menu (Navbar.jsx, Navbar.css)
│   │   ├── PageTransition/         # Smooth route transition wrapper (PageTransition.jsx, PageTransition.css)
│   │   ├── ProjectCard/            # Interactive card with schematic preview (ProjectCard.jsx, ProjectCard.css)
│   │   ├── ProjectFilter/          # Live search + category chips (ProjectFilter.jsx, ProjectFilter.css)
│   │   ├── Reveal/                 # Intersection Observer scroll reveal (Reveal.jsx, Reveal.css)
│   │   └── ThemeToggle/            # Dark/Light mode toggle (ThemeToggle.jsx, ThemeToggle.css)
│   ├── data/
│   │   ├── categories.json         # Filter categories
│   │   ├── profile.json            # Profile, philosophy, capabilities & process
│   │   ├── projects.json           # 7 complete project case studies
│   │   ├── skills.json             # Categorized technical skills
│   │   └── socials.json            # Social networks & communication links
│   ├── pages/
│   │   ├── About/                  # Editorial bio & principles (About.jsx, About.css)
│   │   ├── Community/              # Social hub & channels (Community.jsx, Community.css)
│   │   ├── Home/                   # Main landing experience (Home.jsx, Home.css)
│   │   ├── NotFound/               # 404 error page (NotFound.jsx, NotFound.css)
│   │   ├── ProjectDetails/         # Dynamic case studies (ProjectDetails.jsx, ProjectDetails.css)
│   │   ├── Projects/               # Full portfolio index (Projects.jsx, Projects.css)
│   │   └── Skills/                 # Interactive tech ecosystem (Skills.jsx, Skills.css)
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css                   # Global CSS design system & CSS variables
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 Getting Started (Run in 2 Steps)

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Production Build & Deployment

To generate an optimized production bundle:

```bash
npm run build
```

The output will be created inside the `dist/` directory, ready to deploy instantly to:
- **Vercel:** Run `npx vercel` or link your GitHub repository.
- **Netlify:** Drag and drop the `dist/` folder.
- **GitHub Pages / Cloudflare Pages:** Connect repository and set build command to `npm run build` and publish directory to `dist`.

---

## 📄 License & Attribution

Designed and engineered for **Gaurav** (Full-Stack Developer • System Designer • System Architecture).
