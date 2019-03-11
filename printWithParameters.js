var https = require('https');
var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
  };

function getAndPrintHTML(options)
{
  var bufferedData = '';
  https.get(requestOptions, function (response) {
    response.setEncoding('utf8');
    response.on('data', function (data) {
      bufferedData += data;
    });
    
    response.on('end', function() {
      console.log(bufferedData);
    });
  });
}

getAndPrintHTML(requestOptions)