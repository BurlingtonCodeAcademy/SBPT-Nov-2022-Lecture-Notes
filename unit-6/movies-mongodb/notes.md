# Traditional Database

Database:
- Types:
  - Relational
    - SQL, PostgreSql, MySQL
  - Non-Relational
    - MongoDB, Apache Cassandra, Couchbase
- Collection of tables or documents
- Tables:
  - Primary Keys (ID)
  - Records: Data within rows of a table
- Mongo:
    Mongo = Relational
  - Database = database
  - Collections = Table
  - Documents = Records
    - stored as JSON
  - Is a **Document Data Store**

# MERN Stack
- M: Mongo
  - Database
- E: Express
  - Server
- R: React
  - Frontend
- N: Node
  - everything in between

# Express
- Need a `package.json` file
  - run our `npm init` or `npm init -y`
- Install Dependencies:
  - Express: `npm i express`
  - Monogoose: `npm i mongoose` 
    - package that connects to MongoDB
    - [Mongoose](https://www.npmjs.com/package//mongoose)
  - dotenv: `npm i dotenv`
  - **Note**:
    - We can install multiple dependencies at once.
    - ex: `npm i express mongoose dotenv`
  - Check Entry Point
    - `app.js` or `index.js`
  - `.gitignore`
    - set files/folders within it.

# .env
- Contains constants that are specific for our environment.
- Stores items that we don't want published
  - passwords, port numbers / deployment routes, API Keys
- Should be added to `.gitignore`
- Should have a sample version to communication with team.
  - `example.env`

# app.js
- Boilerplate connection:

```js
require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4001;


app.listen(PORT, () => console.log(`Movie Server Running on Port: ${PORT}`));
```

# MongoDB & Mongoose
- Need to connect to our database
  - Using **MongoDB Compass**
  - Stateful connection

```js
const mongoose = require('mongoose');
const DBURL = process.env.DBURL;

mongoose.connect(`${DBURL}/moviedb`);

const db = mongoose.connection;

db.once("open", () => console.log(`Connected: ${DBURL}`));
```

# Models
- Define what our database collection will look like.
  - A schema for each object being created.
  - `mongoose` establishes our schema.

Example:
```js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('User', UserSchema);
```