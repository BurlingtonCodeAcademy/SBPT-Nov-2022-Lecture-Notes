const router = require('express').Router();
const db = require('../helpers/db.json');
const fs = require('fs');
const fsPath = './helpers/db.json';

// GET All
router.get('/get-all', (req, res) => {
    try {
        
        // console.log(db);

        res.status(200).json({
            message: `Records obtained!`,
            results: db
        });

    } catch (err) {
        res.status(500).json({
            ERROR: `Error ${err.message}`
        });
    }
});

// GET one by ID
router.get('/:id', (req,res) => {

    try {
        let foundID = false;
        let result;
        const id = req.params.id;
        console.log(id);

        // let result = db.filter(i => i.id == id);
        db.every(record => {
            if(record.id == id) {
                result = record;
                foundID = true;
            }

            return foundID;
        })

        // if(result.length > 0) {
        //     res.status(200).json({
        //         status: `Found item at ID: ${id}`,
        //         result
        //     });
        // } else {
        //     res.status(404).json({
        //         message: `Record not found.`
        //     });
        // }

        foundID ? 
            res.status(200).json({
                status: `Found item at ID: ${id}`,
                result
            }) :
            res.status(404).json({
                message: `Record not found`
            })

    } catch (err) {
        res.status(500).json({
            ERROR: err.message
        })
    }

});

// GET All by Class
router.get('/class/:class', (req,res) => {
    
    try {
        
        const classType = req.params.class;

        let results = [];

        db.forEach(obj => {
            if(obj.classType.toLowerCase() == classType.toLowerCase()) {
                results.push(obj);
            }
        });

        results.length > 0 ?
            res.status(200).json({
                results
            }) : 
            res.status(404).json({
                message: `No ${classType} found`
            });

    } catch (err) {
        res.status(500).json({
            message: `Error: ${err.message}`
        });
    }
});

// POST one
router.post('/new-character', (req, res) => {
    
    try {
        
        const { name, classType, age, race, npc } = req.body;
    
        // const obj = {
        //     id: db.length + 1,
        //     name: name,
        //     classType: classType,
        //     age: age,
        //     race: race,
        //     npc: npc,
        //     level: 0
        // }

        const obj = {
            id: db.length + 1,
            name, 
            classType, 
            age, 
            race, 
            npc,
            level: 0
        }

        fs.readFile(fsPath, (err, data) => {
            // console.log('ERR: ', err);
            // console.log('Data: ', data.toString());

            if(err) throw err;

            const db = JSON.parse(data);
            db.push(obj);
            // console.log(db);

            fs.writeFile(fsPath, JSON.stringify(db), err => console.log(err));
            
        });


        res.status(200).json({
            message: `New Character Created!`,
            result: obj
        });

    } catch(err) {
        res.status(500).json({
            message: `Error: ${err.message}`
        })
    }

});

//! POST one w/ a unique ID considering what currently exists.

// PUT One by ID
router.put('/:id', (req, res) => {

    try {

        //1. Grab ID value
        const id = Number(req.params.id);

        //2. Consider what is the new data within the body
        const { name, classType, age, race, npc, level } = req.body;

        //3. Detail those updates (in an obj)
        const updatedObj = {
            id, name, classType, age, race, npc, level
        }

        //4. Locate our DB
        fs.readFile(fsPath, (err, data) => {
            if(err) throw err;

            const database = JSON.parse(data);
            
            //5. Locate our document & change it
            database.forEach((obj, i) => {
                if(obj.id === id) {
                    database[i] = updatedObj;
                }
            })

            //6. Update our DB
            fs.writeFile(fsPath, JSON.stringify(database), err => console.log(err));
        })


        res.status(200).json({
            message: `Character updated!`
        })
        
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }

});

//! PUT One by ID - update one item without altering the remainder of the document?

// DELETE by ID
router.delete('/:id', (req, res) => {

    try {
        
        //1. Find out what ID we need
        const id = Number(req.params.id);
        // console.log(typeof id);

        //2. Locate our Database
        fs.readFile(fsPath, (err, data) => {
            if(err) throw err;

            const db = JSON.parse(data);

            //3. Locate our document & Remove it
            const keptDocuments = db.filter(i => i.id !== id)
            // console.log('KEPT: ', keptDocuments);

            //4. Update db with current list
            fs.writeFile(fsPath, JSON.stringify(keptDocuments), err => console.log(err));

        });

        //5. Respond to the Client
        res.status(200).json({
            message: `Character has been deleted`
        })

    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
});

module.exports = router;