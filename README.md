# Raes Boutique

Luxury boutique e-commerce platform built with React, Tailwind CSS, Express, and MongoDB.

## 1. Folder Structure

```text
raescbe/
|-- backend/
|   |-- src/
|   |   |-- config/
|   |   |-- controllers/
|   |   |-- data/
|   |   |-- middleware/
|   |   |-- models/
|   |   |-- routes/
|   |   `-- utils/
|   |-- .env.example
|   `-- package.json
|-- frontend/
|   |-- src/
|   |   |-- api/
|   |   |-- components/
|   |   |   |-- admin/
|   |   |   |-- layout/
|   |   |   `-- shared/
|   |   |-- context/
|   |   |-- data/
|   |   |-- hooks/
|   |   `-- pages/
|   |       `-- admin/
|   |-- .env.example
|   `-- package.json
|-- package.json
`-- README.md
```

## 2. Backend

- Express.js API with MongoDB and Mongoose
- JWT user authentication
- bcrypt password hashing
- Role-based admin protection
- Auto-created demo admin on boot
- Seeded sample products for first launch
- Product CRUD, order APIs, wishlist API, analytics API, and CSV bulk upload

## 3. Frontend

- React + Vite + Tailwind CSS
- Luxury boutique responsive storefront
- Sticky offer banner and scroll-reactive navbar
- Home, Collections, Product, Services, Contact, Cart, Wishlist, Checkout, and Order Confirmation pages
- Hidden `/admin-login` route and admin dashboard
- Local cart persistence and backend-backed auth

## 4. Integration

- Frontend calls the backend through `VITE_API_URL`
- Backend allows the frontend origin through `CLIENT_URL`
- Admin routes are protected with JWT plus `role === "admin"`

## 5. Run Instructions

1. Copy the environment templates:
   - `backend/.env.example` -> `backend/.env`
   - `frontend/.env.example` -> `frontend/.env`
2. Set `MONGO_URI` in `backend/.env`
3. Start MongoDB locally or use a cloud connection string
4. Install dependencies:
   - `npm install`
   - `npm --prefix backend install`
   - `npm --prefix frontend install`
5. Start both apps:
   - `npm run dev`
6. Frontend:
   - `http://localhost:5173`
7. Backend:
   - `http://localhost:5000`

## Demo Admin Credentials

- Email: `admin@raesboutique.com`
- Password: `Admin@123`

The backend automatically creates this admin account on server startup if it does not already exist.

## Deployment

Recommended setup:

- Frontend: Vercel
- Backend API: Render
- Database: MongoDB Atlas

### Backend on Render

1. Push this repo to GitHub.
2. In Render, create a new `Web Service`.
3. Connect the GitHub repo and set:
   - Root Directory: `backend`
   - Build Command: `npm install`
   - Start Command: `npm run start`
4. Add environment variables:
   - `PORT=10000`
   - `MONGO_URI=<your MongoDB Atlas connection string>`
   - `JWT_SECRET=<your strong secret>`
   - `CLIENT_URL=<your frontend production URL>`
5. Deploy and copy the live backend URL.

### Frontend on Vercel

1. In Vercel, import the same GitHub repo.
2. Set the project Root Directory to `frontend`.
3. Keep:
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Add environment variable:
   - `VITE_API_URL=<your Render backend URL>/api`
5. Deploy the project.

### Important Notes

- `frontend/vercel.json` is included so React Router routes work when opened directly.
- The backend now supports both `CLIENT_URL` and a comma-separated `CLIENT_URLS` list if you want to allow multiple production origins.
- After deployment, test:
  - homepage
  - collections
  - login/signup
  - admin login
  - checkout flow
