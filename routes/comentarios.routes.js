//requerimientos
const routercomen = require('express').Router();
const {validar_jwt} = require('../middlewares/validar_jwt');
//enviar informacion del usuario logueado 
const { 
    rutaPost
 } = require('../controllers/comentarios.controllers');

routercomen.post('/comentarios',

validar_jwt,

rutaPost)


module.exports = routercomen;