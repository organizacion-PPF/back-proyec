const {model, Schema}= require('mongoose');

const UserShema = new Schema({
    nombre_usuario:{
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
    activo:{
        type: Boolean,
        default: true
    },
    profesor:{
        type: Boolean,
        default: false,
        require:true
    },
    alumno:{
        type: Boolean,
        default: false,
        require:true
        
    }


});

module.exports = model('User', UserShema);