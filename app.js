var mongoose=require('mongoose');
mongoose.set('strictQuery', false);

//Database connection
mongoose.connect('mongodb://0.0.0.0:27017/GrabGuard', {useNewUrlParser: true});
var conn = mongoose.connection;
conn.on('connected', function() {
    console.log('database is connected successfully');
});
conn.on('disconnected',function(){
    console.log('database is disconnected successfully');
})
conn.on('error', console.error.bind(console, 'connection error:'));
module.exports = conn;

//Headers 

const cookieParser=require('cookie-parser');
const bodyParser=require('body-parser');
const cors=require('cors');
const express=require('express');
const { json } = require('body-parser');
const port=5000;
const app=express();
app.use(cors());
app.options("*",cors());
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());
app.use(cookieParser());


app.listen(port, () => {
    console.log(`app listening at http://0.0.0.0:${port}`);
  });
  
  module.exports = app;