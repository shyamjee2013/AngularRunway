
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
        return response.send({ error: true, message: 'Login sucess..' })
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
