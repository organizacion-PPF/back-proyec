const ctrlMateria = {};
const materia = require('../models/materias')


ctrlMateria.rutaGetMaterias = async (req,res)=>{

    const materiaEncontrada = await materia.find().populate('userId','nombre_completo');
    res.json(materiaEncontrada);
};

module.exports = ctrlMateria;