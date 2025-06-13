const MONGOOSE = require('mongoose');
const {Schema} = MONGOOSE;

const ADMIN_SCHEMA = new Schema({
  email: { type: String, required: true},
  password: { type: String, required: true}
},
{});

module.exports = MONGOOSE.model('Admin',ADMIN_SCHEMA);