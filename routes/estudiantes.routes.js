const router =require('express').Router();
const { validarCampos } = require('../helpers/validarCampos');
const{
    rutaPost,
    rutaDelete,
    rutaGet, 
    rutaPut, 
    rutaLogicalDelete
}=  require('../controllers/estudiantes.controllers');

const { body, check } = require('express-validator');

const {
    validar_jwt,
    validacionEstudiante
}= require('../middlewares');


//mostrar nuevo estudiante
router.get('/estudiante/get',

rutaGet)

//agregar estudiante
router.post('/estudiante',
 validar_jwt,
 validacionEstudiante,
validarCampos,
 rutaPost)


//ruta editar estudiante
router.put('/estudiante/:id',
validar_jwt,
validacionEstudiante,
check('id','No es un id de MongoDB válido').isMongoId(),
validarCampos,
rutaPut)


//ruta eliminar estudiantes
router.delete('/estudiante/delete/:id',
validar_jwt,
check('id','No es un id de MongoDB válido').isMongoId(),
validarCampos,
rutaDelete)


//eliminar estudiantes logicamente
router.put('/estudiante/deleteLogi/:id',
validar_jwt,
check('id','No es un id de MongoDB válido').isMongoId(),
validarCampos,
rutaLogicalDelete)


module.exports =router;