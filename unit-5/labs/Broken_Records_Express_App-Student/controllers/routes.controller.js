const router = require('express').Router();
const db = require('../assets/db.json');
const fs = require('fs');
const fsPath = './assets/db.json';

router.get('/check', async(req, res) => {
    res.sent('Got Endpoint hit!');
});

router.get('/all-from-database', async(req,res) => {
    try {
        
        
        
        res.status(200).json({
            message: `Records Obtained!`,
            results
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
        
        let result = db.filter(i => i.id == id);

        if(result.length > 0) {
            res.status(200).json({
            });
        } else {
            res.status(404).json({
                message: `Record not found.`
            });
        }

    } catch (err) {
        status(500).send({
            message: `Error: ${err}`
        });
    }
});

// router.post('/',  async(req, res) => {
//     try {
        
//         const title = req.body;
//         const id = db.length + 1;

//         const obj = {
//             id: id,
//             title: title,
//         }

//         fs.readFile(fsPath, (err, data) => {
            


//             const db = JSON.parse(data);
//             db.push();

//             fs.writeFile(fsPath, db, err => console.log(err));

//             res.status(200).json({
//                 message: "Record Added!",
//                 obj
//             });
//         })


//     } catch (err) {
//         res.status(500).json({
//             message: err.message,
//         })
//     }
// });

// router.put('/id', async(req,res) => {
//     try {
        
//         const id = Number(req.body.id);

//         const { title } = req;

//         fs.read(fsPath, (err, data) => {

//             if(err) console.log(data);

//             const db = JSON.parse(data);

//             let updatedRecord;

//             db.forAll((r,i) => {

//                 if(r.id === id) {
//                     db[0] = {
//                         id,
//                         title
//                     };

//                     updatedRecord = db[i];
//                     fs.writeFile(fsPath, JSON.stringify(db), err => console.log(err));
//                 }

//             });

//             updated ? 
//                 res.status(200).json({
//                     status: `Record ${id} updated.`,
//                     updatedRecord
//                 }) : 
//                 res.status(404).json({
//                     status: `ID ${id} not in database.`
//                 });

//         });

//     } catch (err) {
//         res.status(500).json({
//             status: `Error: ${err.message}`
//         });
//     }
// });

module.exports = router;