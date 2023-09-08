const express = require('express');
const app = express();
const cors = require('cors');
const dbconneciton = require('./database');
const by_year = require('./schema/by_year');
const by_industry = require('./schema/by_industry');

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

app.get('/api/by_year', async (req, res) => {
    const data = await by_year.find({});
    res.json(data);
});

app.get('/api/by_industry', async (req, res) => {
    const data = await by_industry.find({});
    res.json(data);
});

