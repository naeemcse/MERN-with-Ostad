const express = require('express');
const router = express.Router();


const DemoController = require('../controllers/DemoController');
const head= require('../controllers/header');
//  Receive cookies file
const cookies=require('../controllers/cookies');


// All possible path
// GET method
router.get('/demo',DemoController.demo);
router.get('/home',DemoController.home)
router.get('/details',DemoController.details);

// POST Method
// simple post method
router.post('/post',DemoController.post);
// post method with URL Query
// post url was: http://localhost:3020/api/search?name=naeem
router.post('/search',(req,res)=>{
   const name = req.query.name;
   res.send(name); // রিসিভ করা নামটা কে আমরা দেখাবো
})

// POST method with Header Property
router.post('/search',(req,res)=>{})

// Header set and get
router.post('/getHeader',head.getHeader )
router.get('/setHeader',head.setHeader);

// Set cookies
router.get('/setcookies',cookies.setCookie)
router.get('/removeCookies',cookies.removeCookie)



// Post Apllication wiht JSON
var bodyParsre = require('body-parser');
router.use(bodyParsre.json()) ;
router.post('/jsonPost',(req,res)=>{
   let jsonData= req.body;
   let jsonString= JSON.stringify(jsonData);
   res.send(jsonString);
   res.end("successfully inserted json")
})

// Post and Multiple Form Data
var multer = require('multer');
var multer = multer();
router.use(multer.array())
router.use(express.static('public'));
router.post('/upload',(req,res)=>{
   let jsonData=req.body;
   res.send(JSON.stringify(jsonData));
})


module.exports = router;