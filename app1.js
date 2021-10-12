var express = require('express');
var app = express();

app.get('/login', function(req, res){
   res.send('The is your login page');
});

app.post('/about', function (req, res) {
    res.send('this is your about page');
});

app.put('/homepage',function (req, res) {
    res.send('this is your homepage');
});

app.delete('/workpage',(req,res)=>{
    res.send('this is your workpage');
});

app.patch('/welcome',(req,res)=>{
    res.send("welcome....");
})
app.listen(3000,()=>{
    console.log("Lets Go....");
});
