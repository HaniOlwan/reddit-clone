const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const router = require('./routes');
const { port } = require('../config');

const app = express();
app.use(cookieParser());
app.use(express.json());
app.set('PORT', 3000);
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(router);

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send(err);
});

module.exports = app;
