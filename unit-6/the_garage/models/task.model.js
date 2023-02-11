const mongoose = require('mongoose');

const Task = new mongoose.Schema({
    title: String,
    date: Date,
    details: String,
    resolved: Boolean,
    vehicle_id: {
        type: mongoose.Types.ObjectId,
        ref: "Vehicle"
    }
});

module.exports = mongoose.model('Task', Task);