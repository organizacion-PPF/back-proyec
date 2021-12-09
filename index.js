const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
//inicializaciones
const app = express();
require('dotenv').config();
require('./connection');

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
//conexion al server
app.set("port", process.env.PORT || 3000);

//rutas 
app.use(require('./routes/user.routes'));
app.use(require('./routes/profesor.routes'));
app.use(require('./routes/comentarios.routes'));
app.use(require('./routes/auth.routes'));
app.use(require('./routes/materias.routes'));
//devuelve la conexion
app.listen(app.get("port"),()=>
    console.log(`server on port ${app.get("port")}`)
);
