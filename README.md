# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
Accessible To-Do App

Eine kleine, aber vollständig funktionale To-Do-App mit React + TypeScript – inklusive Barrierefreiheit, Checkbox-Interaktionen, und einem besonderen Feature:
✔ Aufgaben verschwinden automatisch 10 Sekunden, nachdem sie abgehakt wurden.

Dieses Projekt zeigt meinen Fokus auf UX, Accessibility und strukturierte State-Verwaltung in React.

🚀 Features
✏️ Aufgaben hinzufügen

Texteingabe mit kontrolliertem React-State

Leere Einträge werden verhindert (trim())

✅ Aufgaben abhaken

Jede Aufgabe hat eine Checkbox

Die Aufgabenstruktur ist typisiert (Task-Typ in TypeScript)

⏳ Auto-Löschen nach 10 Sekunden

Sobald eine Aufgabe als erledigt markiert wird, startet ein Timer

Nach 10 Sekunden wird die Aufgabe automatisch aus der Liste entfernt

State bleibt sauber & synchron

♿ Accessibility (A11y)

Labels für Eingabefelder

Checkboxes sind per Screenreader erfassbar

Struktur klare, semantische Liste (<ul><li>)

Fokus- und Interaktionsverhalten konsistent

🧼 Saubere Code-Struktur

Separater Typ für Tasks (type Task)

reine Update-Logik für State (map, filter)

übersichtliche Komponentenstruktur

🛠️ Tech Stack

React (mit Vite)

TypeScript

CSS

React Hooks: useState

Moderne Array-Methoden: map, filter, Spread Operator

📂 Projektaufbau
src/
 ├── App.tsx       # Hauptlogik der To-Do-App
 ├── App.css       # Styles
 └── main.tsx      # React Rendering

**CSS noch in Umsetzung**
