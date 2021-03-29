// require mongoose package
const mongoose = require('mongoose')
<<<<<<< HEAD
if(process.env.NODE_ENV === 'development') {
// mongoose config
=======

// mongoose config --> if you don't change NODE_ENV's value to something besides 'development' (something like 'banana') 
// then the program catches the if clause and runs on local host rather than the mongodb.net
if(process.env.NODE_ENV === 'development') {
>>>>>>> 1c02af97a7fcb62e7e880440faf888545bd2923b
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost/project-three'

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})

const db = mongoose.connection;

// db methods for debug
db.once('open', () => {
console.log(`⛓ mongoDB connection @ ${db.host}:${db.port}`)
})

db.on('error', err => {
console.error(`🔥 something has gone wrong with the DB!!!!\n ${err}`)
})
<<<<<<< HEAD
}else {
  
// mongoose config
//userName-hello_users
//password-sunillama

  const MongoClient = require('mongodb').MongoClient;

  const uri = process.env.ATLAS_URL

  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  client.connect(err => {

=======
} else{
  // mongoDB Atlas code will go here
  // username: super_cool_person
  // pw: hello
  const MongoClient = require('mongodb').MongoClient;

  const uri = "mongodb+srv://super_cool_person:hello@cluster0.hzc1d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
  // "mongodb+srv://super_cool_person:hello@cluster0.hzc1d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
>>>>>>> 1c02af97a7fcb62e7e880440faf888545bd2923b
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
<<<<<<< HEAD


=======
>>>>>>> 1c02af97a7fcb62e7e880440faf888545bd2923b
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })

  const db = mongoose.connection;

  // db methods for debug
  db.once('open', () => {
    console.log(`⛓ mongoDB connection @ ${db.host}:${db.port}`)
  })

  db.on('error', err => {
    console.error(`🔥 something has gone wrong with the DB!!!!\n ${err}`)
  })
<<<<<<< HEAD
}
=======
}
>>>>>>> 1c02af97a7fcb62e7e880440faf888545bd2923b
