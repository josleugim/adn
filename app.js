'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const Helpers = require('./server/utilities/Helpers');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

require('./server/routes/mutation')(app);

app.listen(8080, () => {
    console.log('Nodemon is running the app on PORT:', 8080);
});

// module.exports = app;

/*
const noMutation = ["A T G C G A", "C A G T G C", "T T A T T T", "A G A C G G", "G C G T C A", "T C A C T G"];*/
/*const mutation = ['A T G C G A', 'C A G T G C', 'T T A T G T', 'A G A A G G', 'C C C C T A', 'T C A C T G'];
Helpers.sanitize(mutation)
    .then(Helpers.diagonalToHorizontal)
    .then(res => console.log(res))
    .catch(err => console.error(err));*/

