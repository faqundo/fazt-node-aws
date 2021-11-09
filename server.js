const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send('Hello World with express testing Git Repo updating2!')
}) 

app.listen(8080);
console.log('Server on port 8080')