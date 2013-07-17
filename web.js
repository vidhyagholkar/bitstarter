var express = require('express')
, fs = require('fs')
, app = express.createServer(express.logger())
, buffer;


app.get('/', function(request, response) {
buffer = new Buffer(fs.readFileSync('index.html','utf-8'))
response.send(buffer.toString())
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
