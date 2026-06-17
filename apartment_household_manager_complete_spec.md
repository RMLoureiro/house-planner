# Apartment / Household Manager --- Complete Product Specification

## Table of Contents

1.  Product Vision
2.  Goals
3.  User Personas
4.  Core Features
5.  Detailed Requirements
6.  User Flows
7.  Database Design
8.  Prisma Schema
9.  API Contracts
10. Frontend Architecture
11. Backend Architecture
12. UI / Page Wireframes
13. Permissions & Roles
14. Business Logic
15. Validation Rules
16. Notifications
17. Analytics
18. MVP vs Stretch Goals
19. 7-Day Build Plan
20. Deployment
21. Portfolio Talking Points

------------------------------------------------------------------------

# 1. Product Vision

A private household platform for couples to manage apartment logistics
in one place.

The application replaces scattered communication across: - WhatsApp -
Notes apps - Sticky notes - Splitwise - Spreadsheets

The goal is to centralize:

-   expenses
-   groceries
-   chores
-   bills
-   maintenance
-   notes
-   reminders
-   shared planning

------------------------------------------------------------------------

# 2. Goals

### Primary Goals

-   Reduce household friction
-   Make finances transparent
-   Organize recurring tasks
-   Avoid forgotten bills
-   Improve communication

### Technical Learning Goals

This project teaches:

-   React fundamentals
-   Express APIs
-   JWT authentication
-   Relational databases
-   Authorization/permissions
-   Business logic
-   State management
-   File uploads
-   API architecture

------------------------------------------------------------------------

# 3. User Personas

## Couple

Two partners sharing a home.

Need:
- budgeting and expense splitting
- shared grocery lists
- chore assignments
- bill reminders
- maintenance tracking
- shared planning and notes

------------------------------------------------------------------------

# 4. Core Features

## MVP

1.  Authentication
2.  Household system
3.  Shared expenses
4.  Grocery lists
5.  Chore rotation
6.  Utility bills
7.  House notes

## Extended Features

8.  Calendar
9.  Maintenance tracking
10. Notifications
11. Shared inventory
12. Poll system
13. Analytics dashboard

------------------------------------------------------------------------

# 5. Detailed Requirements

## Authentication

### Features

-   Register
-   Login
-   Logout
-   Protected routes
-   Persist sessions
-   Password hashing

### Stretch

-   Password reset
-   Social login

------------------------------------------------------------------------

## Household System

### Create household

Example:

Apartment Lisbon

### Join household

Invite code:

HOME-82A1

### Household Settings

-   change name
-   invite partner
-   transfer ownership
-   leave household

------------------------------------------------------------------------

## Dashboard

### Widgets

-   bills due
-   pending chores
-   groceries remaining
-   monthly spending
-   pinned notes
-   upcoming events

### Example Dashboard

Bills Due: 2\
Chores Today: 3\
Groceries Needed: 14\
Monthly Spending: €289

------------------------------------------------------------------------

## Shared Expenses

### Features

-   Add expense
-   Edit expense
-   Delete expense
-   Split equally
-   Custom split
-   Settlement tracking
-   Categories
-   Receipt uploads
-   Monthly filters

### Categories

-   groceries
-   utilities
-   rent
-   internet
-   cleaning
-   repairs
-   entertainment
-   misc

### Expense Example

Title: Groceries\
Amount: €72\
Paid by: Maria\
Split equally between 2

------------------------------------------------------------------------

## Grocery Lists

### Features

-   Add item
-   Quantity
-   Priority
-   Category
-   Mark complete
-   Assign buyer
-   Recurring grocery items

### Priorities

-   low
-   medium
-   high
-   urgent

------------------------------------------------------------------------

## Chore Rotation

### Features

-   Recurring chores
-   Due dates
-   Rotation
-   Skip task
-   Swap task
-   Completion history
-   Chore leaderboard

### Example Rotation

Trash: Week 1 → Alex\
Week 2 → Maria\
Week 3 → Alex\
Week 4 → Maria

------------------------------------------------------------------------

## Utility Bills

### Features

-   recurring bills
-   due dates
-   payment tracking
-   upload invoices
-   history

------------------------------------------------------------------------

## House Notes

### Features

-   rich text
-   pin notes
-   markdown support
-   search
-   edit history

Examples: - WiFi password - landlord phone number - apartment rules

------------------------------------------------------------------------

## Shared Calendar

### Events

-   rent due
-   visitors
-   cleaning day
-   deliveries

------------------------------------------------------------------------

## Maintenance Tracking

### Examples

-   air filter replacement
-   boiler inspection
-   kitchen deep clean
-   internet renewal

------------------------------------------------------------------------

## Shared Inventory

Track: - appliances - tools - spare keys

Fields: - owner - condition - purchase date - notes

------------------------------------------------------------------------

## Voting / Polls

Example: Should we buy a dishwasher?

Options: - yes - no - maybe later

------------------------------------------------------------------------

# 6. User Flows

## Create Household

Register\
→ Create Household\
→ Invite partner\
→ Start adding data

## Join Household

Register\
→ Enter invite code\
→ Join apartment

## Add Expense

Dashboard\
→ Add Expense\
→ Choose category\
→ Choose split\
→ Save

------------------------------------------------------------------------

# 7. Database Design

Household ├── Users ├── Expenses ├── GroceryItems ├── Chores ├── Bills
├── Notes ├── Events └── MaintenanceTasks

------------------------------------------------------------------------

# 8. Prisma Schema (Starter)

``` prisma
model User {
  id           String @id @default(uuid())
  name         String
  email        String @unique
  passwordHash String
  role         Role
  householdId  String?
  household    Household? @relation(fields:[householdId], references:[id])
}

model Household {
  id       String @id @default(uuid())
  name     String
  users    User[]
  expenses Expense[]
}

model Expense {
  id          String @id @default(uuid())
  title       String
  amount      Float
  category    String
  householdId String
  household   Household @relation(fields:[householdId], references:[id])
}
```

------------------------------------------------------------------------

# 9. API Contracts

## Auth

POST /auth/register\
POST /auth/login\
GET /auth/me

## Household

POST /households\
POST /households/join\
GET /households/current

## Expenses

GET /expenses\
POST /expenses\
PUT /expenses/:id\
DELETE /expenses/:id

## Groceries

GET /groceries\
POST /groceries\
PATCH /groceries/:id

## Chores

GET /chores\
POST /chores\
PATCH /chores/:id/complete

## Bills

GET /bills\
POST /bills

------------------------------------------------------------------------

# 10. Frontend Architecture

``` txt
src/
├── api/
├── components/
├── context/
├── hooks/
├── layouts/
├── pages/
├── services/
├── utils/
└── types/
```

------------------------------------------------------------------------

# 11. Backend Architecture

``` txt
src/
├── routes/
├── controllers/
├── middleware/
├── services/
├── prisma/
├── validators/
└── utils/
```

------------------------------------------------------------------------

# 12. UI Wireframes

## Sidebar

-   Dashboard
-   Expenses
-   Groceries
-   Chores
-   Bills
-   Calendar
-   Notes
-   Settings

## Dashboard Layout

Top stats cards

Middle: - chores - groceries - bills

Bottom: - notes - activity feed

------------------------------------------------------------------------

# 13. Permissions

Both partners have equal access to all household data.

## Admin (creator)

Can:
- delete household
- transfer ownership
- manage household settings

## Partner

Can:
- create, edit, and delete expenses
- complete and swap chores
- manage groceries and bills
- edit notes and shared data

------------------------------------------------------------------------

# 14. Business Logic

## Expense Splitting

Equal split:

€60 / 2 partners

Each owes €30

Custom split: Alex: 60% Maria: 40%

------------------------------------------------------------------------

## Chore Rotation Logic

When completed:

1.  Mark complete
2.  Generate next due date
3.  Rotate assigned member

------------------------------------------------------------------------

# 15. Validation Rules

Expenses: - amount \> 0 - title required

Groceries: - name required

Household: - unique invite code

------------------------------------------------------------------------

# 16. Notifications

Future: - bill due reminders - chore reminders - grocery reminders

------------------------------------------------------------------------

# 17. Analytics

Charts: - monthly spending - completed chores - grocery costs

------------------------------------------------------------------------

# 18. MVP vs Stretch

## MVP

-   auth
-   expenses
-   groceries
-   chores
-   notes
-   bills

## Stretch

-   notifications
-   analytics
-   polls
-   calendar
-   maintenance

------------------------------------------------------------------------

# 19. 7-Day Build Plan

### Day 1

Setup + auth

### Day 2

Households

### Day 3

Expenses

### Day 4

Groceries + chores

### Day 5

Bills + notes

### Day 6

Polish + permissions

### Day 7

Testing + deployment

------------------------------------------------------------------------

# 20. Deployment

Frontend: Vercel

Backend: Render / Railway

Database: SQLite → PostgreSQL later

------------------------------------------------------------------------

# 21. Portfolio Talking Points

This project demonstrates:

-   Full-stack architecture
-   Authentication
-   Authorization
-   Relational databases
-   Complex business logic
-   REST APIs
-   Real-world UX
-   Shared state
