const routerMateria =require('express').Router();


const { rutaGetMaterias } = require('../controllers/materias.controllers');


routerMateria.get('/materias/get',rutaGetMaterias)


module.exports = routerMateria;
