# Dependency Blast Radius Simulator

## Overview

Dependency Blast Radius Simulator is a full-stack application designed to visualize and analyze the impact of service failures within a microservices architecture.

The system allows users to:

* Register services
* Define service dependencies
* Simulate service failures
* Calculate blast radius and impact severity
* Monitor overall system health through a dashboard

This project helps engineering teams understand how failures propagate across interconnected services and identify critical points of failure.

---

# Features

## Service Management

Create and manage services with:

* Service Name
* Description
* Owner
* Criticality Level
* Health Status

Supported Status Types:

* HEALTHY
* DEGRADED
* FAILED

Supported Criticality Levels:

* LOW
* MEDIUM
* HIGH

---

## Dependency Management

Define relationships between services.

Example:

User Service → Payment Service

Payment Service → Email Service

This allows the application to understand how failures can propagate through the system.

---

## Failure Simulation

Select a service and simulate a failure.

The system calculates:

* Blast Radius
* Impacted Services Count
* Severity Score

Simulation results are stored for future analysis.

---

## Dashboard Analytics

Real-time dashboard displaying:

* Total Services
* Healthy Services
* Failed Services
* Degraded Services
* Total Dependencies
* Total Simulations

---

# Architecture

Frontend:

* Next.js
* React
* TypeScript

Backend:

* Node.js
* Express.js
* TypeScript

Database:

* PostgreSQL
* Prisma ORM

Deployment:

* Vercel (Frontend)
* Render / Railway (Backend)
* Supabase PostgreSQL

---

# Project Structure

backend/

├── src/

│ ├── controllers/

│ ├── repositories/

│ ├── routes/

│ ├── services/

│ ├── utils/

│ └── app.ts

├── prisma/

│ └── schema.prisma

frontend/

├── src/

│ ├── app/

│ ├── components/

│ ├── services/

│ └── styles/

---

# Database Schema

## Service

Stores service information.

Fields:

* id
* serviceCode
* name
* description
* owner
* criticality
* status
* createdAt
* updatedAt

---

## Dependency

Stores dependency relationships.

Fields:

* id
* serviceId
* dependsOnId
* createdAt

---

## Simulation

Stores simulation results.

Fields:

* id
* failedServiceId
* failedServiceName
* blastRadius
* severityScore
* impactedCount
* createdAt

---

# API Endpoints

## Services

GET

/api/services

POST

/api/services

GET

/api/services/:id

PUT

/api/services/:id

DELETE

/api/services/:id

---

## Dependencies

GET

/api/dependencies

POST

/api/dependencies

DELETE

/api/dependencies/:id

---

## Simulations

GET

/api/simulations

POST

/api/simulations

DELETE

/api/simulations/:id

---

## Dashboard

GET

/api/dashboard

---

# Blast Radius Calculation

The simulator determines:

1. Which services depend on the failed service
2. Number of impacted services
3. Severity score based on impact

Formula:

Severity Score = Blast Radius × 25

Example:

Failed Service:

Payment Service

Impacted Services:

* User Service
* Billing Service

Blast Radius:

2

Severity Score:

50

---

# Installation

## Clone Repository

git clone <repository-url>

cd dependency-blast-radius-simulator

---

# Backend Setup

cd backend

npm install

Create .env

DATABASE_URL=your_database_url

PORT=5000

Run Prisma

npx prisma generate

npx prisma db push

Start Server

npm run dev

---

# Frontend Setup

cd frontend

npm install

Create .env.local

NEXT_PUBLIC_API_URL=http://localhost:5000

Start Application

npm run dev

---

# Future Enhancements

* Dependency graph visualization
* Network topology view
* Multi-level blast radius analysis
* Service health monitoring
* Authentication and authorization
* Service ownership tracking
* Real-time updates using WebSockets
* Historical analytics dashboard
* Export simulation reports
* AI-powered risk prediction

---

# Sample Workflow

Step 1

Create Services:

* User Service
* Payment Service
* Email Service

Step 2

Create Dependencies:

User Service → Payment Service

Payment Service → Email Service

Step 3

Run Simulation:

Failed Service:

Payment Service

Step 4

View Results:

Blast Radius: 1

Impacted Services: 1

Severity Score: 25

---

# Author

Nilesh Pulate
---

# License

This project is developed for educational, learning, and demonstration purposes.
