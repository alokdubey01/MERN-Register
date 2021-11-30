const express = require('express');
const mongoose = require('mongoose');

const signupTemplate = new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    }
})

module.exports = new mongoose.model('mytable', signupTemplate)