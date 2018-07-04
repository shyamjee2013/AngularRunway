
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

// Login api
  app.get('/logincheck', function (request, response) {
      debugger;
    var loginUserName = request.query.user;
    var loginUserPassword = request.query.password;

    if(loginUserName == 'amt2015' && loginUserPassword == 'angular6')
    {

        var data =[{
            "technology":
                    {
                        "angular":
                            [
                                { "id": "1001", "topic": "Component" },
                                { "id": "1002", "topic": "Directives" },
                                { "id": "1003", "topic": "2 way Binding" },
                                { "id": "1004", "topic": "NgModel" },
                                { "id": "1005", "topic": "Directives" },
                                { "id": "1006", "topic": "Angular Life Cycle" },
                                { "id": "1007", "topic": "Pipes" }                                
                            ]
                    }
        }]
        return response.send({ error: true, message: 'Login sucess..',data })
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
