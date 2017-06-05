const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server.');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('593534ed8f8a730f202ed28b')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // })

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5935642dabe2941d3c08eeda')
  }, {
    $set: {name: 'Curio'},
    $inc: {age: -3}
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  });


  // db.close();
});