const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);

app.listen(3011, () => console.log('Server running on port 3011'));
