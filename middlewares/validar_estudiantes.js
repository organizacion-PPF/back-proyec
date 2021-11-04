const { body, check } = require('express-validator');
const {siExistemateria}= require('../middlewares/validar_materia')
const validacionEstudiante=
[
    body('Aprender_Materias', 'El campo aprender materias ingresado no contiene un formato correcto')
    .isString()
    .not()
    .isEmpty()
    .custom(siExistemateria) 
  
]

module.exports = {
    validacionEstudiante
}