
 const express = require('express');
 const app = express(); 
 const bodyParser = require('body-parser');

 // There is no use of below lines till now.
//  app.use(bodyParser.json());
//  app.use(bodyParser.urlencoded({
//      extended: true
//  }));
  
  
 // default api
 app.get('/', function (request, response) {
    var data = [
        { FirstTopic:"Angular" },
        { SecondTopic:"TypeScript" },
        { ThirdTopic: "Express JS" },
        { FourthTopic:"Mongo Database" }
    ]    
    console.log("Data coming from server..");
    return response.send(data);
     //return res.send({ error: true, message: 'hello' })
 });

    

 app.listen(8080, function () {
    console.log('Node app is running on port 8080');
});