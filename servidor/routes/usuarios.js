  const express = require('express');
  const router = express.Router();

  router.post('/', () => {
       console.log('Registrar usuarios');  
   });

module.exports = router;