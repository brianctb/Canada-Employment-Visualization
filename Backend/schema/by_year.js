const mongoose = require('mongoose');

const by_year = mongoose.model('by_year', {
    Sort_type: {
        type: String},
    Total_Employment: {
        type: Object},
    Hourly_wage: {
        type: Object},
    Weekly_wage: {
        type: Object},
    Unemployment_Rate: {
        type: Object}
}, "by_year");

module.exports = by_year;