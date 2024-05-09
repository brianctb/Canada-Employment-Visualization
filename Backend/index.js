const express = require('express');
const app = express();
const cors = require('cors');
const dbconneciton = require('./database');
const by_year = require('./schema/by_year');
const by_industry = require('./schema/by_industry');
const employment_data = require('./schema/employment_data')

app.use(cors());

dbconneciton.then(() => {
    app.listen(3011, () => console.log('Server running on port 3011'))
}).catch((err) => {
    console.log(err);
}
);

app.get('/', async (req, res) => {
    res.send("hello world");
});

app.get('/api/years', async (req, res) => {
    employment_data.distinct('year').then(years => {
        res.json(years)
    })
})

app.get(`/api/years/:year`, async (req, res) => {
    const year = req.params.year
    try {
        const data = await employment_data.find({ 'year': year })
        res.json(data)
    } catch (err) {
        res.status(500).json({ message: 'Internal Server Error' })
    }
})

app.get('/api/industries', async (req, res) => {
    employment_data.distinct('industry').then(industries => {
        res.json(industries)
    })
})

app.get('/api/industries/:industry', async (req, res) => {
    const industry = req.params.industry
    try {
        const data = await employment_data.find({ 'industry': industry })
        res.json(data)
    } catch (err) {
        res.status(500).json({ message: 'Internal Server Error' })
    }
})

app.get('/api/by_year', async (req, res) => {
    const data = await by_year.find({});
    res.json(data);
});

app.get('/api/by_industry', async (req, res) => {
    const data = await by_industry.find({});
    res.json(data);
});

