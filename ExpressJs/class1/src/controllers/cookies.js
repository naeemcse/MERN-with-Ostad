// Set Cookies
exports.setCookie = (req,res)=>{
    res.cookie('token','token nai');
    // res.cookie('remember', '1', { expires: new Date(Date.now() + 900000), httpOnly: true })
    res.send("Successfully set cookie");
}
exports.removeCookie = (req,res)=>{
    res.clearCookie('token');
    res.send("Successfully remove cookie");

}