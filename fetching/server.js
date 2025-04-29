
const http = require('node:http'); 
const getQuote = require('./quote');

const server = http.createServer((req, res) => {  
    res.writeHead(200, {'content-type':'application/json', 'Access-Control-Allow-Origin': '*'}); 
    const quote = getQuote();
    // console.log(JSON.stringify(quote));

    res.end(JSON.stringify(quote));
});
server.listen(8080); 