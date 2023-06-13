const express = require('express');
const app = express();
const db = require('./database');

app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);

db.then(() => {
    app.listen(3011, () => console.log('Server running on port 3011'))
}).catch((err) => {
    console.log(err);
    }
);
