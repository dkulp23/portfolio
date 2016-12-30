'use strict';

var requestProxy = require('express-request-proxy');
var express = require('express');
var port = process.env.port || 3000;
var app = express();

var proxyGHrequest = function(request, response) {
  console.log(`Routing request for, ${request.params[0]}`);
  (requestProxy({
    url: `https://api.github.com/${request.params[0]}`,
    headers: {
      Authorization: `token ${process.env.GITHUB_TOKEN}`
    }
  }))(request, response)
};

app.get('/github/*', proxyGHrequest);

app.use(express.static('/'));

app.get('*', function(request, response) {
  console.log(`New request ${request.url}`);
  response.sendFile('index.html', {root: '.'});
});

app.listen(port, function(){
  console.log(`Listening on port ${port}!`);
});
