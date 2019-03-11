var https = require('https');
function getAndPrintHTML(options)
{
  var bufferedData = '';
  https.get(options, function (response) {
    response.setEncoding('utf8');
    response.on('data', function (data) {
      bufferedData += data;
    });
    
    response.on('end', function() {
      console.log(bufferedData);
    });
  });
}
var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
  };
getAndPrintHTML(requestOptions)
