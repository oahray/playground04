var express = require('express');
var bodyParser = require('body-parser')
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
var port = process.env.PORT || 3000;

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
    console.log(todos);
    res.send({todos});
  }, (e) => {
    console.log('Error getting Todos: ', e)
    res.status(400).send(e);
  });
});

// GET todos by ID
app.get('/todos/:id', (req, res) => {
  var id = req.params.id;
  //validate id
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }
  Todo.findById(id).then((todo) => {
    if (!todo) {
      return res.status(404).send();
    }
    res.send({todo});
  }).catch((e) => res.status(400).send());
});

app.listen(port, () => {
  console.log(`Express server started on port ${port}`);
});

module.exports = {app};