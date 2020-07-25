const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const PORT = 3000;

app.use('/', express.static(path.join(__dirname, '..', 'public')));

app.use(bodyParser.json());

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}!`));
