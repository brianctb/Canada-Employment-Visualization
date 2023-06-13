const mongoose = require('mongoose');

const test = mongoose.model('Test', {
    name: {
        type: String,},
    age: {
        type: Number,},
    email: {
        type: String,}
}, "test");

module.exports = test;