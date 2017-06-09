var mongoose = require('mongoose');

var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }, 
                replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };

// var localDB = 'mongodb://127.0.0.1:27017/TodoApp';
// var remoteDB = 'mongodb://todo-api:todo-api@ds115712.mlab.com:15712/node-todo-api'
// process.env.MONGODB_URI 

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/TodoApp', options);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Mongo connection error: '));

module.exports = {mongoose};

//  ?authSource=admin