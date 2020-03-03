// Adapted from https://github.com/metafloor/bwip-js#nodejs-request-handler

// Simple HTTP server that renders barcode images using bwip-js.
const http   = require('http');
const bwipjs = require('bwip-js');

http.createServer(function(req, res) {
    // If the url does not begin /?bcid= then 404.  Otherwise, we end up
    // returning 400 on requests like favicon.ico.
    if (req.url.indexOf('/?bcid=') != 0) {
        res.writeHead(404, { 'Content-Type':'text/plain' });
        res.end('BWIPJS: Unknown request format.', 'utf8');
    } else {
        bwipjs.request(req, res); // Executes asynchronously
    }

}).listen(8080);
