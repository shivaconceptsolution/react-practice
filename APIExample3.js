const Express= require("express")
const BodyParser=require("body-parser")
var cors= require("cors")
const  MongoClient  = require('mongodb').MongoClient;
const objectId=require("mongodb").ObjectID
const CONNECTION_URL="mongodb://127.0.0.1:27017/"
const DATABASE_NAME="pro"
var app=Express()
app.use(cors())
app.use(BodyParser.json())
app.use(BodyParser.urlencoded({extended:true}))
var database,collectionbrand,collectiondevice
app.listen(5000,()=>{
    console.log("tarun");
    
 MongoClient.connect(CONNECTION_URL,{useNewUrlParser:true},
    (error,client)=>{
    if(error){
        throw error;
    }
    database=client.db(DATABASE_NAME)
    collectionbrand=database.collection("brand")
    collectiondevice=database.collection("device")
    console.log("hello")

 })

})
 



app.post("/brand",(request,response)=>{
    collectionbrand.insert(request.body,(error,result)=>{
        if(error){
            return response.status(500).send(error)
        }
        response.send(result)
    })
})
app.get("/brand",(request,response)=>{
    collectionbrand.find({}).toArray((error,result)=>{
        if(error){
            return response.status(500).send(error)
        }
        response.send(result)
    })
    
})
app.post("/device",(request,response)=>{
     collectiondevice.insert(request.body,(error,result)=>{
        if(error){
            return response.status(500).send(error)
        }
        response.send(result)
     })
})
app.get("/device",(request,response)=>{
    collectiondevice.find({}).toArray((error,result)=>{
        if(error){
            return response.status(500).send(error)
        }
        response.send(result)
    })
})