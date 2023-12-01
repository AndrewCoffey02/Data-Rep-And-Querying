const express = require('express');
const app = express();
const port = 4000;

//add Cors to the server
const cors = require('cors');
app.use(cors());
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});

//npm i body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://admin:admin@cluster0.xqnbbts.mongodb.net/?retryWrites=true&w=majority');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const kittySchema = new mongoose.Schema({
  title: String,
  cover: String,
  author: String
});

//mongoose create
const bookModel = mongoose.model('books', kittySchema);

//used to delete books selected
app.delete('/api/book/:id',async (req,res) => {
  //console output
  console.log("Delete: "+req.params.id);

  //select book and delete from database
  let book = await bookModel.findByIdAndDelete(req.params.id);
  res.send(book);
})

//used to parse the body of a http request
app.post('/api/books', (req, res) =>{
    console.log(req.body);
    bookModel.create({
      title: req.body.title,
      cover: req.body.cover,
      author: req.body.author
    })

    //passing the id of the book
    .then(() => {res.send("Book Created")})
    .catch(() => {res.send("Book NOT Created")});
});

//listening to port 4000 for http request
app.get('/', (req, res) => {
  res.send('Hello World!');
});

//get the book array and display it
app.get('/api/books', async(req, res) =>{
    
  let books = await bookModel.find({});
  res.json(books);

})
//get the book array and display it 
app.get("/api/books/:id", async(req, res) => {  

  console.log(req.params.id);

  let book = await bookModel.findById(req.params.id);
  res.json(book);

})

app.put("/api/books/:id", async(req, res)=> {

  console.log("Update: "+req.params.id);

  let book = await bookModel.findByIdAndUpdate(req.params.id, req.body, {new:true});
  res.send(book);
})

//listen for requests coming in
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});