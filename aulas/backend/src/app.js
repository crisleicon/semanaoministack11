const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors());
//informando ao express que no corpo da requisição será usado o formato json
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;