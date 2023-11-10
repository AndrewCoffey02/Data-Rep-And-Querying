const express = require('express')
const app = express()
const port = 4000

const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({ extended : false}));
app.use(bodyparser.json());

//get fname and lname and input into /name page
app.get('/name', (req, res) =>{
  res.send("Hello "+req.query.fname + " " + req.query.lname);
})
//post fname and lname and input into /name page
app.post('/name', (req, res)=> {
  res.send("Hello "+req.body.fname + " " + req.body.lname);
})

//main route sends hello world
app.get('/', (req, res) => {
  res.send('Hello World!')
})
//whatever route
app.get('/whatever', (req, res) => {
  res.send('Gooodbye!')
})

//api route for books
app.get('/api/books', (req, res) => {
  //json data
  const data = [

    {
      "title": "Learn Git in a Month of Lunches",
      "isbn": "1617292419",
      "pageCount": 0,
      "thumbnailUrl":
        "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
      "status": "MEAP",
      "authors": ["Rick Umali"],
      "categories": []
    },
    {
      "title": "MongoDB in Action, Second Edition",
      "isbn": "1617291609",
      "pageCount": 0,
      "thumbnailUrl":
        "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
      "status": "MEAP",
      "authors": [
        "Kyle Banker",
        "Peter Bakkum",
        "Tim Hawkins",
        "Shaun Verch",
        "Douglas Garrett"
      ],
      "categories": []
    },
    {
      "title": "Getting MEAN with Mongo, Express, Angular, and Node",
      "isbn": "1617292036",
      "pageCount": 0,
      "thumbnailUrl":
        "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
      "status": "MEAP",
      "authors": ["Simon Holmes"],
      "categories": []
    }
  ];
  res.json({
    books: data,
    "Message": "Hello from server.js"
  })
})

//get html file and send
app.get("/test", (req, res) => {
  res.sendFile(__dirname + '/index.html');
})

//listen to port number
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

