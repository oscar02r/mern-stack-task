const express = require('express');
const { check } = require('express-validator');
const router = express.Router();
const authCotroller = require('../controllers/authCotroller');

router.post('/',
 [
   check('email', 'Agrega un email válido').isEmail(),
   check('password', 'El password debe ser minino 6 caracteres').isLength({min:6})
 ],
 authCotroller.autenticarUsuario);

module.exports = router;