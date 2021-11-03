const { body, check } = require('express-validator');
const { ExisteEmail } = require('../middlewares/validar_email');
const validarUser=

[

     check('nombre_usuario', 'El username ingresado no contiene un formato correcto')
    .isString()
    .not()
    .isEmpty(),
    
     check('email', 'el correo ingresado no contiene un formato correcto')
        .isEmail()
        .not()
        .isEmpty()
        .custom(ExisteEmail),
    
      check('password', 'El password ingresado no contiene un formato correcto')
    .isString()
    .isLength({ min: 7 })
    .not()
    .isEmpty(),
    

      check('provincia', 'la provincia ingresada no contiene un formato correcto')
      .isString()
      .not()
      .isEmpty(),

       check('profesor', 'el profesor ingresado no contiene un formato correcto')
      .isBoolean()
      .not()
      .isEmpty(),

       check('alumno', 'el profesor ingresado no contiene un formato correcto')
      .isBoolean()
      .not()
      .isEmpty(),



]

module.exports = {
    validarUser
}