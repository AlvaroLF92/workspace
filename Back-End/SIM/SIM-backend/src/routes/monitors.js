const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();

ROUTER.get('/', (req, res) => {
  res.send({value: 'Test'});
});

module.exports = ROUTER;