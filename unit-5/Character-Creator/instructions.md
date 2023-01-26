# Instructors
## Concept

This is an in-class build where we are creating a quick server that covers the CRUD funcitonality. 

# Server Requirements

## JSON Model
```json
{
    "id": 0,
    "name": "String",
    "classType": "String",
    "age": 00,
    "race": "String",
    "npc": false,
    "level": 00
}
```
## Dependencies
- `express`
- `dotenv`

## Endpoints
- base: `localhost:[PORT#]`
- character controller: `/characters`
- route endpoints determined by method and outcome.

## Routes
- GET One by ID
- GET All
- GET All by class
- POST One
- PUT One by ID
- DELETE by ID

---

## Task List

| Status | Task | Process |
| --- | --- | --- |
|X | Initialize Project | `npm init -y` |
|X | Install Dependencies | `npm i express` & `npm i dotenv` / `npm i express dotenv` |
| X | Install Dev Dependencies | `npm install --save-dev nodemon` |
| X | Establish Entry Point | `app.js` or `index.js`|
| X | Create Environmental File | `touch .env`|
| X | Create Sample Environmental File | `touch example.env` |
| X | Create gitignore file | `touch .gitignore` |
| X | Set gitignore | `.env` & `/node_modules` |
| X | Connect to PORT / Test |`app.listen()` |
|X | Create Helpers Folder | `mkdir helpers`|
|X | Create db.json file | `touch db.json` |
|X | Est. first Entry | created entry in JSON |
| X | Create Controller Folder | `mkdir controllers`  |
|X | Create controller file | `touch character.controller.js` |
|X | Connect Controller | `module.exports = router` |
|X | Establish Routes | comments in file |
| X| Build GET All | import db.json |
|X | Test Route | postman |
|X | Build GET One | `filter()` / `every()` |
|X | Test Route | postman |
|X| Build GET All by Class | `forEach()` / `filter()` |
|X | Consider conditions | `toLowerCase()` |
|X | Test Route | postman |
| X| Build POST One | `readFile()` & `writeFile()`  |
|X | Test Route | postman |
|X | Build PUT One by ID | `forEach((obj,id) => {})` |
| X| Test Route | postman |
|X | Build DELETE One by ID | `filter(i => i.id !== id)`|
| X| Test Route | postman |

## Stretch Goals
| Stretch Goals | Status |
| --- | --- |
| `POST` - What if a character ID already exists? | Solution Provide |
| `PUT` - What if one key is changed in a character? | Solution Provided |

### POST
- Consider how and when do we obtain our DB ids.
- How can we hold on to the current values?
  - Consider reviewing `Math` methods and `spread`.
  - `IF` the established generated ID already exists (`includes`), consider the greatest value and reset the ID based off that.

### PUT
- What key is being passed?
  - Review current values within the DB.
  - Consider how you can cycle through each key and respond depending on what's being passed.
    - If key matches - replace value / if not - keep value.
- What if the there isn't a character to change?
  - How do we handle the `404`

---