const http = require('http')
const html = require('fs').readFileSync('index.html');

const port = 80

const server = http.createServer((request, response) => {
  response.writeHead(200,{'Content-Type':'text/html'});
  response.end(html);
})

server.listen(port)

console.log(`Server running at http://localhost: ${port}`)
