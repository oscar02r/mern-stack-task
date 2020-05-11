const express = require('express');


const app = express();

const  PORT = process.env.PORT || 4000;

app.get('/', (req, res) =>{
    res.send('Hola mudo');
});

app.listen(PORT, ()=>{
    console.log(`El servidor esta funcioando el el puerto ${PORT}`);
});
