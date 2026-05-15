# Week 3 — Backend & API Development

This project is a Node.js backend for a simple product management system. It demonstrates how to build REST API routes with Express and define a Mongoose schema for storing product data.

## Folder Structure

```
week_3/
├── package.json       # Project dependencies and module type
├── server.js          # Application entry point, database connection, and route setup
├── productAPI.js      # REST API routes for CRUD operations on products
└── productModel.js    # Mongoose schema and model definition for product data
```

## File Descriptions

- `server.js` — Creates the Express app, connects to MongoDB, and registers the product API router under `/product-api`.
- `productAPI.js` — Defines HTTP endpoints for creating, reading, updating, and deleting product records.
- `productModel.js` — Defines the product data model using Mongoose, including required fields and validation rules.
- `package.json` — Lists project dependencies such as Express and Mongoose, and sets the project type to ES modules.

## How to Run

1. Open a terminal in the `week_3` folder.
2. Install dependencies if needed:

```bash
npm install express mongoose
```

3. Start the server:

```bash
node server.js
```

4. The API should run on port `4000` by default.

## Dependencies

This project uses:

- `express` — A web framework for Node.js used to build the backend API.
- `mongoose` — An ODM (Object Data Modeling) library used to define the product schema and interact with MongoDB.

## Learning Outcomes

- Implement RESTful API endpoints for product management.
- Define and validate Mongoose schema fields.
- Perform CRUD operations with Express and Mongoose.
- Separate route handling from data model logic.
- Connect a Node.js application to a MongoDB database.
