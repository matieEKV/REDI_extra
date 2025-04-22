
const http = require('node:http'); 

const server = http.createServer((req, res) => {  
    res.writeHead(200, {'content-type':'application/json', 'Access-Control-Allow-Origin': '*'}); 
    res.end(JSON.stringify({ 
        data:`Quote of the day: 
        Be yourself; everyone else is already taken. 
        by Oscar Wilde`
    }));
});
server.listen(8080); 