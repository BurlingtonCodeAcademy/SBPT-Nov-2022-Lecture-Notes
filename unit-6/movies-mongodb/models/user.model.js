const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    // columns for our document
    firstName: {
        type: String, // What data type this is expecting
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true // duplicate emails will throw an error response.
    },
    password: {
        type: String,
        required: true,
    },
    // passwordCheck: String
});

// Need to export our model
module.exports = mongoose.model('User', UserSchema);