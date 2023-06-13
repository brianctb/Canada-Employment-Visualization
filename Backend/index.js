const express = require('express');
const app = express();
const cors = require('cors');
const dbconneciton = require('./database');
const test = require('./schema/test');

app.use(cors());

dbconneciton.then(() => {
    app.listen(3011, () => console.log('Server running on port 3011'))
}).catch((err) => {
    console.log(err);
    }
);

app.get('/api', async (req, res) => {
    const data = await test.find({});
    res.json(data);
});

