
const router =require('express').Router();
const { validarCampos } = require('../helpers/validarCampos');

const{
    rutaLogin,
    rutaGet
}=  require('../controllers/auth.controllers')

const {
    validarAuth
}= require('../middlewares');

//RUTA LOGIN

//mostrar los usuarios logueados 
router.get('/get-auth',

rutaGet)

//loguearse
router.post('/auth/login', 
validarAuth,
validarCampos,

rutaLogin)

module.exports =router;