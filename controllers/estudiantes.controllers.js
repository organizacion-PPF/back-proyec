const ctrlHome = {};
const Estudiante = require('../models/estudiantes');
const User = require('../models/users');

//ruta get users 
 
ctrlHome.rutaGet = async (req,res)=>{

        const alumno = await Estudiante.find().populate('userId','nombre_usuario');
        res.json(alumno);
}

//ruta agregar users

ctrlHome.rutaPost = async (req,res)=>{
        const body=req.body;
        body.userId = req.usuario._id
        const alumno = new Estudiante(body)

        await alumno.save();
        res.json({msg: 'alumno agregado'})
};

//ruta eliminar users
ctrlHome.rutaDelete = async (req,res)=>{
        const {id}= req.body;

        try{
            await Estudiante.findByIdAndDelete(req.params.id);

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
            const alumno = await Estudiante.findByIdAndUpdate(id, body);
            return res.json(alumno)
        } catch (error) {
            console.log(`error al actulizar usuario: ${error}`)
        }

};


//eliminar user automaticamante

ctrlHome.rutaLogicalDelete= async (req, res)=>{

        const { id } = req.params;
        try {
            //Verifico que el usuario este activo
            const inactivo = await User.findById(id);

            /* console.log(inactivo) */
            if (!inactivo.alumno) {
                return res.json({
                    msg: `El usuario ${id} no existe`
                });
            };

            const usuario = await User.findByIdAndUpdate(id, { alumno: false });

            res.json({
                msg: 'Usuario borrado de la base de datos exitosamente',
                usuario
            });
        } catch (error) {
            console.log('Error al borrar los datos del usuario: ', error);
        };
}



module.exports = ctrlHome;
