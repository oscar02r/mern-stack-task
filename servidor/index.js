const express = require('express');
const conectarDB = require('./config/db');

const app = express();

conectarDB();

app.use(express.json({extended:true}));

const  PORT = process.env.PORT || 4000;

app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/auth', require('./routes/auth'));


app.listen(PORT, ()=>{
    console.log(`El servidor esta funcioando el el puerto ${PORT}`);
});
