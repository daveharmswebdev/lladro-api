# Progress

## What Works

- [x] PostgreSQL database configured via `docker-compose.yml`.
- [x] Initial memory bank files created.
- [x] tsconfig.json file refactored.
- [x] Jest added to .clinerules/techstack.md.
- [x] package.json file refactored.
- [x] .gitignore file added.
- [x] API modified to use an index.ts and app.ts.
- [x] Implemented JSON for the hello world endpoint.
- [x] Created a new GitHub repository and pushed the initial commit.
- [x] Prisma initialized and configured for PostgreSQL.
- [x] `Todo` model and `TodoStatus` enum defined in Prisma schema.
- [x] Database migration created and applied for `Todo` table.
- [x] `Todo` table initially seeded with 5 records.
- [x] `Doer` interface created (`src/models/doer.model.ts`).
- [x] `Doer` model added to Prisma schema.
- [x] One-to-many relationship (Doer-Todo) established in Prisma schema.
- [x] Database migration for `Doer` model and relationship applied.
- [x] Seed script updated to include `Doer`s and associate `Todo`s with `Doer`s.
- [x] Database re-seeded with `Doer`s and `Todo`s.
- [x] `Doer` CRUD service (`src/services/doerService.ts`) implemented and refactored to exclude `_count` from API responses.
- [x] `Doer` CRUD controller (`src/controllers/doerController.ts`) implemented.
- [x] `Doer` CRUD routes (`src/routes/doerRoutes.ts`) implemented and added to app.
- [x] `README.md` created with project information, setup, and API (including Doer routes with `curl` examples).
- [x] `Region` model, interface, controller, and routes implemented.
- [x] `prisma/schema.prisma` updated with `Region` model and its relationship to `Doer`.
- [x] Database migration for `Region` model applied.
- [x] `prisma/seed.ts` updated for clean seeding, including `Region` data and `Doer` to `Region` associations.
- [x] Database successfully seeded with `Region`, `Doer`, and `Todo` data.
- [x] Created `http-client` directory with `region.http`, `doer.http`, and `todo.http` files for VS Code REST Client.

## What's Left to Build

- [ ] Test Doer CRUD endpoints.
- [ ] Integrate Prisma Client into `todoService.ts` for database operations.
- [ ] Implement the `Todo` API using the database.
- [ ] Populate the memory bank files with more detailed information as the project evolves.


## Current Status

- [x] PostgreSQL Docker Compose file created.
- [x] Prisma schema and seed script created.
- [x] Created `Todo` interface.
- [x] Created `Doer` interface.
- [x] Implemented `Doer` CRUD functionality.
- [x] Created `README.md`.
- [x] Created `Region` interface.
- [x] Implemented `Region` CRUD functionality.
- [x] Updated `prisma/seed.ts` for robust seeding.
- [x] Updated activeContext.md with next steps.
- [x] Memory bank updated to reflect `README.md` creation and `doerService` refactor.
- [x] Memory bank updated to reflect `Doer` CRUD implementation.
- [x] Memory bank updated to reflect `Doer` model implementation.
- [x] Memory bank updated to reflect `Region` model implementation and seed script enhancements.
- [x] Memory bank updated to reflect creation of `.http` files for REST client.

## Known Issues

- [ ] None.

## Evolution of Project Decisions

- [x] The memory bank structure has been defined.
- [x] Models will be defined as interfaces unless complex logic or behavior is required.
- [x] Established a one-to-many relationship (Doer-Todo) in the database.
- [x] Established a one-to-many relationship (Region-Doer) in the database.
- [x] Enhanced `prisma/seed.ts` to ensure data is deleted in the correct order to prevent constraint violations and to include `Region` data.
