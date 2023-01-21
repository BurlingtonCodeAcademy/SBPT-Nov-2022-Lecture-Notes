const router = require('express').Router();
const db = require('../assets/db.json');
const fs = require('fs');
const fsPath = './assets/db.json';

router.get('/check', async(req, res) => {
    res.send('Got Endpoint hit!');
});

router.get('/all-from-database', async(req,res) => {
    try {

        res.status(200).json({
            message: `Records Obtained!`,
            results: db
        });

    } catch (err) {
        res.status(500).send({
            message: `Error: ${error}`
        });
    }
});

router.get('/:id', async(req,res) => {
    try {
        const id = req.params.id;
        
        let result = await db.filter(i => i.id == id);
        
        if(result.length > 0) {
            res.status(200).json({
                result
            });
        } else {
            res.status(404).json({
                message: `Record not found.`
            });
        }

    } catch (err) {
        res.status(500).send({
            message: `Error: ${err}`
        });
    }
});

router.post('/',  async(req, res) => {
    try {
        
        const title = req.body;
        const id = db.length + 1;

        const obj = {
            id: id,
            title: title.title,
        }

        fs.readFile(fsPath, (err, data) => {
            
            if(err) console.log(err);

            const db = JSON.parse(data);
            db.push(obj);

            fs.writeFile(fsPath, JSON.stringify(db), err => console.log(err));

            res.status(200).json({
                message: "Record Added!",
                obj
            });
        })


    } catch (err) {
        res.status(500).json({
            message: err.message,
        })
    }
});

router.put('/:id', async(req,res) => {
    try {
        
        const id = Number(req.params.id);

        const { title } = req.body;

        fs.readFile(fsPath, (err, data) => {

            if(err) console.log(data);

            const db = JSON.parse(data);
            // db = [ {"id:...."}]

            let updatedRecord;

            db.forEach((r,i) => {

                if(r.id === id) {
                    db[i] = {
                        id,
                        title
                    };

                    updatedRecord = db[i];
                    fs.writeFile(fsPath, JSON.stringify(db), err => console.log(err));
                }

            });

            updatedRecord ? 
                res.status(200).json({
                    status: `Record ${id} updated.`,
                    updatedRecord
                }) : 
                res.status(404).json({
                    status: `ID ${id} not in database.`
                });

        });

    } catch (err) {
        res.status(500).json({
            status: `Error: ${err.message}`
        });
    }
});

router.delete('/:id', async(req,res) => {
    try {
        
        const id = Number(req.params.id);

        fs.readFile(fsPath, (err, data) => {
            if(err) throw err;

            const db = JSON.parse(data);
            // console.log(db.length)
            const keptRecords = db.filter(i => i.id != id);
            console.log(keptRecords.length)
            // console.log(keptRecords);

            fs.writeFile(fsPath, JSON.stringify(keptRecords), err => console.log(err));

            if(keptRecords.length < db.length) {
                res.status(200).json({
                    status: "Successfully Deleted!"
                })
            } else {
                res.status(404).json({
                    status: "No Record Found"
                })
            }
        })

    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
});

module.exports = router;