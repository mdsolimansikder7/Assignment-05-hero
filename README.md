# 🚀 Tech Stack Builder

A sleek React + TypeScript web app that lets you explore popular web development technologies and build your own personalized tech stack — pick tools by category, add them to your stack, and manage your selections in real time.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38B2AC?logo=tailwind-css&logoColor=white)

## ✨ Features

- **Browse Technologies** — View a curated grid of technologies with icons, descriptions, badges, difficulty levels, and ratings
- **Build Your Stack** — Add technologies to your personal stack with a single click
- **Manage Your Selections** — Remove individual items or clear your entire stack at once
- **Duplicate Protection** — Prevents adding the same technology twice, with a friendly warning toast
- **Toast Notifications** — Real-time feedback for add, remove, and clear actions using `react-toastify`
- **Loading & Error States** — Graceful handling while data loads or if fetching fails
- **Responsive Design** — Clean, modern UI built with Tailwind CSS and DaisyUI

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| Framework | React 19 |
| Language | TypeScript |
| Build Tool | Vite 8 |
| Styling | Tailwind CSS 4, DaisyUI |
| Notifications | React Toastify |
| Linting | Oxlint |

## 📁 Project Structure

```
Assignment-05-hero/
├── public/
│   ├── data.json          # Technology data source
│   └── icons.svg
├── src/
│   ├── components/
│   │   ├── Nav.tsx         # Navigation bar
│   │   ├── Banner.tsx      # Hero section
│   │   ├── TechGrid.tsx    # Grid of available technologies
│   │   ├── Techcard.tsx    # Individual technology card
│   │   ├── YourStack.tsx   # User's selected stack panel
│   │   ├── Loadingstate.tsx
│   │   └── Footer.tsx
│   ├── type.ts             # Shared TypeScript types
│   ├── App.tsx             # Root application component
│   └── main.tsx            # Application entry point
├── package.json
└── vite.config.ts
```

## ⚙️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/mdsolimansikder7/Assignment-05-hero.git
   cd Assignment-05-hero
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to the local URL shown in the terminal (typically `http://localhost:5173`)

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server with hot reload |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run Oxlint to check code quality |

## 🎯 How It Works

1. Technologies are loaded from `public/data.json` on app start
2. Browse the technology grid, organized by category
3. Click **Add** on any technology to include it in your stack
4. View your selections in the **Your Stack** panel
5. Remove individual technologies or clear the entire stack as needed

## ❓ Q&A

**1. What is JSX, and why is it used in React?**
JSX lets you write HTML-like syntax inside JavaScript. It makes building UI easier to read/write; it compiles down to `React.createElement()` calls.

**2. What is the difference between props and state?**
Props are read-only data passed from a parent (e.g. `technologies`, `onAdd`). State is data owned by the component itself that can change (e.g. `stack`, `isLoading`).

**3. What does the useState hook do, and where did you use it in this project?**
`useState` lets a component store and update data, triggering a re-render when it changes. In this project it's used for `technologies`, `stack`, `isLoading`, and `error` in `App.tsx`.

**4. What does the useEffect hook do, and why did you need it to load the JSON data?**
`useEffect` runs side effects (like data fetching) after the component mounts. Fetching `/data.json` is an async operation, so it's run once on mount via `useEffect(() => { fetch(...) }, [])`.

**5. Why does every item in a .map() list need a unique key prop?**
The `key` prop tells React which items changed, were added, or removed between renders, so it can update the DOM efficiently and correctly. Each `tech.id` should be used as the unique key.

**6. What is conditional rendering? Show one place you used it.**
Conditional rendering means showing different UI based on a condition. Example from `App.tsx`:
```jsx
{isLoading ? <LoadingState /> : error ? <p>{error}</p> : <TechGrid />}
```

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
A parent passes data down via props (e.g. `technologies={technologies}`). A child sends data back up by calling a function passed as a prop, like `onAdd(tech)`, which runs `handleAdd` in the parent to update `stack`.

## 📄 License

This project was created as part of an academic assignment and is available for educational purposes.

## 👤 Author

**Md Soliman Sikder**
GitHub: [@mdsolimansikder7](https://github.com/mdsolimansikder7)
