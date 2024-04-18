const http = require('http');
 
const myServer= http.createServer((req, res) => {
    if(req.url=="/"){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write('<h1> This is Home Page </h1>')
        res.end() ;
    } else if(req.url=="/about"){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write('<h1> This is About Page </h1>')
        res.end() ;
    }else if(req.url=="/contact"){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write('<h1> This is Contact Page </h1>')
        res.end() ;
    }
 
    
})
myServer.listen(5050,()=>{
    console.log("Server is Running")
})


