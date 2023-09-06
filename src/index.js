const express = require("express");
const morgan = require("morgan");
const morgtan = require('morgan')
const path = require("path");
const app = express();
const {mongoose} = require('./database');

//Settings|Configuraciones
app.set("port", process.env.PORT || 3000);

//Middlewares|Intermediarios
app.use(morgan("dev"));
app.use(express.json());

//Routes|Rutas
app.use('/api/tasks', require('./routes/task.routes'));


//Static files|Archivos estaticos

app.use(express.static(path.join(__dirname, "public")));

//Staring the server|Iniciando el servidor

app.listen(app.get("port"), () => {
  console.log(
    `Server on port ${app.get("port")}|Servidor en puerto ${app.get("port")}`
  );
});
