# Pet Adoption & Care Platform — Basic (Deployable)

This bundle contains a basic deployable MERN app skeleton with:
- JWT auth (register/login)
- Pet listing and details
- Adoption request flow (protected)
- Sample seed script to add demo pets

## How to run locally
1. Start MongoDB (e.g., `mongod`).
2. Backend:
   - Copy `backend/.env.example` to `backend/.env` and set values.
   - `cd backend && npm install && npm run seed && npm run dev`
3. Frontend:
   - `cd frontend && npm install && npm start`
4. Open frontend at `http://localhost:3000` and backend at `http://localhost:5000`

