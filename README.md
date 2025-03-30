# Prisma PostgreSQL Project

This project demonstrates how to use Prisma with a PostgreSQL database hosted on Neon. It includes a basic setup for defining and creating tables in the database.

## Project Structure

```
prisma-postgres-project
├── prisma
│   ├── schema.prisma      # Defines the Prisma schema for the database
├── src
│   ├── index.ts           # Entry point of the application
│   └── db
│       └── client.ts      # Exports the Prisma client instance
├── package.json            # npm configuration file
├── tsconfig.json           # TypeScript configuration file
└── README.md               # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd prisma-postgres-project
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up the PostgreSQL database:**
   - Create a PostgreSQL database on Neon and obtain the connection URL.
   - Update the `DATABASE_URL` in the `.env` file (create this file if it doesn't exist) with your connection string.

4. **Run Prisma Migrate:**
   ```bash
   npx prisma migrate dev --name init
   ```

5. **Start the application:**
   ```bash
   npm run start
   ```

## Usage Examples

- You can interact with the database through the `src/index.ts` file, where you can add logic to create, read, update, or delete records.

## License

This project is licensed under the MIT License.