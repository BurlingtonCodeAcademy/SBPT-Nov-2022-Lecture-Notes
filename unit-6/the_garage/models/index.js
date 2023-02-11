const Vehicle = require('./vehicle.model');
const Task = require('./task.model');

module.exports = {
    Vehicle: Vehicle,
    Task: Task
}

/* 
    - Exporting a simple object that reference each model based off a key within it.
    - Can be destructured when importing.
    - Easier to import into other file especially when several are needed at a time.
*/