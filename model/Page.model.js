const express = require('express');
const mongoose = require('mongoose');

const PageSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});


// we can also directly export schema 
module.exports = mongoose.model('Page', PageSchema);