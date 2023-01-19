# Student Instructions

This debug challenge is to provide practice in finding all the break points of a functioning express application. This is meant to tested through **Postman** and should result in either updating the local json file associated with the mock database or updating documents within [MongoDB](https://www.mongodb.com/).

This challenge is broken into two parts, **Unit 5** and **Unit 6**. Upon cloning this repo, the sections required to help run Unit 6 have been commented out and noted. When you are ready to work through that portion of the debug session, simply uncomment out what is currently there and start testing.

## To Start
- `npm install` all the dependencies.
  - Some dependencies are used for both Unit 5 and Unit 6.
- `example.env` details all the environmental variables required in order to make the application run.
  - Unless you have specifically noted a different pathway for your connection to **mongodb**, you will not need to change the settings here; however, you will need to include it within your `.env` file. This will not be reflected until the Unit 6 portion of this project.
- `nodemon` or `npm start` to run the server.

## Where there are NO errors:
- `package.json` & `package-lock.json`
- `.gitignore`
- `example.env`
- `db.json`
---
## Unit 5 Challenge

Once all the available routes are functioning and no errors are being thrown, you will have completed this challenge.

### Endpoints for Postman
**Base Endpoint**
- `localhost:PORT/broken-app-challenge`

**Route Endpoints**
- `/check`
- `/all-from-database`
- `/[parameter of an id]`
  - *hint ~ we need to use a variable denoted by a [:]*

### Associated Files:
- `app.js`
- `routes.controller.js`
- `.env`
- `db.json`

### Stretch Goal
1. Add a route to delete a record within `db.json`.

---
## Unit 6 Challenge
Although you will need to be sure that **Compass** is running along with your server, once it does run, the application should automatically generate a collection for you. 

You will **not** need to create a collection or any documents within the GUI at any point.

All testing is done through **Postman**.

Be sure to first **uncomment** all lines noted as "Unit 6" within `app.js` prior to debugging.

*Note:*
  - Within `app.js`, the line `mongoose.set('strictQuery', true);` does not have any issues with this.

### Associated Files:
- `app.js`
- `user.controller.js`
- `user.model.js`
- `.env`

### Stretch Goals
1. Build an update route so that users can change their password.
2. Create a route that allows a user to delete themselves from the database.

## Hints:
There are a total of **34** of breaks between both Unit 5 & Unit 6 challenges.
  - Unit 5: 17
  - Unit 6: 17
