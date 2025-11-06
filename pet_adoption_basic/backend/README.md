# Pet Adoption Backend (Basic)

## Setup
1. Copy `.env.example` to `.env` and set `MONGO_URI` and `JWT_SECRET`.
2. Install dependencies:
   ```
   cd backend
   npm install
   ```
3. Seed sample pets:
   ```
   npm run seed
   ```
4. Start server:
   ```
   npm run dev
   ```
API endpoints:
- POST /api/auth/register  {name,email,password}
- POST /api/auth/login     {email,password}
- GET  /api/pets
- GET  /api/pets/:id
- POST /api/pets           (create pet)
- POST /api/adoptions      {petId} (Authorization: Bearer <token>)
- GET  /api/adoptions/me   (Authorization: Bearer <token>)
