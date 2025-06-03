# Lladro API

This is a sample API project demonstrating a Todo and Doer management system. It is built with Node.js, Express, TypeScript, and Prisma ORM with a PostgreSQL database.

## Project Structure

-   `src/`: Contains the source code for the API.
    -   `controllers/`: Handles incoming requests and sends responses.
    -   `models/`: Defines data structures (interfaces).
    -   `routes/`: Defines API routes.
    -   `services/`: Contains business logic and interacts with the database.
    -   `app.ts`: Express application setup.
    -   `index.ts`: Entry point of the application.
-   `prisma/`: Contains Prisma schema, migrations, and seed script.
    -   `schema.prisma`: Defines database models and relations.
    -   `migrations/`: Database migration files.
    -   `seed.ts`: Script to populate the database with initial data.
-   `memory-bank/`: Contains documentation about the project's context and progress, maintained by Cline.
-   `.clinerules/`: Contains user-defined rules and preferences for Cline.
-   `docker-compose.yml`: Defines the PostgreSQL database service.
-   `package.json`: Project metadata and dependencies.
-   `tsconfig.json`: TypeScript compiler options.

## Prerequisites

-   Node.js (v18 or later recommended)
-   npm or yarn
-   Docker and Docker Compose

## Getting Started

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd lladro-api
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    # yarn install
    ```

3.  **Set up the database:**
    Start the PostgreSQL database using Docker Compose:
    ```bash
    docker-compose up -d
    ```
    This will start a PostgreSQL instance on port 5432.

4.  **Apply database migrations:**
    Prisma Migrate will create the database schema based on `prisma/schema.prisma`.
    ```bash
    npx prisma migrate dev --name init
    ```
    *(If you already have migrations, you might just run `npx prisma migrate deploy` or `npx prisma db push` for development)*

5.  **Seed the database (optional but recommended):**
    Populate the database with initial data.
    ```bash
    npx prisma db seed
    ```

6.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The API will be running on `http://localhost:3000` (or the port specified in `.env` or `src/index.ts`).

## API Endpoints

The API base URL is `http://localhost:3000`.

### Hello Route

-   **GET `/hello`**
    -   Description: Returns a simple hello world message.
    -   Example:
        ```bash
        curl http://localhost:3000/hello
        ```

### Todo Routes

*(Assuming these exist or will be added, based on project structure)*
-   **GET `/todos`**: Get all todos.
-   **GET `/todos/:id`**: Get a todo by ID.
-   **POST `/todos`**: Create a new todo.
-   **PUT `/todos/:id`**: Update a todo.
-   **DELETE `/todos/:id`**: Delete a todo.

### Doer Routes

These routes manage "Doers" (users or entities responsible for todos).

-   **GET `/doers` - Get all doers**
    -   Description: Retrieves a list of all doers, including a count of their associated todos.
    -   Curl:
        ```bash
        curl http://localhost:3000/doers
        ```

-   **GET `/doers/:id` - Get a specific doer by ID**
    -   Description: Retrieves a specific doer by their ID, including a count of their associated todos. Replace `:id` with the actual ID (e.g., 1).
    -   Curl:
        ```bash
        curl http://localhost:3000/doers/1
        ```

-   **GET `/doers/:id/todos` - Get a doer and all their todos**
    -   Description: Retrieves a specific doer by their ID, along with a full list of their associated todo objects. Replace `:id` with the actual ID.
    -   Curl:
        ```bash
        curl http://localhost:3000/doers/1/todos
        ```

-   **POST `/doers` - Create a new doer**
    -   Description: Creates a new doer.
    -   Request Body: JSON object with `firstName` and `lastName`.
    -   Curl:
        ```bash
        curl -X POST -H "Content-Type: application/json" \
        -d '{ "firstName": "Jane", "lastName": "Doe" }' \
        http://localhost:3000/doers
        ```

-   **PUT `/doers/:id` - Update an existing doer**
    -   Description: Updates an existing doer's information. Replace `:id` with the actual ID.
    -   Request Body: JSON object with fields to update (e.g., `firstName`, `lastName`).
    -   Curl (example updating firstName):
        ```bash
        curl -X PUT -H "Content-Type: application/json" \
        -d '{ "firstName": "Janet" }' \
        http://localhost:3000/doers/1
        ```

-   **DELETE `/doers/:id` - Delete a doer**
    -   Description: Deletes a doer and their associated todos. Replace `:id` with the actual ID.
    -   Curl:
        ```bash
        curl -X DELETE http://localhost:3000/doers/1
        ```

## Running Tests

*(Assuming Jest is set up as per .clinerules/techstack.md)*
```bash
npm test
```

## Building for Production
```bash
npm run build
```
This will create a `dist` folder with the compiled JavaScript.

## Starting in Production
```bash
npm start
```
This will run the compiled code from the `dist` folder.
