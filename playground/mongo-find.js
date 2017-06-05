const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server.');

  // db.collection('Todos').find({_id: new ObjectID('59353588380a380904c47379')}).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }), (err) => {
  //   console.log('Unable to fetch Todos');
  // };

  db.collection('Todos').find({}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
    console.log(`Showing ${docs.length} Todos`);
  }), (err) => {
    console.log('Unable to fetch Todos');
  };

  db.collection('Users').find({}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
    console.log(`Showing ${docs.length} users`)
  })

  // db.close();
});