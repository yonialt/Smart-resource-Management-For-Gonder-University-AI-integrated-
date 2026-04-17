# Smart-resource-Management-For-Gonder-University-AI-integrated-
# Smart Resource Management System (SRMS)

## Overview

This project is a Smart Resource Management System developed to help manage and track university resources efficiently. The system allows users to request resources, follow an approval process, assign maintenance tasks, and monitor the condition of assets.

The main goal of this system is to reduce manual work, improve transparency, and make decision-making easier using structured data and simple automation.

---

## Features

* User authentication and role-based access (Admin, Department Head, Technician, Staff)
* Resource management (add, update, delete, view resources)
* Request system for resource usage
* Multi-level approval workflow
* Maintenance task assignment and tracking
* Basic AI recommendation endpoint (for future improvements)
* Reporting system for monitoring system activity

---

## Tech Stack

* Backend: Node.js, Express
* Database: PostgreSQL
* ORM: Prisma
* Authentication: JWT

---

## Project Structure

```
src/
 ├── controllers/
 ├── routes/
 ├── middleware/
 ├── prisma/
 └── server.js
```

---

## Installation

1. Clone the repository

```
git clone <your-repo-link>
cd srms
```

2. Install dependencies

```
npm install
```

3. Setup environment variables

Create a `.env` file:

```
DATABASE_URL="postgresql://user:password@localhost:5432/srms"
JWT_SECRET="your_secret_key"
```

4. Run Prisma migration

```
npx prisma migrate dev
npx prisma generate
```

5. Start the server

```
npm run dev
```

---

## API Base URL

```
http://localhost:5000/api
```

---

## Main Endpoints

### Users

* POST `/users/register`
* POST `/users/login`

### Resources

* GET `/resources`
* POST `/resources`

### Requests

* POST `/requests`
* GET `/requests`
* PATCH `/requests/:id/status`

### Maintenance

* POST `/maintenance/assign`
* PATCH `/maintenance/:id/status`

### AI

* GET `/ai/prediction/:resourceId`

### Reports

* GET `/reports`

---

## Future Improvements

* Integrate real AI model for predictions
* Add notifications (email or in-app)
* Improve validation and security
* Build frontend (React or mobile app)
* Deploy to cloud (AWS or similar)

---

## Conclusion

This project demonstrates how a real-world system can be structured using modern backend tools. It focuses on clean architecture, role-based access control, and scalable design.

---
