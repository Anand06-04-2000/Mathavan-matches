const express=require('express');
const cors=require('cors');
const bodyParser = require('body-parser');
const {MongoClient} =require('mongodb');
const signuppage=require('./Signup');
const loginpage=require('./login');
const app=express();
app.use(cors());
app.use(bodyParser.json());
const uri="mongodb+srv://anandhamadhavanbalamurugan:se8PzEBjFUGfxW50@mathavan-match.dplwsct.mongodb.net/";
const client=new MongoClient(uri);

async function ConnectToMongo(){
    try{
        await client.connect();
        console.log('mongo db connected');
        app.locals.MongoClient=client;
    }catch(e){
        console.error('error connecting to mongo',e);
        process.exit(1);
    }
}
ConnectToMongo();
app.use('/signup',signuppage);
app.use('/login',loginpage);
app.listen(8000,()=>{
    console.log('server is running');
});
