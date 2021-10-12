const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());

app.get('/',function(req,res){
    res.send('Welcome to homepage');
});

app.listen(4000,()=>{
    console.log('server is running');
});