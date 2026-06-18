# AGENTS.md

## Project Overview

Dependency Blast Radius Simulator is a full-stack application used to model service dependencies, simulate service failures, and calculate the resulting blast radius across a microservices ecosystem.

The goal is to help engineers understand how failures propagate through interconnected systems.

---

## Technology Stack

### Frontend

* Next.js 15
* React
* TypeScript
* CSS

### Backend

* Node.js
* Express.js
* TypeScript

### Database

* PostgreSQL
* Prisma ORM

---

## Architecture Rules

### Layered Architecture

Always follow:

Controller → Service → Repository → Database

Responsibilities:

* Controllers handle HTTP requests and responses.
* Services contain business logic.
* Repositories interact with Prisma.
* Database stores persistent data.

Do not place business logic inside controllers.

---

## Service Module

Service entity contains:

* id
* serviceCode
* name
* description
* owner
* criticality
* status

Status values:

* HEALTHY
* DEGRADED
* FAILED

Criticality values:

* LOW
* MEDIUM
* HIGH

---

## Dependency Module

Dependency defines relationships between services.

Example:

User Service → Payment Service

Payment Service → Email Service

Dependencies are used during simulation calculations.

---

## Simulation Module

Simulation inputs:

* failedServiceId

Simulation outputs:

* blastRadius
* severityScore
* impactedCount
* failedServiceName

Severity calculation:

0 Impacted → 25

1 Impacted → 50

2 Impacted → 75

3+ Impacted → 100

---

## Coding Standards

### Backend

Use:

* async/await
* TypeScript types
* Proper error handling

Example:

try {
...
} catch(error) {
...
}

Never use nested callbacks.

---

### Frontend

Use:

* Functional components
* React hooks
* TypeScript

Avoid:

* Class components
* Inline business logic

---

## Database Rules

All database operations must go through Prisma.

Never write raw SQL unless necessary.

---

## UI Guidelines

Preferred design:

* Clean cards
* Responsive layouts
* Modern dashboard
* Blue primary actions
* Consistent spacing

---

## Future Roadmap

* Dependency graph visualization
* Cytoscape integration
* Service health monitoring
* Real-time updates
* Historical analytics
* Risk prediction engine
* AI-assisted failure analysis

---

## Agent Instructions

When modifying code:

1. Preserve existing architecture.
2. Keep API contracts unchanged.
3. Use TypeScript types.
4. Avoid breaking database schema.
5. Prefer reusable components.
6. Maintain responsive UI.
7. Keep business logic in service layer.
