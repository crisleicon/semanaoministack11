const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
//informando ao express que no corpo da requisição será usado o formato json
app.use(express.json());

app.use(routes);

/**
 *  SQL: MySQL, SQLite, PostgreSQL, Oracle, MSQL, DB2
 *  NoSQL: MongoDB, CouchDB, etc
 *
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */

app.listen(3333);