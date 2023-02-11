const router = require('express').Router();
const { Vehicle } = require('../models');
const { error, success, incomplete } = require('../helpers');

//! CREATE 
router.post('/', async (req, res) => {
    try {
        
        const { make, model, year, color } = req.body;

        if(!make) throw new Error('Please input a vehicle make.');

        const vehicle = new Vehicle({
            make, model, year, color
        });

        const newVehicle = await vehicle.save();

        newVehicle ?
            success(res, newVehicle) :
            incomplete(res);

    } catch (err) {
        error(res, err);
    }

})

//! GET ALL
/* 
! Challenge
    - Create a GET route that retrieves all vehciles in our vehicle collection.
        - May need to create a few more vehicles for testing.
    - Must be in a try/catch
    - Utilize the helper functions imported to handle the responses.
*/

router.get('/', async (req, res) => {
    try {
        
        const vehciles = await Vehicle.find();

        vehciles ?
            success(res,vehciles) :
            incomplete(res);

    } catch (err) {
        error(res,err);
    }
});


module.exports = router;