const { response } = require("express");
const tarefasJson = require("../models/tarefas.json");

const getAll = (request, response) => {
    response.status(200).send(tarefasJson)
}

const getById = (request, response) => {
    const idRequerido = request.params.id
    const tarefaFiltrada = tarefasJson.find(tarefa => tarefa.id == idRequerido)

    response.status(200).send(tarefaFiltrada)
}

const criarTarefa = (request,response) => {
    
    const descricaoRequerida = request.body.descricao
    const autorRequerido = request.body.autor

    const novaTarefa = {
        id: "12345",
        data: new Date(),
        concluido: false,
        descricao: descricaoRequerida,
        autor: autorRequerido
    }

    tarefasJson.push(novaTarefa)
    response.status(200).send(novaTarefa)
}
const apagarTarefa = (request,response) => {

    const idRequerido = request.params.id;
    const tarefaFiltrada = tarefasJson.find(tarefa => tarefa.id == idRequerido)

    const indice = tarefasJson.indexOf(tarefaFiltrada)
    tarefasJson.splice(indice, 1)

    response.status(200).send(
        [   
            {
                "message": "Tarefa deletada com sucesso!"
            },tarefasJson

        ]
    )

}

module.exports = {
    getAll,
    getById,
    criarTarefa,
    apagarTarefa
}