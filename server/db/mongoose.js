var mongoose = require('mongoose');

// var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }, 
//                 replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/TodoApp');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Mongo connection error: '));

module.exports = {mongoose};

//  ?authSource=admin