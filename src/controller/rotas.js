const DbModel = require("../model/Person");

exports.hm = (req, res) => {
    res.json({message: 'teste 1'});
}

exports.prs = async (req, res) => {

    const {name, salary, aproved} = req.body; //pegando os valores do body

    //validando os valores 

    if(!name){
        res.status(422).json({error: 'o nome e obrigatorio'});
        return
    }
    if(!salary){
        res.status(422).json({error: 'o salario e obrigatorio'});
        return
    }

    const person = { //indexando os valores em variaveis para serem enviados ao banco de dados 
        name, 
        salary, 
        aproved,
    }

    //alimentando o banco de dados 

    try {
        await DbModel.create(person);
        res.status(201).json({message: 'usuario cadastrado com sucesso'});
    } catch (error) {
        res.status(500).json({error: error});
    }
}

    //trazendo os valores do db

exports.usuarios = async (req, res) => {
    try {
        const people = await DbModel.find();
        res.status(200).json(people);
    } catch (error) {
        res.status(500).json({error: error});
    }
}

    //filtrando os valores por id

exports.ids = async (req, res) => {
    const id = req.params.id;
    try {
        const person = await DbModel.findOne({_id: id});

        if(!person){
            res.status(422).json({messge: 'Usuario não detectado'});
            return
        }

        res.status(200).json(person);
    } catch (error) {
        res.status(500).json({error: error});
    }
}

        //update

exports.upd = async (req, res) =>{
    const id = req.params.id;
    const {name, salary, aproved} = req.body;

    const person = {  
        name, 
        salary, 
        aproved,
    }

    try {
        
        const upPerson = await DbModel.updateOne({_id: id}, person);

        if(upPerson.matchedCount === 0){
            res.status(422).json({message: 'usuario não encontrado'});
        }

        res.status(200).json(person);

    } catch (error) {
        res.status(500).json({error: error});
    }
}

        //delete
    
exports.delet = async (req, res) => {
    const id = req.params.id;

    const person = await DbModel.findOne({_id: id});

    if(!person){
        res.status(422).json({messge: 'Usuario não detectado'});
        return
    }

    try {
        
        await DbModel.deleteOne({_id: id});
        res.status(200).json({message: "usuario removido com sucesso"})
    } catch (error) {
        res.status(500).json({error: error});
    }

}