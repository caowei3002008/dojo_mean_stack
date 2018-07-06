// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
// creating a server using http module:
var server = http.createServer(function (request, response){
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);
    // this is how we do routing:
    if(request.url === '/car.jpg') {
        fs.readFile('./images/cars.jpg', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'images/jpg'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    else if(request.url === '/cat.jpg') {
        fs.readFile('./images/cat.jpg', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'images/jpg'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }

   
    else {
        response.writeHead(404);
        response.end('File not found!!!');
    }
});
// tell your server which port to run on
server.listen(7777);
// print to terminal window
console.log("Running in localhost at port 7777");