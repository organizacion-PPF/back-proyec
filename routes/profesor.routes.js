const router =require('express').Router();
const { validarCampos } = require('../helpers/validarCampos');

const{
    rutaPost,
    rutaDelete,
    rutaGet, 
    rutaPut, 
    rutaLogicalDelete
}=  require('../controllers/profesores.controllers');

const { body, check } = require('express-validator');

const {
    validar_jwt,
    validacionProfesor 
}= require('../middlewares');

//REGISTRARSE COMO PROFESOR

//mostrar los profesores
router.get('/profesor/get',

rutaGet)

// agregar profesor
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
check('id','No es un id de MongoDB válido').isMongoId(),
validarCampos,
rutaLogicalDelete)


module.exports =router;