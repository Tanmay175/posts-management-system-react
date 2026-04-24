# 🚀 React Query CRUD Dashboard

A modern CRUD application built with **React**, **TanStack React Query**, and **JSON Server**, demonstrating real-world server-state management, caching, and API integration.

---

## 🌟 Features

- 📄 Fetch posts using React Query
- ➕ Create new posts (POST request)
- ✏️ Inline edit posts (PATCH request)
- 📑 Pagination support
- 🏷️ Tag system with multi-select checkboxes
- ⚡ Smart caching with React Query
- 🔄 Auto refetch via query invalidation
- ⏳ Loading and error states handling

---

## 🛠️ Tech Stack

- React.js (Vite)
- TanStack React Query
- JavaScript (ES6+)
- JSON Server (Mock REST API)
- CSS3

---

## 📁 Project Setup

### 1️⃣ Install dependencies
```bash
npm install
```

---

### 2️⃣ Start JSON Server (Backend)

```bash
npx json-server data.json --port 3000
```

---

### 3️⃣ Run React App (Frontend)

```bash
npm run dev
```

---

## 🔗 API Endpoints

| Method | Endpoint        | Description        |
|--------|----------------|--------------------|
| GET    | `/posts`       | Fetch all posts    |
| POST   | `/posts`       | Create new post    |
| PATCH  | `/posts/:id`   | Update a post      |
| GET    | `/tags`        | Fetch all tags     |

---

## 🧠 Key Learnings

- React Query (useQuery, useMutation)
- Server-state vs client-state management
- Pagination implementation with APIs
- Handling dynamic forms (FormData)
- Cache invalidation strategies
- API-driven UI architecture

---

## 🚀 Future Improvements

- 🗑️ Delete post feature
- ⚡ Optimistic updates (instant UI updates)
- 🔐 Authentication system
- 🎨 UI/UX improvements (Material UI / Tailwind)
- 🌍 Deployment (Vercel / Netlify)

---