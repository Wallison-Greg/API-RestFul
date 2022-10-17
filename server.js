//connection string
require('dotenv').config();

//config inicial
const express = require('express');
const app = express();
const routes = require('./routes'); //importando as rotas
const mongoose = require('mongoose');

//conectando com o banco de dados 

mongoose.connect(process.env.CONNECT).then(()=> {
        console.log('conectado com sucesso');

        //porta de acesso
        app.listen(3000);

    }).catch((er)=> console.log(er));

// get Json / middlewares
app.use(express.urlencoded({extended: true})); //config leitura json
app.use(express.json());
app.use(routes); //utilizando as rotas 
