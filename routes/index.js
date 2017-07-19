
var express = require('express');
var router = express.Router();
var request = require('request');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });



});

//Get token
router.get('/token', function(req, res, next){
  //go to url and get the token.
  //res.render('token', {title:'OCR Token'});
  request({
    uri: 'http://localhost:52525/api/Account/token'
  },
  function(error, response, body) {
    if(!error && response.statusCode == 200) {
    //  console.log(body);

    res.send(body);

    }
  }
)
});


//Get Token
/*
client.get("http://localhost:52525/api/Account/token", function (data, response){
  //parsed response body as js object
  console.log(data);
  //raw response
  console.log(response);
});
*/
// registering remote methods


module.exports = router;
