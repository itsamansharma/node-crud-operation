// we'll perform get post put and delete route functions  
const express = require('express');
const router = express.Router();
const Page = require('../model/Page.model');

router.get('/', (req,res) =>{
  console.log('we are on new Page');
  Page.find()
  .then(data=>res.send(data))
  .catch(err=>console.log(err))
});

router.post('/',(req,res)=>{
  Page.create({
    title: req.body.title,
    description: req.body.description
  })
  .then(data=>res.send(data))
  .catch(err=>console.log(err))
})

//what do we expost from this file i.e; router
module.exports = router;