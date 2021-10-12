const express = require('express');
const app = express();

let port = 4000;

// middleware();
const middleware = (req,res,next)=>{
    console.log(`Hello my middleware`);
    next();
}
app.get('/',(req,res)=>{
    res.send(`Hello word from the server`);
});

app.get('/about',middleware,(req,res)=>{
    res.send(`Hello about word from the server`);
});
app.get('/contact',(req,res)=>{
    res.send(`Hello contact word from the server`);
});
app.get('/signup',(req,res)=>{
    res.send(`Hello signup word from the server`);
});
app.get('/login',(req,res)=>{
    res.send(`Hello login word from the server`);
});
app.listen(port,()=>{
    console.log(`server is running port no. ${port} `);
});