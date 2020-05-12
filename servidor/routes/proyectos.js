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



module.exports = router;