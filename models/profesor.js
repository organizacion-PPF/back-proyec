const {model, Schema}= require('mongoose');
const {} = require('./users');
const  ProfesoresShema = new Schema({

    userId:{type:Schema.Types.ObjectId, ref: 'User'
      },

    HoraId:{type:Schema.Types.ObjectId, ref: 'Horario'},


    descripcion:{
        type:String,
        required: [true, "la descripcion es necesaria"]
    },
    nivel:[
        {
            type: String,
            required: [true, "el nivel es necesario"]
        } 
    ],
    materia:[
        {
            type: String,
            required: [true, "la materia es necesaria"]
        }

    ],
    horarios:[

        {
            type: Date,
            required: [true, "el horario es necesario"]
            
        }

    ],
    honorarios:{
        
        type: Number,
        required: [true, "el honorario es necesario"]
        
    }


});

module.exports = model('Profesores', ProfesoresShema);