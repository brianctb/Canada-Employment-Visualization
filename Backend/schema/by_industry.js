const mongoose = require('mongoose');

const by_industry = mongoose.model('by_industry', {
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
}, "by_industry");

module.exports = by_industry;