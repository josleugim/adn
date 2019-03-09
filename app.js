'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const Helpers = require('./server/utilities/Helpers');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

require('./server/routes/mutation')(app);
require('./server/routes/stats')(app);

app.listen(8081, () => {
    console.log('Nodemon is running the app on PORT:', 8081);
});

