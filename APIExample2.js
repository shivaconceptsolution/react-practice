const Express = require("express");
const BodyParser = require("body-parser");
var cors = require('cors')
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const CONNECTION_URL ="mongodb://localhost:27017/" ;
const DATABASE_NAME = "ecommerce";
var app = Express();
app.use(cors())
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
var database, collection;
app.listen(5000, () => {
    MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
        if(error) {
            throw error;
        }
        database = client.db(DATABASE_NAME);
        collection = database.collection("customer");
        collection1 = database.collection("reg");
        console.log("Connected to `" + DATABASE_NAME + "`!");
    });

});

app.post("/customer", (request, response) => {
    collection.insert(request.body, (error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result.result);
    });
});
app.get("/customer", (request, response) => {
    collection.find({}).toArray((error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});
app.get("/customer/:id", (request, response) => {
    collection.find({"_id": new ObjectId(request.params.id) }).toArray((error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});
app.put("/customer/:id", (request, response) => {
    collection.updateOne({ "_id": new ObjectId(request.params.id) },{$set:request.body}, (error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result.result);
    });
});

app.delete("/customer/:id", (request, response) => {
    collection.remove({ "_id": new ObjectId(request.params.id) }, (error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});

app.post("/signup", (request, response) => {
    collection1.insert(request.body, (error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result.result);
    });
});
app.post("/login", (request, response) => {
   
    collection1.findOne(request.body, (error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        var s ="";
        if(!result)
        {
            s = "0";
            console.log("login fail")
        }
        else
        {
            s = "1";
            console.log("login pass" + result) 
        }
        const responseData = {
            message:s
        }
        response.send(responseData);
        
    });
});
