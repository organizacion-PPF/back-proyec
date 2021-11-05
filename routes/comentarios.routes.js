const routercomentario =require('express').Router();
const { validarCampos } = require('../helpers/validarCampos');
const{
    rutaPost,rutaDelete,rutaGet, rutaPut, rutaLogicalDelete
}=  require('../controllers/comentarios.controllers')
const {validar_jwt} = require('../middlewares/validar_jwt');
const {validacionComentario}= require("../middlewares/validar_comentario")
const { body, check } = require('express-validator');

//crear nuevo estudiante
routercomentario.get('/comentario/get',

rutaGet)

//ruta agregar estudiante
routercomentario.post('/comentario',
 validar_jwt,
 validacionComentario,
validarCampos,
rutaPost)


//ruta editar estudiante
routercomentario.put('/comentario/:id',
validar_jwt,
validacionComentario,
check('id','No es un id de MongoDB válido').isMongoId(),
validarCampos,
rutaPut)


//ruta eliminar estudiantes
routercomentario.delete('/comentario/delete/:id',
validar_jwt,
check('id','No es un id de MongoDB válido').isMongoId(),
validarCampos,
rutaDelete)


//eliminar estudiantes logicamente
routercomentario.put('/comentario/deleteLogi/:id',
validar_jwt,
check('id','No es un id de MongoDB válido').isMongoId(),
validarCampos,
rutaLogicalDelete)


module.exports =routercomentario;