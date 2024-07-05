//import the express package
const express = require('express')
//create an app
const app = express()

//make sure app can identify json
app.use(express.json());
//get request

app.get('/', function (req, res) {
  const clientIp = req.ip;
    //server response
    console.log('This request is from', clientIp);
    console.log('body', body);
  res.send('Hey yoh');
});

app.post('/', function (req, res) {
  const clientIp = req.ip;
  const body = req.body;
    //server response
    console.log('This request is from', clientIp);
    console.log('body', body);
  res.json({message: 'Thank you'});
});

//post request
app.post('/users', (req, res) => {
  const body = req.body;
  delete body.password
  console.log(body);
  res.json({message: "registered successfully", data: body});
})

app.post('/login', (req, res) => {
  const body = req.body;
  delete body.password
  console.log(body);
  res.json({message: "login successful", data: body});
})

//start server
app.listen(3000, function(){
    console.log('the server is running');
})