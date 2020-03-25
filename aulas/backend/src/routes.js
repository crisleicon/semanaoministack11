const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.creaate);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;



/*
    Rota / Recursos

    Métodos HTTP:

    GET: Buscar/Listar uma informação do back-end
    POST: Criar uma informação no back-end
    GET: Buscar uma informação no back-end
    PUT: Alterar uma informação no back-end
    DELETE; Deletar uma informação no back-end

 * Tipos de parâmetros
 *
 * Query: Parâmetros nomeados e enviados na rota após "?" (Filters, paginação)
 * Route Params:  Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição utilizado para criar ou alterar recursos
 *
 */