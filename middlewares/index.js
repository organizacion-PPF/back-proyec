//optimizar las importaciones

const validarComentario= require('../middlewares/validar_comentario');
const validarEmail= require('../middlewares/validar_email');
const validarJWT=require('../middlewares/validar_jwt')
const validarMateria= require('../middlewares/validar_materia');
const validarProfesor= require('../middlewares/validar_profesor');
const validarUser= require('../middlewares/validar_user')
const validarAuth= require('../middlewares/validar_auth')
 module.exports={

        ...validarComentario,
        ...validarEmail,
        
        ...validarJWT,
        ...validarMateria,
        ...validarProfesor,
        ...validarUser,
        ... validarAuth
 }