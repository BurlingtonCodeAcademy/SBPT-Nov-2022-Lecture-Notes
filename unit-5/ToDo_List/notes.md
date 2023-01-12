# Getting Started
- create a `package.json`
  - In terminal ~ cli command: `npm init -y`
- Install our dependencies
  - express: `npm i express`
- Create a `.gitignore` file
  - `/node_modules` within .gitignore
    - tells our local repository to ignore the `node_modules` folder when backing up.
- node_modules folder
  - Provides us access to any "behind the scense" code that helps run express and any other dependency.
- package-lock.json
  - locks project into required dependencies. Helps with our versioning.
  - updated our `package.json` with `"main": "app.js"` instead of `index.js`.
- Create a root JS file
  - `index.js` or `app.js`

# CRUD
- Create: POST
- Read: GET
- Update: PUT / PATCH
- Delete: DELETE

## Postman
- Set Methods
  - GET / POST / PUT / DELETE on routes
  - Body
    - raw
    - JSON
      - Make a JSON object

## Preparing our server to handle JSON objects
In our `app.js` we need to have this line of code:
```js
app.use(express.json());
```
This provides us access to JSON files throughout our routes.

## MVC
- Model View Controller
- Architecture pattern thathelps our Separation of Concerns
- View:
  - Browser, Postman, etc...
  - Application that interface with the server.
- Controller: 
  - Part of the server application which handle logic.
- Model:
  - Database schematic

## Middleware
- A function that accesses the request and response
- Has a call stack:
  - Request
  - Response
  - Next
