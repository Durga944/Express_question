var express = require("express");
var app = express();

app.get('/',(req,res)=>{
    res.send("Hyyyy Durga");
});

app.listen(8000,()=>{
    console.log("server is running");
});
