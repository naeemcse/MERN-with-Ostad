exports.demo=(req,res)=>{
    res.send("Hello Najmul islam Naeem ");
}
exports.home=(req,res)=>{
    res.send("<h1> Home Page</h1>");
}

exports.details = (req,res)=>{
    res.send("<h1> Details Page</h1>");
}

exports.post=(req,res)=>{
    res.send("<h1> Post Page</h1>");
}