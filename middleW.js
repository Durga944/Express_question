// const express = require('express');
// var app = express();


// const middleware = (req,res,next)=>{
//     console.log("This is middleware")
//     next();
// }
// app.use(middleware);

// app.get('/',(req,res)=>{
//     console.log(req.body)
//     res.send("Welcome to home page")
// })

// app.listen(8000,()=>{
//     console.log("server is running");
// });

var express = require('express');
var app = express();
var PORT = 3000;
  
app.use(express.json());
    
app.post('/', function (req, res) {
    console.log(req.body)
    res.end();
})
  
app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});