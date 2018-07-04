
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
        { DefaultApi:"http://localhost:8080/" },
        { TopicToStudy: "http://localhost:8080/topic" },
        { ForLogin:"http://localhost:8080/logincheck?user=amt2015&password=angular6" }        
    ]    
    console.log("Data coming from server..");
    return response.send(data);
     //return res.send({ error: true, message: 'hello' })
 });

 app.get('/topic', function (request, response) {

    var data =[{
        "angular":
        [
            { "id": "101", "topic": "Log Out Session" },
            { "id": "102", "topic": "Token Authentication" },
            { "id": "103", "topic": "Data Insertion in Mongo" },
            { "id": "104", "topic": "Stored Procedure calling in Mongo" },
            { "id": "105", "topic": "Dropdown binding" },
            { "id": "106", "topic": "Reset Password" },
            { "id": "107", "topic": "Forms and Template Driven Form" },
            { "id": "108", "topic": "Angular Life Cycle" },
            { "id": "109", "topic": "Parent Child Relation-ship" },
            { "id": "110", "topic": "@Input/ Output" },
            { "id": "111", "topic": "Angular Life Cycle" },
            { "id": "112", "topic": "Hosting Angular Application and Express JS Service and Mongo Database" }
        ]
    }]
    return response.send(data);
});

  // Login api
  app.get('/logincheck', function (request, response) {
      debugger;
    var loginUserName = request.query.user;
    var loginUserPassword = request.query.password;

    if(loginUserName == 'amt2015' && loginUserPassword == 'angular6')
    {
        var data =[
            { username:"amt2015",Password:"angular6",profession:"software developer"}
        ]
        return response.send(data);
    }
    else
    {
        console.log(loginUserName);
        return response.send({ error: true, message: 'Login failed...wrong UserName and Password.' })
    }
 });

 
 app.listen(8080, function () {
    console.log('Node app is running on port 8080');
});
