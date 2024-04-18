var fs = require('fs') ;
var http=require('http') ;
var server = http.createServer((req,res)=>{

   // Asynchronous 
   if(req.url=="/rename")
   fs.unlink("delet1.txt",function(error){
if(error){
    res.writeHead(200,{"Content-Type":"text/html"});
       res.write("Failded to delet file  ");
       res.end() ; 
}else{
    res.writeHead(200,{"Content-Type":"text/html"});
       res.write("deletsuccess ");
       res.end() ; 
}
      
   })

   // Synchronous 
   if(req.url=="/sync"){
    let result = fs.renameSync("delet2.txt");
        if(result){
            res.writeHead(200,{"Content-Type":"text/html"});
            res.write("delet success ");  
               res.end() ; 
        }else{
            res.writeHead(200,{"Content-Type":"text/html"});
            res.write("Failded to delet file  ");
               res.end() ; 
        }
   }


}) ;
server.listen(4040,()=>{
   console.log("Server is running on port: 4040")
})