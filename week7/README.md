# Movie Catalog App

A full-stack MERN Movie Catalog application with CRUD, search/filter, CI/CD, deployment, and monitoring.

---

## 📝 Features
- Browse, add, edit, and delete movies
- Search/filter by title or genre
- RESTful API (Express + MongoDB Atlas)
- React frontend (Vercel-ready)
- Backend (Render-ready)
- CI/CD with GitHub Actions
- Health check and Sentry monitoring

---

## 🚀 Quick Start

### 1. Clone the repo
```bash
git clone <your-repo-url>
cd week7
```

### 2. Environment Variables
- Copy `.env.example` to `.env` in both `server/` and `client/` and fill in your values.

### 3. Install dependencies
```bash
cd server && npm install
cd ../client && npm install
```

### 4. Run locally
- Start backend: `cd server && npm run dev`
- Start frontend: `cd client && npm start`

---

## 🌐 Deployment

### Backend (Render)
- Connect your repo to [Render](https://render.com/)
- Set root directory to `server`
- Add environment variables from `.env`
- Use `deployment/render.yaml` for config

### Frontend (Vercel)
- Import your repo to [Vercel](https://vercel.com/)
- Set root directory to `client`
- Add `REACT_APP_API_URL` env variable (point to your Render backend)

---

## ⚙️ CI/CD
- GitHub Actions workflows in `.github/workflows/`
- Auto test/build on push/PR

---

## 🩺 Monitoring
- Health check: `GET /api/health` (backend)
- Sentry integration (see `client/src/sentry.js` and `monitoring/README.md`)

---

## 📸 Screenshots
- Add screenshots of your deployed app and CI/CD pipeline here

---

## 🛡️ Maintenance
- Regularly update dependencies
- Monitor uptime and errors
- Back up your MongoDB Atlas database
- See `monitoring/README.md` for more

---

## 🔗 URLs
- **Frontend:** [Vercel Deployment URL]
- **Backend:** [Render Deployment URL]

---

## 📄 License
MIT 