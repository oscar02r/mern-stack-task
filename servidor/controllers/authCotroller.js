const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const Usuario = require("../models/Usuario");

exports.autenticarUsuario = async (req, res) => {
  const errores = validationResult(req);

  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }

  const { email, password } = req.body;

  try {
    let usuario = await Usuario.findOne({ email });

    if (!usuario) {
      return res.status(400).json({ msg: "El usuario no existe" });
    }

    const passCorrecto = await bcryptjs.compare(password, usuario.password);

    if (!passCorrecto) {
      res.status(400).json({ msg: "El password es incorrecto" });
    }

    const payload = {
      usuario: {
        id: usuario.id,
      },
    };

    jwt.sign(
      payload,
      process.env.SECRETA,
      {
        expiresIn: 3600, // Vence en una hora
      },
      (error, token) => {
        if (error) throw error;
        
        res.json({ token });
      }
    );
  } catch (error) {
    console.log(error);
  }
};
