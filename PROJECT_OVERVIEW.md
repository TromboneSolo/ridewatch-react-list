# RideWatch React List — Project Overview

## Purpose

**RideWatch** is a collectible tracker web app for *Kamen Rider* franchise "ridewatches" — merchandise toy watches. Users can browse a catalog of 180+ watches, mark which ones they own, filter and search by multiple criteria, and toggle between English and Japanese (Katakana) display.

Deployed to GitHub Pages: `https://trombonesolo.github.io/ridewatch-react-list`

---

## Tech Stack

| Tool | Version | Role |
|---|---|---|
| React | 16.9.0 | UI framework (class-based components) |
| React Router DOM | 5.0.1 | Client-side routing (HashRouter) |
| React Scripts (CRA) | 5.0.1 | Build and dev server |
| Azure Blob Storage | — | Image hosting (icons and watch photos) |
| gh-pages | 2.1.1 | GitHub Pages deployment |

> Note: The app uses legacy React patterns — class components, `componentWillMount`, string refs — and no React hooks.

---

## Core Features

| Feature | Details |
|---|---|
| **Checklist view** | All ~180 watches grouped by 22 series with collapsible section headers |
| **Ownership tracking** | Click a watch to toggle owned/not-owned; persisted in `localStorage` |
| **Search/filter view** | Filter by name (fuzzy Soundex), primary color, secondary color, DX/GP type, and owned status |
| **Language toggle** | Click the logo to switch English ↔ Japanese (Katakana) watch names |
| **Sidebar navigation** | Shows total owned count, minimized series icons, and route links |
| **Easter egg** | Minimize all 22 series → Canvas renders "God Will Not Forgive Bandai" |

---

## Architecture & Data Flow

```
App.js (global state: language, visibility, totalOwned)
  ├── Sidebar.jsx       (nav, owned counter, minimized series icons, easter egg)
  └── MainRoutes.jsx
       ├── Checklist.jsx → RidewatchList.jsx → Ridewatch.jsx
       └── Search.jsx → DataService.js (filters) → results list
```

### Data Sources

- **`src/ridewatchdata.json`** — Static bundle of 180+ watch objects (id, name, katakana, year, colors, series, DX flag). Imported at build time; no API calls.
- **`localStorage`** — Stores owned watch IDs in the browser. Survives page reloads and browser sessions.

### Watch Data Shape

Each watch object in `ridewatchdata.json` looks like:

```json
{
  "id": "zio",
  "DX": true,
  "series": "zio",
  "name": "Zi-O",
  "katakana": "ジオウ",
  "year": "2018",
  "primaryColor": "clear",
  "secondaryColor": "black"
}
```

### Filter Pipeline (DataService.js)

```
DataService.fetch(searchCriteria)
  → fetchAll()           [load all watches from JSON]
  → filter: owned status [check localStorage]
  → filter: name         [exact match OR Soundex fuzzy match]
  → filter: primary color
  → filter: secondary color
  → filter: DX flag
  → return filtered array
```

---

## Key Files

| File | Role |
|---|---|
| `src/App.js` | Global state, language toggle, localStorage sync |
| `src/services/DataService.js` | All filtering and fuzzy search logic |
| `src/ridewatchdata.json` | Master watch catalog (~47KB) |
| `src/config.jsx` | Centralized Azure Blob Storage image URLs |
| `src/Checklist.jsx` | Main checklist page |
| `src/Search.jsx` | Search and filter page |
| `src/Sidebar.jsx` | Navigation, owned counter, easter egg trigger |
| `src/components/RidewatchList.jsx` | Series section with header and watch list |
| `src/components/Ridewatch.jsx` | Individual watch button + localStorage interaction |
| `src/components/Canvas.jsx` | Easter egg canvas renderer |
| `src/models/RideWatch.js` | RideWatch class model definition |
| `src/indexRoutes.jsx` | Root route pointing to App |
| `src/MainRoutes.jsx` | Page-level route configuration |

---

## Project File Structure

```
ridewatch-react-list/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Canvas.jsx
│   │   ├── Footer.jsx        (empty placeholder)
│   │   ├── Header.jsx        (empty placeholder)
│   │   ├── Ridewatch.jsx
│   │   └── RidewatchList.jsx
│   ├── models/
│   │   └── RideWatch.js
│   ├── services/
│   │   └── DataService.js
│   ├── App.js
│   ├── App.css
│   ├── Checklist.jsx
│   ├── Search.jsx
│   ├── Sidebar.jsx
│   ├── Sidebar.css
│   ├── config.jsx
│   ├── index.js
│   ├── indexRoutes.jsx
│   ├── MainRoutes.jsx
│   ├── ridewatchdata.json
│   └── serviceWorker.js
├── package.json
└── jsconfig.json
```

---

## Image Hosting

All images are hosted on Azure Blob Storage, with URLs centralized in `src/config.jsx`:

- **Icons**: `https://gcblobstoredurable1.blob.core.windows.net/ms-storage/ridewatch/images/icons/`
- **Watch photos**: `https://gcblobstoredurable1.blob.core.windows.net/ms-storage/ridewatch/images/watches/`

---

## Notable Design Decisions

### Soundex Fuzzy Search
Implemented in `DataService.js` (and duplicated in `RidewatchList.jsx`). Uses phonetic matching to handle multiple romanization possibilities for Japanese names.

### LocalStorage Persistence
Ownership is stored as simple key-value pairs (`watch.id → watch.id`). No data validation or error handling. Synced to UI through `totalOwnedUpdate()` callbacks.

### HashRouter Routing
Uses `#` routing (`/#/checklist`, `/#/search`) to enable GitHub Pages hosting without server-side routing configuration.

### Language Toggle
No i18n library — a simple boolean flag (`katakana: true/false`) is passed down via props. Content is duplicated in every watch object. State is not persisted across sessions.

### No State Management Library
Pure React prop-drilling and callbacks. State lives in `App.js` and is passed down to children. No Redux, Context API, or other state management tools.

### Static Data
`ridewatchdata.json` is bundled at build time via ES6 import. There are no API calls or dynamic data fetching. The catalog is immutable after compilation.

---

## Watch Catalog

The app covers **180+ watches** across **22 Kamen Rider series**, spanning roughly 2000–2024. Series include Zi-O, Build, Ex-Aid, Gaim, Gotchard, and many others. Each series can be a DX (Deluxe) or GP (General Purpose) variant.

**Supported filter colors:**
- Primary: red, pink, yellow, blue, dark blue, green, gold, silver, purple, orange, black, aurora, white, grey, clear, mustard
- Secondary: same set plus additional options

---

## Deployment

```bash
# Development
npm start

# Production build
npm run build

# Deploy to GitHub Pages
npm run deploy
```

Homepage is set to `https://trombonesolo.github.io/ridewatch-react-list` in `package.json`.

---

## Easter Egg

Minimize all 22 series sections using their header icons. Once all are hidden, the sidebar triggers `Canvas.jsx` to render the message **"God Will Not Forgive Bandai"** — a joke about the Kamen Rider merchandise company.

---

## Sustainability Recommendations

### High Priority (Maintainability)

#### 1. Migrate to Function Components + Hooks
The biggest sustainability risk. React class components aren't getting new features, and `componentWillMount` is deprecated/removed in React 18+. Every class component should become a function component using `useState` / `useEffect`.

```jsx
// Before (class)
class Ridewatch extends Component {
  componentDidMount() { ... }
}

// After (function)
function Ridewatch({ watch }) {
  useEffect(() => { ... }, []);
}
```

#### 2. Upgrade React (16 → 18)
React 16.9 is end-of-life. The class component migration above is a prerequisite. React 18 brings concurrent rendering, automatic batching, and long-term support.

#### 3. Remove Duplicate Soundex Implementation
The Soundex algorithm lives in both `DataService.js` and `RidewatchList.jsx`. One copy should be extracted to a shared utility (e.g., `src/utils/soundex.js`) and imported by both.

---

### Medium Priority (Code Quality)

#### 4. Replace Prop Drilling with Context API
Global state (language, totalOwned, visibility) is drilled through many layers. A `WatchContext` would eliminate the chain of callbacks and make components easier to maintain independently.

#### 5. Add TypeScript
The `RideWatch.js` model already defines a clear data shape. TypeScript would catch errors at development time and serve as living documentation — especially valuable when the catalog data changes.

#### 6. Clean Up Dead Code
- `Header.jsx` and `Footer.jsx` are empty placeholders
- `checkAll()` is commented out in multiple places
- Unused imports scattered throughout
- String refs (`ref="canvas"`) should be replaced with `React.createRef()`

---

### Lower Priority (Long-term Health)

#### 7. Persist Language Preference
The English/Japanese toggle resets on every page load. One line of `localStorage` would fix this and improve UX.

#### 8. Add a `useLocalStorage` Hook
Ownership state is managed through scattered `localStorage` calls. A single custom hook would centralize this logic and make it testable.

#### 9. Write Tests
`App.test.js` exists but is presumably minimal. The filter pipeline in `DataService.js` is an ideal candidate for unit tests — it's pure logic with no UI dependency.

#### 10. Replace CRA with Vite
Create React App is no longer maintained. Vite offers faster dev startup, faster builds, and an active ecosystem. Migration is straightforward for a project this size.

---

### Summary Table

| Change | Effort | Impact |
|---|---|---|
| Function components + Hooks | High | Critical |
| Upgrade React 16 → 18 | Medium | Critical |
| Remove duplicate Soundex | Low | Medium |
| Context API for global state | Medium | Medium |
| TypeScript | High | Medium |
| Clean up dead code | Low | Low |
| Persist language preference | Low | Low |
| `useLocalStorage` hook | Low | Low |
| Tests for DataService | Low | Medium |
| CRA → Vite | Medium | Medium |

> The **function components + React upgrade** path is the most urgent — the rest of the improvements become much easier once that foundation is in place.

---

## Recommended Features to Learn Next

These features are ordered from most accessible to most ambitious. Each one teaches a distinct, valuable skill that can be applied directly to this app.

### Beginner

#### 1. Persist Language Preference — `localStorage` + React State
You already use `localStorage` for ownership. Extending it to save the language toggle teaches you how to synchronize React state with browser storage — a pattern that appears everywhere.

**What you'd learn:** Stateful side effects, reading/writing storage on mount.

#### 2. "Reset Collection" Button — Confirmation UI Pattern
A button that clears all owned watches, but asks "Are you sure?" first. Simple, but teaches you how to build two-step destructive actions and conditionally render UI.

**What you'd learn:** Conditional rendering, controlled UI state.

#### 3. Owned/Total Progress Bar per Series — Derived State
Calculate `owned / total` per series and display a visual progress bar in each section header. No new libraries needed — just math on existing data.

**What you'd learn:** Deriving computed values from state, passing data to presentational components.

---

### Intermediate

#### 4. Dark Mode Toggle — CSS Custom Properties + Context
Add a light/dark mode switch. Use CSS variables (`--bg-color`, `--text-color`) and a React Context to broadcast the theme without prop drilling.

**What you'd learn:** CSS custom properties, React Context API (directly replacing the prop drilling in this app).

#### 5. Sort Options in Search — Controlled Inputs + Array Methods
Add sort controls to the Search page (by name, year, color). Teaches you how to manage multiple controlled form inputs and transform data arrays.

**What you'd learn:** Controlled components, `Array.sort()` with comparators.

#### 6. Export Collection as JSON/CSV — File API
A button that downloads the user's owned watches as a file. No backend needed — pure browser File API.

**What you'd learn:** `Blob`, `URL.createObjectURL()`, programmatic file downloads.

#### 7. Convert to Function Components — React Hooks
Rewrite one component at a time from class to function using `useState` and `useEffect`. This is the most directly applicable skill for modern React development.

**What you'd learn:** `useState`, `useEffect`, `useRef`, custom hooks — the foundation of modern React.

---

### Advanced

#### 8. Add a "Wishlist" Feature — Multiple Data Collections
A second toggle state per watch (owned vs. wishlisted vs. neither). Teaches you how to manage more complex state shapes and update localStorage schemas without breaking existing data.

**What you'd learn:** Complex state design, data migration patterns.

#### 9. Filter URL Sync — `URLSearchParams` + React Router
Sync search filter state into the URL (`/?color=red&dx=true`) so filters are shareable and bookmarkable. A very common real-world pattern.

**What you'd learn:** `URLSearchParams`, `useSearchParams` (React Router v6), browser history API.

#### 10. Migrate to Vite + TypeScript — Tooling & Types
Replace Create React App with Vite and add TypeScript. The `RideWatch` model you already have maps directly to a TypeScript interface.

**What you'd learn:** Modern build tooling, TypeScript interfaces, type-safe props — skills in very high demand.

#### 11. Unit Test the Filter Pipeline — Jest + Testing Library
Write tests for `DataService.js`. It has no UI dependencies, making it a perfect first testing target. Then add component tests for `Ridewatch.jsx`.

**What you'd learn:** Jest, React Testing Library, test-driven thinking.

---

### Recommended Learning Path

```
localStorage persistence  →  Context API (dark mode)
         ↓
Function components + Hooks  →  TypeScript
         ↓
URL sync  →  Tests
```

Each step builds directly on the last. The **hooks migration** is the highest-leverage skill since everything in modern React flows from it.
