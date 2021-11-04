const { body, check } = require('express-validator');
const {siExistemateria}= require('../middlewares/validar_materia')
const validacionProfesor=
[
    body('descripcion', 'La descripcion ingresada no contiene un formato correcto')
    .isString()
    .not()
    .isEmpty()
    .isLength({ min: 15}),

    body('nivel', 'el nivel ingresado no contiene un formato correcto')
    .isString()
    .not()
    .isEmpty(),

    body('materia', 'La materia ingresada no contiene un formato correcto')
    .isString()
    .not()
    .isEmpty()
    .custom(siExistemateria),

    body('horarios', 'el horario ingresado no contiene un formato correcto')
    .isString()
    .not()
    .isEmpty()
   
]

module.exports = {
    validacionProfesor
}