const express = require("express");

const routeRequests = require('./router');

const app = express();

app.set('view engine', 'ejs');
app.set(express.static('public'));

routeRequests(app);

app.listen(4040, (req, res)=>{
    console.log('server running at http://localhost:4040');
})