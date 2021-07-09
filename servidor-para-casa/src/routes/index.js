const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
    response.status(200).send(
      {
        
        "titulo": "API Contatos- {reprograma}",
        "versao": "1.0.0",
        "mensagem": "Olá, sejam bem-vindxs à lista de contatos ☎"
        
     }
    )
});

module.exports = router; 