const express = require('express');
const app = express();
const dbconneciton = require('./database');
const test = require('./schema/test');


dbconneciton.then(() => {
    app.listen(3011, () => console.log('Server running on port 3011'))
}).catch((err) => {
    console.log(err);
    }
);

app.get('/', async (req, res) => {
    const data = await test.find({});
    console.log(data);
    console.log(typeof data[0]);
    console.log(data[0].name);
    res.send(`${data[0].name} ${data[0].age} ${data[0].email}`);
});

