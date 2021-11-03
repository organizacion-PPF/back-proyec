const {model, Schema}= require('mongoose');
const {} = require('./users');

const EstudianteSchema = new Schema({
  userId:{type:Schema.Types.ObjectId, ref: 'User'
      },

    Aprender_Materias:
    [
      {
        type:String,
        required: [true, 'La materia que quiere aprender es necesaria']
 
     },
    ]
    
  });

module.exports = model('Estudiante', EstudianteSchema);
