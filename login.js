const express=require('express');
const router=express.Router();
const {MongoClient}=require('mongodb');

async function login(client,data){
        try{
            const database=client.db("Mathavan_matches");
            const userdetails=database.collection("user_details");
            const query={email_:data.useremail_};
            const user=await userdetails.findOne(query);
            return user;
        }catch(err){
            throw err;
        }
}

router.post('/',async(req,res)=>{
    const data=req.body;
    const client=req.app.locals.MongoClient;
    try{
        const demo=await login(client,data);
        if(data.useremail_===demo.useremail_ &&data.userpassword_===demo.userpassword_){
            res.send(true);
        }else{
            res.status(401).send('invalid credentials');
        }
    }catch(e){
        console.error('error while fetching data',e);
        res.status(500).send('error while fetching');
    }
});

module.exports=router;
