const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
        
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./controllers/Client')(app);
require('./controllers/Product')(app);
require('./controllers/Rent')(app);

app.listen(8000);