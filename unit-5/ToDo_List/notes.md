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

