const MONGOOSE = require('mongoose');

MONGOOSE.connect('') // Conecction string de la BBDD de Mongo
.then(db => console.log('DB is connected'))
.catch(err => console.log(err));