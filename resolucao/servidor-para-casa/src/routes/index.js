const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
    response.status(200).send({
        "titulo": "Contatinhos Api-Reprograma",
        "version": "1.0.0",
        "mensagem": "Bem vinda à minha agenda de contatinhos ;)"
    })
});

module.exports = router;