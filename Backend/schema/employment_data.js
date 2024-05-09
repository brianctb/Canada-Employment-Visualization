const mongoose = require('mongoose');

const employment_data = mongoose.model("employment_data", {
    industry: { type: String },
    year: { type: String },
    hourly_wage: { type: Number },
    weekly_wage: { type: Number },
    unemployment_rate: { type: Number },
    total_employment: { type: Number }
}, "all_data")

module.exports = employment_data