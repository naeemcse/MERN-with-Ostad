const express = require('express');
const router = require('./src/routes/api');
const app = express();

// Security middleware
const rateLimit = require('express-rate-limit')
const helmet =  require('helmet')
const cors = require('cors')
const mongoSanitize = require('express-mongo-sanitize')
const xss = require('xss-clean')
const hpp = require('hpp')


// Security middleware Implementation
app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(mongoSanitize())
app.use(xss())
app.use(hpp())

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})
app.use(limiter);


app.use('/api', router);

// Undefined routes
app.use('*',(req, res) => {
    res.status(404).json({status: "error", message: "Invalid route"});
} );

module.exports = app;

