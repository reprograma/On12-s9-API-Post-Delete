const express = require("express")
const router = express.Router()
const controller = require("../controllers/toDoControllers")

router.get("/", controller.getAll);
router.get("/:id", controller.getById);

router.delete("/:id", controller.apagarTarefa)
router.post("/cadastrar", controller.criarTarefa)

module.exports = router;