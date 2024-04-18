var fs = require('fs') ;
var http=require('http') ;
var server = http.createServer((req,res)=>{

   // Asynchronous 
   if(req.url=="/")
   fs.writeFile("new_file.html","<html> <body> This is demo text  </body> </html>",function(error){
if(error){
    res.writeHead(200,{"Content-Type":"text/html"});
       res.write("Failded to make a new file  ");
       res.end() ; 
}else{
    res.writeHead(200,{"Content-Type":"text/html"});
       res.write("New html file id created ");
       res.end() ; 
}
      
   })

   // Synchronous 
   if(req.url=="/about"){
    let error = fs.writeFileSync("sync_file.txt","This is demo text to cheack Synchronous");

    if(error){
        res.writeHead(200,{"Content-Type":"text/html"});
           res.write("Failded to make a new file  ");
           res.end() ; 
    }else{
        res.writeHead(200,{"Content-Type":"text/html"});
           res.write("New text file id created ");
           res.end() ; 
    }
   }


}) ;
server.listen(4040,()=>{
   console.log("Server is running on port: 4040")
})