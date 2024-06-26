const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/Polling_System');
mongoose.set('strictQuery', false);
const dotenv = require('dotenv');
dotenv.config();

mongoose.connect(process.env.MONGO_URL);

// Code for using the cloud mongodb atlas 
const connectParams={
    useNewUrlParser:true,
    useUnifiedTopology:true
}

// Code for manually using the mongodb of local system

const db = mongoose.connection

db.on('error', console.error.bind(console, 'error connecting to database'));

db.once('open', ()=>{
    console.log("successfully connected to database");
});

module.exports = mongoose;