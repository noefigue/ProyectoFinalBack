
const express = require('express');
const cors = require ('cors');
const logger = require ('morgan');


const indexRouter = require ('./routes/index')
const{connect}=require('./db/db');
const apiRouter = require('./routes/api');
const app = express()

app.use(cors());
app.use(logger('dev'));
app.use(express.json());

app.use('/ver', indexRouter)
app.use('/api', apiRouter)

connect();

module.exports = app
