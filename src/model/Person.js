const mongoose = require('mongoose');

//criando o schema do banco de dados 
const DbSchema = new mongoose.Schema({
    name: String,
    salary: Number,
    aproved: Boolean,
});

//criando o model como schema inserido
const DbModel = new mongoose.model('Person', DbSchema);

module.exports = DbModel; //exportando as funcionalidades do model