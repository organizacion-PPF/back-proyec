const ctrlMateria = {};
const materia = require('../models/materias')


ctrlMateria.rutaGetMaterias = async (req,res)=>{

    const materiaEncontrada = await materia.find();
    res.json(materiaEncontrada);
};

module.exports = ctrlMateria;