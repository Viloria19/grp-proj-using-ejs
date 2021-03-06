const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=>{
    console.log(req.url, req.method);

    res.setHeader('Content-Type', 'text/html');

    //simple routes
    let path = './views/';
    switch(req.url){
        case '/':
            path += 'Homepage.html';
            res.statusCode = 200;
            break;
        case '/homePage':
            res.statusCode = 301;
            res.setHeader('Location', '/');
            res.end();
            break;
        case '/menu':
            path += 'menu.html';
            res.statusCode = 200;
            break;
        case '/cart':
            path += 'cart.html';
            res.statusCode = 200;
            break;
        case '/login':
            path += 'login.html';
            res.statusCode = 200;
            break;
        case '/register':
            path += 'register.html';
            res.statusCode = 200;
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }
    
    fs.readFile(path, (err, data) =>{
        if(err){
            console.log(err);
            res.end();
        }else{
            res.end(data);
        }
    })
});

server.listen(3000, 'localhost', () =>{
    console.log('listening for requests on port 3000');
});

