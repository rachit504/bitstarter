var express = require('express');
var fs = require('fs');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  var buf = fs.readFile('index.html','utf8');
  //var string = buf.toString();
  response.send(buf);
});
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
