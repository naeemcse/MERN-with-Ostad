exports.HelloGet = (req, res) => {
    res.status(200).json({status: "success", message: "Hello World! from Hello controller"});
}

exports.HelloPost = (req, res) => {

        res.status(200).json({status: "success", message: "Hello World! from port method in Hello controller"});
}