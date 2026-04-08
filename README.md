# Orbit Agent — Command Control Web Portal

Welcome to the `docs/` directory of the **Orbit Agent** architecture.

This specific directory acts as the dedicated static web front-end and documentation repository. It is strategically engineered to operate as a completely decoupled landing, information dissemination, and binary distribution hub for the primary software suite.

## Check the engine now!

https://pathinvyas.github.io/orbitagent.github.io/


## 🏗️ Technical Architecture

This web portal is designed intentionally without massive JavaScript frameworks (such as React or Next.js) to guarantee absolute zero-latency execution, flawless universal browser compatibility, and unhindered algorithmic crawling.

*   **Structure**: Pure HTML5 mapped entirely via heavily semantic DOM routing.
*   **Aesthetics & Engine (`css/global.css`)**: 
    *   Powered by vanilla CSS3 leveraging native `backdrop-filter` rendering for enterprise-grade Glassmorphism.
    *   Employs fluid, hardware-agnostic viewport logic. Complete CSS `@media` scaling allows the software layouts to cleanly morph sequentially between Ultra-Wide monitors, standard terminals, tablets, and mobile devices effortlessly.
*   **Dynamic Interactive Canvas (`js/main.js`)**: 
    *   Native runtime JavaScript executing an interactive 3D pointer-tracking HTML5 `<canvas>` network.
    *   Includes automatic intersection observers (`IntersectionObserver`) for staggered scroll reveals and programmatic 3D card tilt physics matrices.

## 📂 Directory Layout

| File Sequence | Tactical Purpose |
| :--- | :--- |
| **`index.html`** | The primary entry terminal detailing how Orbit Agent shatters standard GIS limitations via localized AI orchestration. |
| **`architecture.html`** | Structural documentation breaking down the direct TCP-socket bridge binding the Python Dual-Agents to the Flutter Runtime. |
| **`stack.html`** | Analysis of the Gemini API context ingestion and the Dart mapping modules. |
| **`download.html`** | Distribution gateway pointing to the hosted telemetry bundles. |
| **`assets/`** | The repository holding the core visual interface archives and compiled software payloads (`OrbitAgent_v1.0.0.zip`). |
| **`css/` & `js/`** | The decoupled styling and behavioral logic scripts managing the visual engine. |

## 🚀 Repository Deployment (GitHub Pages)

Because this ecosystem is pre-compiled as static logic inside a folder specifically named `docs`, it is physically prepared for immediate **GitHub Pages** distribution. 

1. Push this directory to your GitHub Repository.
2. Navigate to your repository **Settings** → **Pages**.
3. Under *Build and Deployment*, set the branch to `main` and the folder execution to `/docs`.
4. The GitHub Pages engine will automatically digest this folder and launch the Orbit Agent Command Portal as a live, publicly accessible website worldwide without any build scripts needed.

> **Local Execution**: No `npm install` required. To test logic paths instantaneously, explicitly open `index.html` in any modern web browser.

---
*Engineered by The Orbit Consortium.*
