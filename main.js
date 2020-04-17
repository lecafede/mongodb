const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Denis:denis123456789@cluster0-utjrt.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const collection = client.db("parser").collection("parser_collection");
    let user = { name: "info", age: 23 };
    collection.insertOne(user, function(err, result) {

        if (err) {
            return console.log(err);
        }
        console.log(result.ops);
        client.close();
    });
    client.close();
});