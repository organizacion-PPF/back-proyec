const ctrlAuthUser = {};
const User=require('../models/users')

const {generate_jwt} = require('../helpers/generar_jwt');

//Login de usuarios

ctrlAuthUser.rutaGet = async (req,res)=>{

        const usuarioAuth = await User.find();
        res.json(usuarioAuth);
};


ctrlAuthUser.rutaLogin = async (req, res) => {

        const { email, password} = req.body;
        const usuarioAuth = await User.findOne({email, password});

        //Si no encuentra el usuarioAuth
        if(!usuarioAuth){
            return res.status(401).json({
                msg: "usuarioAuth no existe"
            })
        };

        //verificamos si es un usuarioAuth activo
        
        if(!usuarioAuth.activo){
            res.status(401).json({
                //Si no lo encuentra activo al usuarioAuth pasa
                msg: "usuarioAuth no existe"
            })
        }

        //Si lo encuentra

        const token = await generate_jwt(usuarioAuth.id); 
        
        //Muestra el token generado
        res.json({
            token     
        }); 
}

module.exports = ctrlAuthUser ;
