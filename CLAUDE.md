# CLAUDE.md

## Project Context

This repository contains a Dependency Blast Radius Simulator.

The application allows users to:

* Create services
* Define dependencies
* Simulate failures
* Analyze impact
* Monitor system health

---

## Project Goals

Primary objective:

Understand how failures in one service affect dependent services.

Secondary objectives:

* Visualize dependency chains
* Measure blast radius
* Calculate severity
* Improve system resilience

---

## Development Principles

### Simplicity First

Prefer simple implementations over complex abstractions.

### Readability

Code should be understandable by junior developers.

### Maintainability

Favor modular architecture.

### Scalability

Design for future graph-based dependency analysis.

---

## Backend Structure

src/

controllers/

services/

repositories/

routes/

utils/

Responsibilities:

Controllers:

* Request validation
* Response formatting

Services:

* Business logic
* Simulation calculations

Repositories:

* Database operations

Utils:

* Shared helper functions

---

## Frontend Structure

app/

components/

services/

styles/

Responsibilities:

Pages:

* Data loading
* Layout composition

Components:

* Reusable UI

Forms:

* User interactions

Tables:

* Data presentation

---

## Simulation Logic

Current flow:

1. User selects failed service.
2. Backend retrieves dependencies.
3. Impacted services are calculated.
4. Blast radius is determined.
5. Severity score is generated.
6. Simulation record is stored.

---

## Severity Levels

Low:

0 impacted services

Medium:

1 impacted service

High:

2+ impacted services

Critical:

Multiple critical services affected

---

## Database Models

### Service

Stores service metadata.

### Dependency

Stores dependency relationships.

### Simulation

Stores simulation history.

---

## UI Expectations

Dashboard:

* KPI cards
* Summary metrics
* Responsive design

Services:

* Easy CRUD operations

Dependencies:

* Dropdown selection
* User-friendly relationships

Simulations:

* One-click failure testing
* Clear results table

---

## Code Generation Guidelines

When generating code:

* Use TypeScript
* Use async/await
* Follow existing naming conventions
* Preserve architecture
* Avoid unnecessary dependencies
* Maintain compatibility with Prisma

---

## Future Enhancements

Planned:

* Graph visualization
* Multi-hop dependency analysis
* Service ownership analytics
* Incident simulation engine
* WebSocket live updates
* AI-based risk scoring
* Exportable reports
* Role-based access control

---

## Success Criteria

A successful implementation should:

* Correctly model dependencies
* Calculate blast radius accurately
* Store simulation history
* Provide a clean user experience
* Remain scalable for future enhancements
