const express = require("express");
const app = express();
var port = 4000;

app.get('/read-users',(req,res)=>{

    var myObj = {
        name:"Durga",
        age:20,
        hobbie:"Coding"
    }
    res.send(myObj)
    res.send("Hello Durga");
});
app.listen(port,()=>{
    console.log("Server is running")
});