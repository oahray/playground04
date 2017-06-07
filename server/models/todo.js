var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

// var newTodo = new Todo({
//   text: "Second thing to do"
// });

// newTodo.save().then((doc) => {
//   console.log('Todo saved successfully.', doc);
// }, (err) => {
//   console.log('Error saving Todo');
// });

// var anotherTodo = new Todo({});

// anotherTodo.save().then((doc) => {
//   console.log('Todo saved successfully.', doc);
// }, (err) => {
//   console.log('Error saving Todo:', err.errors.text.message);
// });

module.exports = {
  Todo
};