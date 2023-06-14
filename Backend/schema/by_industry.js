const mongoose = require('mongoose');

const by_industry = mongoose.model('by_industry', {
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
}, "by_industry");

module.exports = by_industry;