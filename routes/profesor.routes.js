const router =require('express').Router();
const { validarCampos } = require('../helpers/validarCampos');
const{
    rutaPost,rutaDelete,rutaGet, rutaPut, rutaLogicalDelete
}=  require('../controllers/profesores.controllers')
const {validar_jwt} = require('../middlewares/validar_jwt');
/* const {validacionEstudiante}= require("../middlewares/validar_estudiantes.js") */
const {siExistemateria}= require('../middlewares/validar_materia')
const { validacionProfesor } = require('../middlewares/validar_profesor');
const { body, check } = require('express-validator');

//crear nuevo profesor
router.get('/profesor/get',


rutaGet)

//ruta agregar profesor
router.post('/profesor',
[
validar_jwt,
 validacionProfesor,
 validarCampos
],rutaPost)


//ruta editar profesor
router.put('/profesor/:id',
validar_jwt,
validacionProfesor,
check('id','No es un id de MongoDB válido').isMongoId(),
validarCampos,
rutaPut)


//ruta eliminar profesor
router.delete('/profesor/delete/:id',
validar_jwt,
check('id','No es un id de MongoDB válido').isMongoId(),
validarCampos,
rutaDelete)


//eliminar profesor logicamente
router.put('/profesor/deleteLogi/:id',
validar_jwt,
validacionProfesor,
check('id','No es un id de MongoDB válido').isMongoId(),
validarCampos,
rutaLogicalDelete)


module.exports =router;