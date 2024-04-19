const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
app.use(cors());
app.use(bodyParser.json());
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://anandhamadhavanbalamurugan:se8PzEBjFUGfxW50@mathavan-match.dplwsct.mongodb.net/";
const client = new MongoClient(uri);

async function run(data) {
  try {
    await client.connect(); 
    const database = client.db("Mathavan_matches");
    const user = database.collection("user_details");
    const result =await user.insertOne(data);
    console.log(result);
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
    
  } finally {
    await client.close();
  }
  run().catch(console.dir);
}

async function login(k){
  try {
    const database = client.db('Mathavan_match');
    const userdetails = database.collection('user_details');
    const query = {email_:'anandhamathavan.b@gmail.com'};
    const user = await userdetails.findOne(query);

    console.log(user);
  } finally {
    await client.close();
  }
  run().catch(console.dir);
}

app.post('/signup', async(req, res) => {
  const data = req.body;
  console.log(data);
  try{
    await run(data);
    res.send('Data inserted');
  }
  catch(error){
    console.error('error inserting data',error);
  }
 });



app.post('/login',async(req,res)=>{
  const data1=req.body;
  try{
    await login(data1);
    if(data1.useremail_===user.email_&& data1.userpassword_===user.pass_){
      res.send('user details verified');
    }
  }
  catch(err){
    console.error('error fetching data',err);
  }
}) 
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});