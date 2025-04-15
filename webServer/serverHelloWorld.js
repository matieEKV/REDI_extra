const http = require('node:http'); //required an 'http' module from node and stored in object http

const server = http.createServer((req, res) => {  // creating a server, takes a function as a paramter - this function takes request and response parameters (http. - like this. in Java)
    res.writeHead(200, {'content-type':'application/json'}); // writing header (HTTP status code (200 = successful), {type of data we are sending back, in this case it's application/json})
    res.end(JSON.stringify({ // ending the response and converting JS value to JSON string
        data:'Hello World' // converting an object 'key:value' into JSON string
}));
});
server.listen(8080); // telling the server to listen to a client at a port 8080