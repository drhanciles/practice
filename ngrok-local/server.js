var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('My Complaint Is');
})

var server = app.listen(3000, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at 3000", host, port)
})