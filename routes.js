const express = require('express');
const route = express.Router();
const principal = require('./src/controller/rotas');

route.get('/', principal.hm);
route.post('/person', principal.prs);
route.get('/user', principal.usuarios);
route.get('/user/:id', principal.ids);
route.patch('/user/update/:id', principal.upd);
route.delete('/user/delete/:id', principal.delet);

module.exports = route;