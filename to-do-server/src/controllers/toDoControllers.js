const tarefasJson = require("../models/tarefas.json");

const getAll = (request, response) => {
    response.status(200).send(tarefasJson)
}

const getById = (request, response) => {
    const idRequirido = request.params.id
    const tarefaFiltrada = tarefasJson.find(tarefa => tarefa.id == idRequirido)

    response.status(200).send(tarefaFiltrada)
}

const criarTarefa = (request, response) => {
    // pegar a tarefa enviada pelo client
    // console.log(request)
    const descricaoRequerida = request.body.descricao;
    const autorRequerido = request.body.autor;

    // juntar o que foi enviado na request com os dados automáticos (id, data, concluido)
    const novaTarefa = {
        id: "12345",
        data: new Date(),
        concluido: false,
        descricao: descricaoRequerida,
        autor: autorRequerido
    };

    // empurrando para o json a nova tarefa criada
    tarefasJson.push(novaTarefa);

    // enviar resposta
    response.status(200).send(novaTarefa);
};

const deletarTarefa = (request, response) => {
    // ver qual tarefa a requisição solicitou apagar
    // pegar id pelo parametro
    const idRequerido = request.params.id;
    const tarefaFiltrada = tarefasJson.find(tarefa => tarefa.id == idRequerido);

    // filtrar o json para achar a tarefa que foi requisita pra ser apagada
    const indice = tarefasJson.indexOf(tarefaFiltrada);
    console.log(indice);

    // apagar o item da lista
    // splice(indice, quantos itens a ser removidos, o que vai ser acrescentado)
    tarefasJson.splice(indice, 1);

    // enviar uma resposta

    response.status(200).send(
        [
            {
                "message": "Tarefa deletada com sucesso!"
            },
            tarefasJson
        ]
    )

}

module.exports = {
    getAll,
    getById,
    criarTarefa,
    deletarTarefa
}