const express = require('express');
const { check } = require('express-validator');
const proyectoController = require('../controllers/preyectoController');
const auth = require('../middleware/auth');

const router = express.Router();

//api/proyectos
router.post('/', 
  auth,
   [
      check('nombre', 'El nombre del proyecto es obligatorio').not().isEmpty()
  ],
  proyectoController.crearProyecto
); 

router.get('/', 
  auth,
  [
      check('nombre', 'El nombre del proyecto es obligatorio').not().isEmpty()
  ],
  proyectoController.obtenerProyectos
); 

router.put( '/:id',
  auth,
  [
    check('nombre', 'El nombre del proyecto es obligarotio').not().isEmpty()
  ],
  proyectoController.actualizarProyecto
);

module.exports = router;