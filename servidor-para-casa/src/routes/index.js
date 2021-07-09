const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
    response.status(200).send(
      {
        
        "titulo": "API Contatos- reprograma",
        "versao": "1.0.0",
        "mensagem": "Seja bem vinde a sua API de contatos <3"
        
     }
    )
});

module.exports = router; 
