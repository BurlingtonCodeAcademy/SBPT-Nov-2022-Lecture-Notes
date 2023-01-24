const router = require('express').Router();
const db = require('../helpers/db.json');

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
    
    const { name, classType, age, race, npc } = req.body;

    const obj = {
        id: db.length + 1,
        name: name,
        classType: classType,
        age: age,
        race: race,
        npc: npc,
        level: 0
    }

    try {

        db.push(obj);
        //TODO: Adding character BUT not to our db.json

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

// PUT One by ID

// DELETE by ID

module.exports = router;