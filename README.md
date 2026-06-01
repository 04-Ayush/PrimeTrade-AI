# Task Management App

## Project Overview

Task Management App is a simple full-stack application built as part of a Backend Developer Internship assignment. It demonstrates authentication, role-based access control, and CRUD operations using a modular and scalable project structure.

Users can register, log in, and manage their own tasks. Administrators have additional privileges to view all users, view all tasks, and delete any task.

---

## Features

### Authentication
- User Registration
- User Login
- Password Hashing using bcrypt
- JWT Authentication

### Role-Based Access Control
- User Role
- Admin Role

### Task Management
- Create Task
- View Tasks
- Update Task
- Delete Task

### Admin Features
- View All Users
- View All Tasks
- Delete Any Task

### Additional Features
- Input Validation
- Error Handling
- Swagger API Documentation

---

## Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- express-validator

### Frontend
- React (Vite)
- React Router
- Axios
- CSS

---

## Project Structure

```text
project-root/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   └── app.js
│   │
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.jsx
│   │
│   └── package.json
│
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone <repository-url>
cd <repository-name>
```

### Backend Setup

Navigate to backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file and add the following:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/taskdb
JWT_SECRET=your_secret_key
```

Run the backend server:

```bash
npm run dev
```

Server will start on:

```text
http://localhost:5000
```

### Frontend Setup

Navigate to frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run the frontend application:

```bash
npm run dev
```

Frontend will start on:

```text
http://localhost:5173
```

---

## Frontend Routes

| Route | Description |
|---------|------------|
| /register | User Registration |
| /login | User Login |
| /dashboard | Protected Dashboard |
| /tasks | Task Management |
| /admin | Admin Dashboard |

---

## API Endpoints

### Authentication

**Register User**

```http
POST /api/v1/auth/register
```

**Login User**

```http
POST /api/v1/auth/login
```

### Tasks

**Get User Tasks**

```http
GET /api/v1/tasks
```

**Create Task**

```http
POST /api/v1/tasks
```

**Update Task**

```http
PUT /api/v1/tasks/:id
```

**Delete Task**

```http
DELETE /api/v1/tasks/:id
```

### Admin

**Get All Users**

```http
GET /api/v1/admin/users
```

**Get All Tasks**

```http
GET /api/v1/admin/tasks
```

**Delete Any Task**

```http
DELETE /api/v1/admin/tasks/:id
```

---

## API Documentation

Swagger documentation is available at:

```text
http://localhost:5000/api-docs
```

---

## Security

- Passwords are hashed using bcrypt before storage.
- JWT authentication is used for protected routes.
- Role-based authorization is implemented for admin access.
- Request validation is handled using express-validator.
- Centralized error handling is used throughout the application.

---

## Scalability Notes

- Modular folder structure for maintainability.
- JWT-based authentication keeps the API stateless.
- Database indexing can improve query performance.
- Redis caching can be added for frequently accessed data.
- Load balancing can be introduced for handling higher traffic.

---

## Author

Ayush Rawat

Backend Developer Internship Assignment
