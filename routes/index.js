const express=require('express')
const Router=express.Router()

// this is the entry point for all the api 

Router.use('/api',require('./api/index'));

module.exports=Router