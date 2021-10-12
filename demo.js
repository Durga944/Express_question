var express = require('express')
var app = express()
app.use(express.json())
const port = 8000

app.get("/",(req,res)=>{
    res.send("Hello Durga")
    console.log("your friend Mona");
        // var myvar = {
        //     name:"Durga",
        //     age:20,
        //     hobbie:"playing"
        
        // }
        // res.send(myvar);
});
app.listen(port,()=>{
    console.log("server is running")

});