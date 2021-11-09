const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send('Hello World with express new version!')
}) 

app.listen(8080);
console.log('Server on port 8080')