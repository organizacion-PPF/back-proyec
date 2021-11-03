const {model, Schema}= require('mongoose');


const MateriaSchema = new Schema({

    materia:{
       type:String,
       required: [true, "la materia es necesaria"]

    }
  });

module.exports = model('Materia', MateriaSchema);