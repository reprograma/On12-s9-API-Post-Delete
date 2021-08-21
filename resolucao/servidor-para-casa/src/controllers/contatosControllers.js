const contatos = require("../models/contatos.json");

const getAll = (request, response) => {
    response.status(200).send(contatos);
};

const getById = (request, response) => {
    const idRequirido = request.params.id;
    const contatoFiltrado = contatos.find(contato => contato.id == idRequirido);

    response.status(200).send(contatoFiltrado);
};

const getByName = (request, response) => {
    const nomeRequirido = request.query.nome;
    const contatoFiltrado = contatos.find(contato => contato.nome == nomeRequirido);

    response.status(200).send(contatoFiltrado);
};

const criarContato = (request, response) => {
    const novoContato = {
        id: "12345",
        nome: request.body.nome,
        celular: request.body.celular,
        redesSociais: request.body.redesSociais
    };

    contatos.push(novoContato);

    response.status(200).send(novoContato);
};

const deletarContato = (request, response) => {
    const idRequerido = request.params.id;
    const contatoFiltrado = contatos.find(contato => contato.id == idRequerido);

    const indice = contatos.indexOf(contatoFiltrado);
    contatos.splice(indice, 1);

    response.status(200).send(
        [
            {
                "message": "Contato deletado com sucesso!"
            },
            contatos
        ]
    );
};

module.exports = {
    getAll,
    getById,
    getByName,
    criarContato,
    deletarContato
};