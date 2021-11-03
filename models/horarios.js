const {model, Schema}= require('mongoose');

const HorarioSchema = new Schema({

    dia:[

        {
            type:Date,
            require:true
     
         }
    ],
    hora:
    [
        {
            type:Date,
            require:true
     
         },

    ]
  });

module.exports = model('Horario', HorarioSchema);