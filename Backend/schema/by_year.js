const mongoose = require('mongoose');

const by_year = mongoose.model('by_year', {
    Sort_type: {
        type: String},
    Total_Employment: {
        type: Array},
    Hourly_wage: {
        type: Array},
    Weekly_wage: {
        type: Array},
    Unemployment_Rate: {
        type: Array}
}, "by_year");

module.exports = by_year;