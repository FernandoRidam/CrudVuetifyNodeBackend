const express = require('express');
const conn = require('./config/database');

const cors = require('cors');

const routes = require('./routes');

const app = express();

app.use( cors() );
app.use( express.json() );
app.use( routes );

const porta = process.env.PORT || 3333;

app.listen( porta );