const router = require('express').Router();
const { Vehicle, Task } = require('../models');
const { error, success, incomplete } = require('../helpers');

router.post('/:vehicle', async (req, res) => {
    try {
        
        //1. Obtain data from our user.
        const { title, date, details, resolved } = req.body;

        //2. Capture the ID from our parameter
        const { vehicle } = req.params;

        //3. Check if Vehicle exists and respond if not.
        const vehicleCheck = await Vehicle.find({_id: vehicle});
        if(!vehicleCheck) throw new Error('Vehicle not available');

        //4. Build task object that will be put into the collection.
            //a. What if a user doesn't provide a date? How can we assign it?
            //b. If the task isn't noted as resolved? Default to false?
            //c. Set the ID of the vehicle within the object.
        
        const task = new Task({
            title,
            date: date ? date : new Date(),
            details,
            resolved: resolved ? resolved : !resolved,
            vehicle_id: vehicle
        });

        //5. Save our task object to the database.
        const newTask = await task.save();

        //6. Structure how we may want to save our task object for the vehicle it is being assigned to.
        const forVehicle = {
            id: newTask._id,
            title: newTask.title,
            date: newTask.date
        }

        //7. Update our Vehicle tasks array so that it has our task.
        await Vehicle.findOneAndUpdate({_id: vehicle}, {$push: {tasks: forVehicle}});

        //8. Response to User
        newTask ?
            success(res, newTask) :
            incomplete(res);

    } catch (err) {
        error(res, err);
    }
})


module.exports = router;