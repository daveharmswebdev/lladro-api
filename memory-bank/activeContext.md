# Active Context

## Current Work Focus

- [x] Created `README.md` with project information and curl commands for Doer routes.
- [x] Refactored `doerService.ts` to ensure `_count` attribute is not returned in API responses.
- [x] Implemented `Doer` CRUD functionality (service, controller, routes).
- [x] Implemented `Doer` model and its relationship with `Todo`.
- [x] Updated database schema and seeded data.
- [ ] Updating the memory bank.

## Recent Changes

- [x] Created `README.md` with project overview, setup instructions, and API endpoint documentation including `curl` examples for Doer routes.
- [x] Refactored `src/services/doerService.ts` to exclude internal `_count` property from JSON responses, returning only `todoCount`.
- [x] Created new git branch `doer-crud`.
- [x] Created `src/services/doerService.ts` for Doer business logic.
- [x] Created `src/controllers/doerController.ts` to handle Doer HTTP requests.
- [x] Created `src/routes/doerRoutes.ts` to define Doer API endpoints.
- [x] Updated `src/app.ts` to include Doer routes.
- [x] Created new git branch `doer-initialize`.
- [x] Created `Doer` interface (`src/models/doer.model.ts`).
- [x] Added `Doer` model to `prisma/schema.prisma`.
- [x] Established one-to-many relationship between `Doer` and `Todo` in `prisma/schema.prisma`.
- [x] Created and applied database migration for `Doer` and `Todo` relationship.
- [x] Updated `prisma/seed.ts` to include `Doer`s and associate them with `Todo`s.
- [x] Re-seeded the database.
- [x] Created `docker-compose.yml` for PostgreSQL.
- [x] Initialized Prisma, defined initial `Todo` schema, created migrations, and seeded initial data.
- [x] Refactored the tsconfig.json file.
- [x] Added Jest to the .clinerules/techstack.md file.
- [x] Refactored the package.json file to add scripts for dev, build, test, and start.
- [x] Added an appropriate .gitignore file for this project.
- [x] Modified the API to use an index.ts and app.ts.
- [x] Implemented JSON for the hello world endpoint.
- [x] Created a new GitHub repository and pushed the initial commit.
- [x] Committed and pushed changes related to Prisma setup, PostgreSQL configuration, and initial Todo data seeding.

## Next Steps

- [ ] Test Doer CRUD endpoints using `curl` commands from `README.md`.
- [ ] Integrate Prisma Client into `todoService.ts` for database operations.
- [ ] Implement the `Todo` API using the database.
- [ ] Continue implementing the API.
- [x] Update memory bank to reflect `README.md` creation and `doerService` refactor.
- [x] Update memory bank to reflect `Doer` CRUD implementation.
- [x] Update memory bank to reflect `Doer` model implementation.

## Active Decisions and Considerations

- [ ] How to best structure the memory bank for easy access and understanding.

## Important Patterns and Preferences

- [ ] Follow the structure outlined in the project documentation.

## Learnings and Project Insights

- [ ] The memory bank is crucial for maintaining context across sessions.
- [ ] Models should be defined as interfaces unless complex logic or behavior is required.
- [x] Created a `Todo` interface with `id`, `name`, `description`, and `status` fields. The `status` field is a `TodoStatus` enum with values `New`, `InProgress`, `Complete`, and `Abandoned`.
- [x] Created a `Doer` interface with `id`, `firstName`, and `lastName` fields.
- [x] Established a one-to-many relationship in Prisma: one `Doer` can have many `Todo`s, and one `Todo` belongs to one `Doer`.
