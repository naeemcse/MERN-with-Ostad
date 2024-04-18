var fs = require('fs') ;
var http=require('http') ;
var server = http.createServer((req,res)=>{

   // Asynchronous 
   if(req.url=="/rename")
   fs.rename("demo.txt","new_renamed.txt",function(error){
if(error){
    res.writeHead(200,{"Content-Type":"text/html"});
       res.write("Failded to rename file  ");
       res.end() ; 
}else{
    res.writeHead(200,{"Content-Type":"text/html"});
       res.write("Rename success ");
       res.end() ; 
}
      
   })

   // Synchronous 
   if(req.url=="/sync"){
    let result = fs.renameSync("as.txt","new_asyn.txt");
        if(result){
            res.writeHead(200,{"Content-Type":"text/html"});
            res.write("Rename success ");  
               res.end() ; 
        }else{
            res.writeHead(200,{"Content-Type":"text/html"});
            res.write("Failded to rename file  ");
               res.end() ; 
        }
   }


}) ;
server.listen(4040,()=>{
   console.log("Server is running on port: 4040")
})