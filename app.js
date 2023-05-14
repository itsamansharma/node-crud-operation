const express = require('express');
const app = express();
require('dotenv/config');
const bodyParser  = require('body-parser');
const connectDb = require("./database")

app.use(bodyParser.json());

// Import routes
const newPageRouter = require('./routes/page.route')

// ============== middlewares (app.use)
    // app.use(auth) => this middleware will run at every route this is used when we want user to be loggedin at all the route

app.use('/page', newPageRouter);

//=============route here (app.get)
app.get('/', (req,res) =>{
    res.send('Hello World Home Page');
});

// =============== database connection
// connectDb().then("mongoose database connected ")

connectDb().then(()=>{
  console.log("mongoose connected !!!!!")
})
  .catch(err=>{
      console.log("db not connected  " + err)
  })

// listern here
app.listen(3004,()=>{
  console.log("Port running on 3004")
})