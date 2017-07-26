
var express = require('express');
var router = express.Router();
var request = require('request');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ActivePDF OCR' });

});


/* GET home page. */
router.post('/', function(req, res, next) {
  //res.render('index', {title: 'ActivePDF OCR'});
  $.ajax({
  url: 'http://localhost:62625/api/OCR/Conversion',
  type: 'POST',
  beforeSend: function (xhr) {
      xhr.setRequestHeader('Authorization', 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6Ind3dy5hY3RpdmVwZGYuY29tIiwibmJmIjoxNDk4NjcwODAwLCJleHAiOjE0OTg3NTcyMDAsImlhdCI6MTQ5ODY3MDgwMH0.g4UPfqs8zqGHCRTRcn7q_Nl8OrVqr8-r32FSGyFzUZ4');
  },
  data: {},
  success: function () { },
  error: function () { },
  });

});


//Get token
router.get('/token', function(req, res, next){
  //go to url and get the token.
  //res.render('token', {title:'OCR Token'});
  request({
    uri: 'http://localhost:62625/api/Account/token'
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
