var express = require('express');
var bodyParser = require('body-parser')

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2));
    res.send(doc);
  }, (e) => {
    console.log('Error saving Todo: ', e.errors.text.message);
    res.status(400).send(e);
  })
});

app.get('/todos', (req, res) => {
  Todo.find({}).then((todos) => {
    res.send({todos});
  }, (e) => {
    console.log('Error getting Todos: ', e)
    res.status(400).send(e);
  });
});

app.listen(3000, () => {
  console.log('Express server started on port 3000');
});

module.exports = {app};