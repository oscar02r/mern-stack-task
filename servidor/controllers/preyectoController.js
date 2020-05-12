const Proyecto = require('../models/Proyecto');
const { validationResult } = require('express-validator');

exports.crearProyecto = async ( req, res ) => {

  const errores = validationResult(req);
    
  if ( !errores.isEmpty() ) {
      return res.status(400).json({errores: errores.array()});
  }

  try {

      const proyecto = new Proyecto(req.body);
      proyecto.creador = req.usuario.id;

      await proyecto.save();
      res.status(200).json({proyecto});

  } catch (error) {

      console.log(error);
      res.status(500).send('Hubo un error en el servidor');
  }
}

exports.obtenerProyectos = async ( req, res ) => {
      try {

          const proyectos = await Proyecto.find({creador: req.usuario.id}).sort({creado:-1});
          res.json({proyectos});

      } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
      }   
}

exports.actualizarProyecto = async (req, res) => {
    
}