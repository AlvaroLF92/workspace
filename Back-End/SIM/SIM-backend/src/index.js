
const EXPRESS = require('express');
const PATH = require('path');
const SESSION = require('express-session');
const BODY_PARSER = require('body-parser');


// Initializations
const APP = EXPRESS();
require('./config/database')

// Settings
APP.set('port', process.env.PORT || 3001);

// Middlewares
APP.use(EXPRESS.urlencoded({extended: false}));
APP.use(BODY_PARSER.json());
APP.use(BODY_PARSER.raw());
APP.use(SESSION({
  secret: 'SIM_Training_secret-backend',
  resave: true,
  saveUninitialized: true
}));

// Global Variables

// Routes headers config
APP.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

// Routes
APP.use(require('./routes/monitors'));
APP.use(require('./routes/users'));

//Server is listening
APP.listen(APP.get('port'), () => {
  console.log('Server on port: ', APP.get('port'));
});

