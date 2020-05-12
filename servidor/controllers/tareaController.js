const { validationResult } = require('express-validator');
const Tarea = require('../models/Tarea');
const Proyecto = require('../models/Proyecto');


exports.crearTarea = async (req, res) =>{

    const errores = validationResult(req);

    if(!errores.isEmpty()){
       return res.status(400).json({errores: errores.array()});
    }
    
    

    try {
        const { proyecto } = req.body;
        const existeProyecto = await Proyecto.findById(proyecto);
         console.log(existeProyecto);
        if (!existeProyecto) {
            return res.status(404).json({msg: 'Proyecto no encontrado'});
        }

        if (existeProyecto.creador.toString() !== req.usuario.id) {
            return res.status(401).json({msg: 'No Autorizado'});
        }
        
        const tarea = new Tarea(req.body);
        await tarea.save();
        res.json(tarea);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

    
}