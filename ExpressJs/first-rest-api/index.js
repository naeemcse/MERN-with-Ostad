
const dotenv = require('dotenv');
dotenv.config({path: './config.env'});

const port = process.env.RUNNING_PORT;
const app = require('./app');
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
} );