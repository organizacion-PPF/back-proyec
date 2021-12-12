const ctrlHome = {};
const Profesor = require('../models/profesor');
const User=require('../models/users')
 require('../connection');


//ruta get users 
 
ctrlHome.rutaGet = async (req,res)=>{

        const profesor= await Profesor.find().populate('userId','nombre_completo');
        res.json(profesor);
        
}


//ruta get listar users

ctrlHome.listarprofe = async (req, res) => {
    const { limite = 5, desde = 0 } = req.query;

    const query = { estado: true };

    const [total, usuarios] = await Promise.all([
        Profesor.countDocuments(query),
        Profesor.find(query)
            .skip(Number(desde))
            .limit(Number(limite))
    ]);

    res.json({ total, usuarios });
};

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
            const profesor= await Profesor.findByIdAndUpdate(id, body);
            return res.json(profesor)
        } catch (error) {
            console.log(`error al actulizar usuario: ${error}`)
        }

};


//eliminar profesor logicamente

ctrlHome.rutaLogicalDelete= async (req, res)=>{

        const { id } = req.params;
        try {
            //Verifico que el usuario este activo
            const inactivo = await User.findById(id);

            /* console.log(inactivo) */
            if (!inactivo.profesor) {
                return res.json({
                    msg: `El usuario ${id} no existe`
                });
            };

            const usuario = await User.findByIdAndUpdate(id, { profesor: false });

            res.json({
                msg: 'Usuario borrado de la base de datos exitosamente',
                usuario
            });
        } catch (error) {
            console.log('Error al borrar los datos del usuario: ', error);
        };
}



module.exports = ctrlHome;