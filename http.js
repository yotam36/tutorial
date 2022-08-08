const http = require('http');

const server = http.createServer((req,res)=>{
    //req- incoming request
    //res- outgoing request

    if (req.url === '/'){
        res.end('Welcome to our home page');
    }
    else if (req.url === '/about'){
        res.end('this is the about page');
    }else{

    res.end(`<h1>Ooops</h1>
    <p>we cant find the page you are looking for</p>
    <a href='/'>Back Home</a>`)}
})

server.listen(3000);
