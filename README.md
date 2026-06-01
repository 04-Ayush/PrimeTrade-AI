# Task Management App

## Project Overview
A simple full-stack task management system with authentication and role-based access. Users can manage their own tasks. Admins can view all users and tasks and delete any task through the Admin page.

## Installation Steps

### Backend
1. Go to the backend folder:
   - `cd backend`
2. Install dependencies:
   - `npm install`
3. Create an env file:
   - Copy `.env.example` to `.env` and update values.
4. Run the server:
   - `npm run dev`

### Frontend
1. Go to the frontend folder:
   - `cd frontend`
2. Install dependencies:
   - `npm install`
3. Start the app:
   - `npm run dev`

Frontend pages:
- `/login`, `/register`, `/dashboard`, `/tasks`, `/admin` (admin only)

## Environment Variables
Backend `.env`:
- `PORT=5000`
- `MONGO_URI=mongodb://localhost:27017/taskdb`
- `JWT_SECRET=replace_with_secret`

## API Endpoints

### Auth
- POST `/api/v1/auth/register`
- POST `/api/v1/auth/login`

### Tasks (User)
- GET `/api/v1/tasks`
- POST `/api/v1/tasks`
- PUT `/api/v1/tasks/:id`
- DELETE `/api/v1/tasks/:id`

### Admin
- GET `/api/v1/admin/users`
- GET `/api/v1/admin/tasks`
- DELETE `/api/v1/admin/tasks/:id`

Swagger docs: `http://localhost:5000/api-docs`

## Security and Validation Notes
- Passwords are hashed with bcrypt before saving.
- JWT is required for protected routes.
- Input validation and sanitization are handled with `express-validator`.

## Scalability Note
- Modular folder structure for easy maintenance.
- JWT based authentication keeps the API stateless.
- Database indexing can speed up common queries.
- Redis caching and load balancing can be added later if needed.
