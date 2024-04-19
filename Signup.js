const express=require('express');
const router=express.Router();
const {MongoClient}=require('mongodb');
async function run(client,data){
    try{
        const database=client.db("Mathavan_matches");
        const user=database.collection("user_details");
        const result=user.insertOne(data);
        return "data inserted";
    }catch(error){
        throw error;
    }

}
router.post('/',async(req,res)=>{
    const data=req.body;
    console.log(data);
    const client=req.app.locals.MongoClient;
    try{
        const demo=await run(client,data);
        res.send(demo);
    }catch(err){
        console.log('error inserting data',err);
        res.status(500).send('error while inserting');
    }
});

module.exports=router;