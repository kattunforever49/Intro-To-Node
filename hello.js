var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function(req, res)
{
    var q = url.parse(req.url, true);
    var fileName = "."+q.pathname;
    if(fileName == './'){fileName = './index';}

    fileName = fileName + ".html";
    fs.readFile(fileName, function(err, data)
    {
        if(err){
            res.writeHead(404, {'Content-TypeError': 'text/html'});
            return res.end("404 not found");
        }
        res.writeHead(200, {'Content-TypeError': 'text/html'});
        res.write(data);
        return res.end();
    });  
    
}).listen(8080);