const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result.result);
// });

Todo.findOneAndRemove({text: "Sent from Postman again"}).then((todo) => {
  console.log(todo);
});

// Todo.findByIdAndRemove('593952d6ea03c60ac4d666ab').then((todo) => {
//   console.log(todo);
// });