const http = require('http');
let {requestListener} = require('./callbackFile.js');
const server = http.createServer(requestListener);
const PORT = process.env.PORT || 4001;

server.listen(PORT)

