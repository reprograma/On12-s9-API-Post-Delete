const express = require("express");
const app = express();

const tasks = require("./routes/toDoRoutes");

app.use("/tarefas", tasks);

module.exports = app;


