const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: { type: String, require: true, minlength: 3, maxlength: 50},
    email: { type: String, require: true, minlength: 3, maxlength: 100},
    password: { type: String, require: true, minlength: 6, maxlength: 200},
    createdAt: { type: Date, default: Date.now},
});

module.exports = mongoose.model('User', userSchema);