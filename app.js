const express = require('express');
const path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('./api/model/User');
require('./api/model/Student')
require('./api/model/Schedule')
var userRouter = require('./api/route/user')
var scheduleRouter = require('./api/route/schedule')






const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/school-education'));
app.use('/api/route/user', userRouter)
app.use('/api/route/schedule', scheduleRouter)
app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/school-education/index.html'));
});

// Start the app by listening on the default Heroku port
//app.listen(process.env.PORT || 3000);
var debug = require('debug')('school-education:server');
var http = require('http');

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '4200');
app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}




//Nhập mô-đun mongoose
var mongoose = require('mongoose');

//Thiết lập một kết nối mongoose mặc định
var mongoDB = 'mongodb://s-chool:Thach2106@ds263816.mlab.com:63816/c-school';
mongoose.connect(mongoDB,{ useNewUrlParser: true });
//Ép Mongoose sử dụng thư viện promise toàn cục
mongoose.Promise = global.Promise;
//Lấy kết nối mặc định
var db = mongoose.connection;

//Ràng buộc kết nối với sự kiện lỗi (để lấy ra thông báo khi có lỗi)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
//Kết nối firebase
var firebase = require('firebase');
var config = {
  apiKey: "AIzaSyBCon2O9GDH82NiGHI5E5gs64HEyV9sDf0",
  authDomain: "c-school-apps.firebaseapp.com",
  databaseURL: "https://c-school-apps.firebaseio.com",
  projectId: "c-school-apps",
  storageBucket: "",
  messagingSenderId: "353430333264",
  appId: "1:353430333264:web:ea7d5f99891fa0d0"
};
firebase.initializeApp(config);