
const express=require('express')
const bodyParser=require('body-parser')
const db=require('./config/mongoose');
// const mongoose = require('mongoose');

const dotenv = require('dotenv');
dotenv.config();


const app=express();
app.use(bodyParser.urlencoded({extended:true}))

// mongoose.set('strictQuery', true);

const Port= process.env.PORT || 3000;

// Routes
app.use('/',require('./routes/index'));
   
app.get('/', (req,res)=>{
    res.send("Hello, Welcome to Polling System")
})
app.listen(Port,function(){
    console.log("server is runing on port no:",Port);
})