const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

var id = "5935d57844e96216f0031601"
// var id = '5937f3b41df8d919e4e81ebf1';

if (!ObjectID.isValid(id)) {
  console.log('ID not valid');
};

// Todo.find({
//   _id : id
// }).then((todos) => {
//   console.log('Todos', todos);
// });

// Todo.findOne({
//   _id : id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Todo ID not found');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

User.findById(id).then((user) => {
  if (!user) {
    return console.log('User not found');
  }
  console.log('User By Id', user);
}).catch((e) => console.log(e.message));