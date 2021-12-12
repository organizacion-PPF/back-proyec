const { body, check } = require('express-validator');
const {siExistemateria}= require('../middlewares/validar_materia')
const validacionProfesor=
[
   check('descripcion', 'La descripcion ingresada no contiene un formato correcto')
    .isString()
    .not()
    .isEmpty()
    .isLength({ min: 15}),

   check('nivel', 'el nivel ingresado no contiene un formato correcto')
    .isArray()
    .not()
    .isEmpty(),

   check('materia', 'La materia ingresada no contiene un formato correcto')
    .isArray()
    .not()
    .isEmpty()
    .custom(siExistemateria),

  
   
]

module.exports = {
    validacionProfesor
}