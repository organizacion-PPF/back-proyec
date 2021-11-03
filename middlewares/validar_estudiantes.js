const { body, check } = require('express-validator');

const validacionEstudiante=
[

    body('datos_personales.nombre_apellido', 'El nombre y apellido ingresado no contiene un formato correcto')
    .isString()
    .not()
    .isEmpty(),
    
    body('datos_personales.edad', 'la edad ingresada no contiene un formato correcto')
    .isNumeric()
    .not()
    .isEmpty(),
    
    body('datos_personales.direccion.calle', 'la calle ingresado no contiene un formato correcto')
    .isString()
    .not()
    .isEmpty(),
    
    body('datos_personales.direccion.ciudad', 'la ciudad ingresado no contiene un formato correcto')
    .isString()
    .not()
    .isEmpty(),
    
    body('datos_personales.dni', 'el dni ingresado no contiene un formato correcto')
    .isNumeric()
    .not()
    .isEmpty(),
    
    body('datos_personales.correo', 'el correo ingresado no contiene un formato correcto')
    .isEmail()
    .not()
    .isEmpty(),
    
    body('datos_personales.numero_telefono', 'el numero ingresado no contiene un formato correcto')
    .isArray()
    .not()
    .isEmpty(),
    
    body('datos_personales.genero', 'el genero ingresado no contiene un formato correcto')
    .isNumeric()
    .not()
    .isEmpty(),
    
    body('datos_personales.nacionalidad', 'la nacionalidad ingresada no contiene un formato correcto')
    .isString()
    .not()
    .isEmpty(),
    
    body('secundario.institucion', 'el isntitucion ingresado no contiene un formato correcto')
    .isString()
    .not()
    .isEmpty(),
    
    body('secundario.titulo', 'el titulo ingresado no contiene un formato correcto')
    .isString()
    .not()
    .isEmpty(),
    
    body('conocimientos_informaticos', 'el regimen ingresado no contiene un formato correcto')
    .isBoolean()
    .not()
    .isEmpty(),
]

module.exports = {
    validacionEstudiante
}