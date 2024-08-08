const express = require('express');
const router = express.Router();
const  helloController = require("../controlers/HelloController");

router.get("/" ,helloController.HelloGet);

router.post("/post", (req, res) => {
    res.send("Hello World! from Hello controller");
} );

module.exports = router;