const miner = require('./miner.js')

const express = require('express');

const app = express();

app.get('/mine',(req,res)=>{
    miner();
    
})

app.listen(3000,()=>{
    console.log('server is running')
})
