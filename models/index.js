// require mongoose package
const mongoose = require('mongoose')
if(process.env.NODE_ENV === 'development') {
// mongoose config
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
}else {
  
// mongoose config
//userName-hello_users
//password-sunillama

  const MongoClient = require('mongodb').MongoClient;

  const uri = process.env.ATLAS_URL

  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  client.connect(err => {

  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


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
}