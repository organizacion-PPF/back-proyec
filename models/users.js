const {model, Schema}= require('mongoose');

const UserShema = new Schema({
    nombre_completo:{
        type:String,
        unique: [true, 'El nombre de usuario está duplicado'],
        required: [true, 'El nombre de usuario es necesario']
    },
    email:{
        type: String,
        unique: [true, 'El correo está duplicado'],
        required: [true, 'El correo es necesario']
    },
    password:{
        type: String,
        required: [true, 'La contraseña es necesaria']
    },
    provincia:{
        type: String,
        required: [true, 'La provincia es necesaria']
    },
    rol:{
        type:String,
        default:"common_user"
    },
    estado:{
        type: Boolean,
        default: true
    },

    
    


});

module.exports = model('User', UserShema);