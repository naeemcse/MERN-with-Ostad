const express = require('express');
const router = express.Router();

const DemoController = require('../controllers/DemoController');

// All possible path
router.get('/demo',DemoController.demo);
router.get('/home',DemoController.home)

module.exports = router;

