// Set Header
exports.setHeader = (req,res)=>{
    res.append('name','Najmul Islam Naeem');
    res.end("successfull SetHeder");
}
// Get Headers
exports.getHeader = (req,res)=>{
    let name= req.headers.name ;
    res.send(name);
}
