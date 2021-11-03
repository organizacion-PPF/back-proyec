const router =require('express').Router();
const { validarCampos } = require('../helpers/validarCampos');
const{
    rutaPost,rutaDelete,rutaGet, rutaPut, rutaLogicalDelete
}=  require('../controllers/profesores.controllers')
const {validar_jwt} = require('../middlewares/validar_jwt');
/* const {validacionEstudiante}= require("../middlewares/validar_estudiantes.js") */
const {siExistemateria}= require('../middlewares/validar_materia')
const { body, check } = require('express-validator');

//crear nuevo usuario
router.get('/estudiante',

rutaGet)

//ruta agregar usuarios
router.post('/profesor',
[
    validar_jwt,
    check('materia', 'la materia seleccionado no es válida')
.not()
.isEmpty()
.custom(siExistemateria),
   validarCampos

],rutaPost)


//ruta editar usuario
router.put('/profesor/:id',
validar_jwt,
check('id','No es un id de MongoDB válido').isMongoId(),
validarCampos,
rutaPut)


//ruta eliminar estudiantes
router.delete('/profesor/:id',
validar_jwt,
check('id','No es un id de MongoDB válido').isMongoId(),
validarCampos,
rutaDelete)


//eliminar estudiantes logicamente
router.put('/profesor/delete/:id',
validar_jwt,
check('id','No es un id de MongoDB válido').isMongoId(),
validarCampos,
rutaLogicalDelete)


module.exports =router;