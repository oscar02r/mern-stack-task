const express = require('express');
const { check } = require('express-validator');
const router = express.Router();
const authCotroller = require('../controllers/authCotroller');
const auth = require('../middleware/auth');

// Iniciar sesion
// api/auth
router.post('/',

 authCotroller.autenticarUsuario);

//Obteniendo el usuario atuenticado
router.get('/',
     auth,
     authCotroller.usuarioAutenticado
);

module.exports = router;