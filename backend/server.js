const express = require('express');
const port = 4000;
require("./conn");
const router = require('./routers/routers');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use('/app',router);

app.listen(port, () => {
    console.log('Server starded...')
})