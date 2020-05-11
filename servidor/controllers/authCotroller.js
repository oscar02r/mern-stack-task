const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

exports.autenticarUsuario = async (req, res) => {

      const errores = validationResult(req);

      if( !errores.isEmpty() ){
         return res.status(400).json({ errores:errores.array() });
      }

      const { email, password } = req.body;

      try {
           
      } catch (error) {
          
      }
}