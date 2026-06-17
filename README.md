# House Planner

A private household management app for couples. Centralises expenses, groceries, chores, bills, and notes in one place.

## Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js 16 (App Router) + TypeScript + Tailwind CSS |
| Backend | Express 5 + TypeScript + Prisma ORM |
| Database | PostgreSQL |
| Auth | JWT in httpOnly cookies |
| Runtime | Bun |

## Monorepo Structure

```
house-planner/
├── apps/
│   ├── api/          ← Express backend (port 4000)
│   └── web/          ← Next.js frontend (port 3000)
├── packages/
│   └── types/        ← Shared TypeScript interfaces
├── tsconfig.base.json
└── package.json
```

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) v1.0+
- [PostgreSQL](https://www.postgresql.org) running locally (or via Docker)

### 1. Clone and install

```bash
git clone <repo-url>
cd house-planner
bun install
```

### 2. Configure environment variables

Copy the example file and fill in your values:

```bash
cp .env.example apps/api/.env
```

Edit `apps/api/.env`:
```
PORT=4000
WEB_URL=http://localhost:3000
JWT_SECRET=your_long_random_secret_here
DATABASE_URL=postgresql://user:password@localhost:5432/household_db
```

Create `apps/web/.env.local`:
```
NEXT_PUBLIC_API_URL=http://localhost:4000
```

### 3. Set up the database

Start PostgreSQL via Docker (optional):
```bash
docker run --name household-db -e POSTGRES_PASSWORD=password -p 5432:5432 -d postgres
```

Run Prisma migrations:
```bash
cd apps/api
bunx prisma migrate dev --name init
```

### 4. Run the development servers

From the repo root:
```bash
bun dev          # starts both API and web together
bun dev:api      # API only (http://localhost:4000)
bun dev:web      # Web only (http://localhost:3000)
```

Verify the API is running:
```bash
curl http://localhost:4000/health
# {"status":"ok"}
```

## Features

- **Expenses** — track shared spending with equal or custom splits, settlement summary
- **Groceries** — shared list with priorities, categories, and completion tracking
- **Chores** — assignments with automatic rotation between partners
- **Bills** — recurring bill tracking with due date alerts
- **Notes** — pinnable shared notes with markdown support
- **Dashboard** — overview of bills due, pending chores, grocery count, monthly spending

## Scripts

| Command | Description |
|---|---|
| `bun dev` | Start all apps |
| `bun dev:api` | Start API only |
| `bun dev:web` | Start web only |
| `cd apps/api && bun run build` | Compile API to `dist/` |
| `cd apps/api && bunx prisma studio` | Open Prisma database GUI |
| `cd apps/api && bunx prisma migrate dev` | Run new migrations |
