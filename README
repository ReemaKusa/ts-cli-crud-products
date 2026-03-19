# Products CLI (TypeScript CRUD)

## Overview

This is a simple CLI application built using TypeScript, Sequelize ORM, and PostgreSQL.

The application allows the user to perform CRUD operations (Create, Read, Update, Delete) on a products table directly from the terminal.

---

## Features

* Add new products
* List all products
* Get product by ID
* Update product
* Delete product

---

## Technologies Used

* TypeScript
* Node.js
* Sequelize ORM
* PostgreSQL
* Commander (for CLI commands)
* dotenv (for environment variables)

---

## Project Structure

```
src/
 ├── config/        # database connection
 ├── models/        # Sequelize models
 ├── commands/      # CLI logic
 └── index.ts       # entry point
```

---

## Database Schema

Table: **products**

* id (auto-increment, primary key)
* name (string, required)
* price (float, required)
* description (optional)

---

## Setup Instructions

1. Clone the repository

```
git clone <repo-link>
```

2. Install dependencies

```
npm install
```

3. Create `.env` file:

```
DB_NAME=products_db
DB_USER=postgres
DB_PASSWORD=1234
DB_HOST=localhost
DB_PORT=5432
```

4. Make sure PostgreSQL is running and create database:

```
products_db
```

5. Run the project:

```
npm start -- list
```

---

## CLI Commands

Add product:

```
npm start -- add "Laptop" 1000 "Gaming laptop"
```

List products:

```
npm start -- list
```

Get product:

```
npm start -- get 1
```

Update product:

```
npm start -- update 1 "Updated Laptop" 1200
```

Delete product:

```
npm start -- delete 1
```

---

## Notes

* Sequelize is used to handle database operations instead of raw SQL.
* The table is created automatically using `sequelize.sync()`.
* The project follows a simple modular structure.
