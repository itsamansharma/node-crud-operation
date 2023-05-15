# NodeJs-crud-operation for beginers <br>
Helloo!! everyone, lets start build Rest Apis in our very first nodejs app.<br>
Install and Setup Nodejs in your system from here [ 🔗Link](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04) <br>
Open cmd terminal and write
``` 
$ mkdir test-app
$ cd test-app
$ npm init
```
and select your main file name as app.js <br>
this will create the 📄package.json. Now in the root directory create a file name 📄app.js , now we need to install express<br>
```
$ npm install express --save
```
now in app.js

```
const express = require('express');
const app = express(); // we will use this app to define routes, port, Middleware everything

//route
app.get('/', (req,res) =>{
    res.send('Hello World');
});

// define port for hosting
app.listen(3004,()=>{
  console.log("Port running on 3004")
})
```
now in terminal run command ` npm app.js `

