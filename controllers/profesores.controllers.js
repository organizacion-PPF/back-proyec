const ctrlHome = {};
const Profesor = require('../models/profesor');

//ruta get users 
 
ctrlHome.rutaGet = async (req,res)=>{

    const profesor= await Profesor.find().populate('userId','nombre_usuario');

    res.json(profesor);
}

//ruta agregar users

ctrlHome.rutaPost = async (req,res)=>{
    const body=req.body;
    body.userId = req.usuario._id

    const profesor= new Profesor(body)

    await profesor.save();
    res.json({msg: 'profesoragregado'})
};

//ruta eliminar users
ctrlHome.rutaDelete = async (req,res)=>{
    const {id}= req.body;

    try{
        await Profesor.findByIdAndDelete(req.params.id);

        return res.json({msg: 'user removed'})
    } catch(error){
        console.log('error al eliminar user ',error)
    }
}



//ruta editar users
ctrlHome.rutaPut = async (req , res)=>{
    const body=req.body;
    body.userId = req.usuario._id

    const { id } = req.params;
    
    try {
        const profesor= await Estudiante.findByIdAndUpdate(id, body);
        return res.json(profesor)
    } catch (error) {
        console.log(`error al actulizar usuario: ${error}`)
    }

};


//eliminar user automaticamante

ctrlHome.rutaLogicalDelete= async (req, res)=>{

    const {id} = req.params;

    const profesor= await Estudiante.findByIdAndUpdate(id,{ activo: false });
    console.log(id)
    //responde si fue eliminado correctamente

    res.json({msg:`Usuario eliminado logicamente`, profesor})
}



module.exports = ctrlHome;