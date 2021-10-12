var express = require("express")
var app = express();

app.get("/login",(req,res)=>{
    res.send("Hello Word");
});

app.listen(7000,()=>{
    console.log("server is runing at 8000 port");
});