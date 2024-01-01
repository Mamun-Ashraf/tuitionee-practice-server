const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();

const port  = process.env.PORT || 5000;

app.use(cors());


const uri = "mongodb+srv://import.meta.env.USER_NAME:import.meta.env.USER_PASSWORD@cluster0.laf8zrf.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } 
  finally {
    
  }
}
run().catch(error => console.error(error));


app.get('/', (req, res) =>{
    res.send('Tuitionee- Server is running');
})

app.listen(port, () =>{
    console.log(`Tuitionee server is running on port: ${port}`);
})