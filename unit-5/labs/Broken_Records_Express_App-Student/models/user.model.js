//* This whole file is for Unit 6 Challenge
const mongoose;

const User = new mongoose.Schema({
    userName = {
        type: String,
        required: true,
        unique: true
    },
    email = {
        type: String,
        required: true
    },
    password = {
        type: String,
        required: true
    }
});

module.export = mongoose.model('User', User);