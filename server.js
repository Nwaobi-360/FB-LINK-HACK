require('./config/dbconfig.js');
const express = require('express');
const app = express();
app.use(express.json());

const router = require('./router/fbroutes.js');

app.use('/api/v1', router);

const port = process.env.PORT || 6696;
app.get('/api/v1', (req, res) => {
    res.send('YOUR ACCOUNT HAS BEEN HACKED!')
}) 

app.listen(port, () => {
    console.log(`SERVER IS RUNNING ON PORT ${port}`)
}) 