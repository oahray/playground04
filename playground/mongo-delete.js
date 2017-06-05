const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server.');

  // Delete many
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result.result);
  // })

  // Delete one
  // db.collection('Todos').deleteOne({text: 'My next MongoDB trial'}).then((result) => {
  //   console.log(result.result);
  // })

  // Find one and Delete
  // db.collection('Todos').findOneAndDelete({completed: true}).then((result) => {
  //   console.log(JSON.stringify(result, undefined, 2));
  // })

  // db.collection('Users').deleteMany({name: 'Oare'}).then((result) => {
  //   console.log(result.result);
  // });

  // db.collection('Users').deleteOne({_id: new ObjectID('593538e7a832751530c9a3bf')}).then((result) => {
  //   console.log(result.result);
  // })

  db.collection('Users').findOneAndDelete({name: 'Oare'}).then((result) => console.log(result));

  // db.close();
});