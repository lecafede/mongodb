const MongoClient = require("mongodb").MongoClient;
   
const url = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(url, { useUnifiedTopology: true });
 
data_parse = async function () {
    let response = await fetch("https://www.shazam.com/shazam/v2/ru/UA/web/-/tracks/country-chart-UA?pageSize=200&startFrom=0");
    data = await response.json();
    for (i = 0; i < data.chart.length; i++) {
        var song = data.chart[i];
        number = i + 1;
        return song
        console.log('|' + number + '|' + " Ссылка: " + song.url)
        console.log('|' + number + '|' + " Название песни: " + song.heading.title + ' Исполнитель: ' + song.heading.subtitle)
    }
}();

mongoClient.connect(function(err, client){
      
    const db = client.db("parser");
    const collection = db.collection("data");
    let data = {data_parse};
    collection.insertOne(data, function(err, result){
          
        if(err){ 
            return console.log(err);
        } 
        console.log(result.ops);

        
        client.close();
    });
});