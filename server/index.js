/* eslint-disable no-console */
const express = require('express');
const path = require('path');

const app = express();

const PORT = 8000;

app.use('/', express.static(path.join(__dirname, '..', 'public')));

app.use(express.json());

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}!`));
