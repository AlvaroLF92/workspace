const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();
const ADMIN_SCHEMA = require('../models/Admin') 

ROUTER.post('/signIn', (req, res) => {
  console.log(req.body);
  const ADMIN_DATA = await ADMIN_SCHEMA.find();
  res.send({value: false});
});

ROUTER.post('/signUp', (req, res) => {
  res.send('Formulario de autenticación');
});

module.exports = ROUTER;