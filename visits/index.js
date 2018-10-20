const express = require('express');
const redis= require('redis');

const app = new express();
const client = new redis.createClient({
    host:'redis-server',
    port: 6379
});
client.set('visits',0);
app.get('/',(req,res)=>{
    client.get('visits',(err,visits)=>{
        res.send('Number of visits are '+ visits); 
        client.set('visits',parseInt(visits)+1);
    });
});

app.listen(8081,()=>{
    console.log('Listning on port 8081');
});