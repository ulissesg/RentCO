const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./controllers/Client')(app);
require('./controllers/Product')(app);
require('./controllers/Rent')(app);

app.listen(8000);