const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send('<h1>Express with HTML test git update</h1>')
}) 

app.listen(3000);
console.log('Server on port 3000')