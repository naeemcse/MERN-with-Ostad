 var fs = require('fs') ;
 var http=require('http') ;
 var server = http.createServer((req,res)=>{

    // Asynchronous 
    if(req.url=="/")
    fs.readFile("Home.html",function(error,data){
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(data);
        res.end() ;
    })

    // Synchronous 
    if(req.url=="/about"){
        var myData = fs.readFileSync("Home.html");
        res.writeHead(200,{'Content-Type':"text/html"})
        res.write(myData) ;
        res.end();
    }


 }) ;
 server.listen(4040,()=>{
    console.log("Server is running on port: 4040")
 })