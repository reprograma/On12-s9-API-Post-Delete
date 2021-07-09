const contatosJson = require("../models/contatos.json");

const getAll = (request, response) => {
    response.status(200).send (contatosJson);
}

const getById = (request, response) => {
    const idRequerido = request.params.id 
    const contatoFiltrado = contatosJson.find(contatos => contatos.id == idRequerido);
    if(contatoFiltrado == "," || contatoFiltrado == undefined){
        response.status(404).send(
         [
            {
                "mensagem": "That's an error. 🤖"
            }
         ]
      )
    }else{
        response.status(200).send(contatoFiltrado);
    }
}

const getByName = (request,response) => {
    const nomeRequerido = request.query.nome.toLowerCase(); 
    const nomeFiltrado = contatosJson.find(contatos => contatos.nome.toLowerCase().includes(nomeRequerido));

    response.status(200).send(nomeFiltrado);
}

const createContact = (request,response)=> {

    const nomeRequest = request.body.nome;
    const celularRequest = request.body.celular;
    const redeSocialRequest = request.body.redesSociais;

    const contatoNovo = {

        id: Math.floor(Math.random()* (10-2) + 2),
        nome: nomeRequest,
        celular: celularRequest,
        redesSociais: redeSocialRequest
    };
    contatosJson.push(contatoNovo);
    response.status(200).send(contatoNovo);
}

const deleteContact = (request, response) => {

    const idRequerido = request.params.id;
    const contatoFiltrado = contatosJson.find(contato => contato.id == idRequerido);

    const indice = contatosJson.indexOf(contatoFiltrado)
    console.log(indice);

    contatosJson.splice(indice, 1);

    response.status(200).send(
     [ 
         {
             "mensagem": "is deleted."
         },
          contatosJson
     ]
    )
}

module.exports = {
    getAll,
    getById,
    getByName,
    createContact,
    deleteContact
}