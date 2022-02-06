import Connection from './database/db.js';
import express from 'express';
import router from './routes/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';

const app =express();
app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',router);
app.listen(4000,()=>{
    console.log('server is running');
})

Connection();