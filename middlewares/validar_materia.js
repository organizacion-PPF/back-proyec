const Materia = require('../models/materias');

//verificar si en la BD existe el rol ingresado por el usuario
const siExistemateria = async (materia = '')=> {
    const materiaEncontrada = await Materia.findOne({materia})
    if(!materiaEncontrada){
        throw new Error('la materia especificada no existe')
    }
}

module.exports = {
    siExistemateria
}