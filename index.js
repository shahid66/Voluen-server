
var express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
require('dotenv').config();
var app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());


const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.jxt7l.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db(DB_NAME).collection("Events");
  const registerEvent = client.db(DB_NAME).collection("registerEvent");

  // app.post('/addEvent',(req,res)=>{
  //     const events=req.body;
  //     console.log(events);
  //     collection.insertMany(events)
  //     .then(result=>{
  //         console.log(result);
  //     })
  // });
  app.post('/registerEvent',(req,res)=>{
    const events=req.body;
    console.log(events);
    registerEvent.insertOne(events)
    .then(result=>{
        console.log(result);
    })
});


  app.get('/Events', (req, res) => {
    collection.find({}).toArray((error,documents)=>{
        res.send(documents);
    })
  })
  app.get('/register', (req, res) => {
    registerEvent.find({}).toArray((error,documents)=>{
        res.send(documents);
    })
  })


});


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(process.env.PORT||port)
