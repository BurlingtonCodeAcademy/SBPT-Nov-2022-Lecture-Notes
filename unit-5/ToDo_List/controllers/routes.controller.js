const router = require('express').Router();
const db = require('../helpers/db.json');
const fs = require('fs'); // library pulled from Node. Allows us to manipulate files.

/* 
    syntax:
        URL - /:id
            - denotes a parameter value. Endpoint is expecting a reference value.

    Example URL    
        - localhost:4000/routes/1
        
    - "1" would reference a parameter or flexible string.
        - This could be a name of somethign or anything that we want.
        - depending on how the logic is built.

*/

router.get('/:id', (req, res) => {
    // console.log(req.url);
    // console.log(req.params); // details an object with a key of "id" (param name) & the value within the URL
    // console.log(req.params.id);

    /* 
        - used to help us locate one item in our database
        - ID typically has a unique value to help us find that ONE item
        - Can help us search several items.
    */

    try {
        
        let { id } = req.params;
        let results = db.filter(i => i.id == id);
        // console.log(results);
        // console.log(potato) // for testing the break
        res.status(200).json({
            status: `Found item at id: ${id}`,
            results
        })

    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
});

/* 
    - Make a GET route
        - no endpoint is required to access. 
        - It will "Get All" base off /routes.
            - note: where is "/routes" coming from?
*/
router.get('/', (req, res) => {
    //ex: localhost:4000/routes/

    try {
        res.status(200).json({
            results: db
        })
    
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
});


router.post('/', (req, res) => {
    try {
        
        const toDoItem = req.body;
        // console.log(toDoItem);

        fs.readFile('./helpers/db.json', (err, data) => {
            // 1. The path need to be relative to where fs is located (node_modules), NOT from the controllers location.

            if(err) throw err; // conditional to deal with any error it comes across.

            const db = JSON.parse(data); // parses the JSON file and provides an array of our objects back so we can manipulate it.
            // console.log(db);

            db.push(toDoItem); // adding our new item to our array.

            fs.writeFile('./helpers/db.json', JSON.stringify(db), err => console.log(err));

            /* 
                - Requires
                    - route to original file (same pathway as readfile)
                    - what needs ot be included or written
                        - We are making our array BACK into a JSON format and stringify-ing it.
                    - Callback function to handle errors.
            */

            res.status(200).json({
                status: "New Item Created!",
                toDoItem
            });

        })

    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
});

/* 
    - pass ID value as a param
    - iterate through options
    - check if id matches param
    - reassign the db at the index to what come from body.
    - save file

    * stretch goal: update just the data without modifying the ID
*/

router.put('/:id', (req, res) => {

    // console.log(req.params.id);
    try {
        
        let request = Number(req.params.id);
        // console.log(typeof request);

        let todo = req.body;
        // console.log(todo);

        fs.readFile('./helpers/db.json', (err, data) => {
            if(err) throw err;

            // console.log(data.toString());
            const database = JSON.parse(data);
            // console.log(database instanceof Array);

            let result;

            database.forEach((obj, i) => {
                // console.log(obj.id, i);

                if(obj.id === request) {
                    database[i] = todo;
                    result = todo;
                }

            });
            
            fs.writeFile('./helpers/db.json', JSON.stringify(database), err => console.log(err));

            result ? 
                res.status(200).json({
                    object: result
                }) :
                res.status(404).json({ status: `ID: ${request} not found`});
        })

    } catch (err) {
        res.status(500).json({
            status: `Error: ${err.message}`
        })
    }

})

/* 
    - pass ID as a param
    - read file
    - filter to match the param value
        - return what doesn't match
    - write to file

    *HINT: You may get stuck with your params not matching what's inside your id. Check your data type.
*/

router.delete('/:id', (req, res) => {

    try {
        
        const request = Number(req.params.id);

        fs.readFile('./helpers/db.json', (err, data) => {
            if(err) throw err;

            const db = JSON.parse(data);
            let result = []
            // console.log('Before ForEach: ', db);
            db.forEach((obj, i) => {
                if(obj.id !== request) {
                    result.push(db[i]);
                }
            });
            // console.log('After: ', db);
            // console.log(result);

            fs.writeFile('./helpers/db.json', JSON.stringify(result), err => console.log(err));

            result.length > 0 ? 
                res.status(200).json({
                    object: result
                }) :
                res.status(404).json({
                    message: `ID: ${request} not found.`
                })
        })

    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
    

});

module.exports = router;