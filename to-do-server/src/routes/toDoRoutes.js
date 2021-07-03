const express = require("express");
const router = express.Router();
const controller = require("../controllers/toDoControllers");

router.get("/", controller.getAll);
router.get("/:id", controller.getById);

router.post("/cadastrar", controller.criarTarefa);

router.delete("/:id", controller.deletarTarefa)

module.exports = router;