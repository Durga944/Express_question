var express = require('express');
var app = express();

var cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get('/', function(req, res){
   res.cookie('name1', 'express')
   res.cookie('name2', 'node', {expire: 360000 + Date.now()}); 
   res.cookie('name3', 'js', {maxAge: 360000});
   res.send('cookie set'); 
});


app.get('/clear_cookie_foo', function(req, res){
    res.clearCookie('foo');
    res.send('cookie foo cleared');
 });
 




app.listen(3000);