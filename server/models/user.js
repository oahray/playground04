var mongoose = require('mongoose');

var User = mongoose.model('User', {
  email: {
    required: true,
    type: String,
    trim: true,
    minlength: 5
  }
});

// var newUser = new User({
//   email: 'myemail'
// });

// newUser.save().then((doc) => {
//   console.log('New user successfully created', doc);
// }, (err) => {
//   console.log('Error saving User:', err.errors.email.message);
// });

module.exports = {
  User
};