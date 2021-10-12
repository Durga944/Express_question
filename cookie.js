const express = require('express');
const cookieparser = require('cookie-parser');
var app = express();
app.use(cookieparser());
app.get('/home',(req,res)=>{
    res.cookie('Name','Durga')
    res.send('cookie has set')
})
app.listen(4000,()=>{
    console.log('cookie is running');
})