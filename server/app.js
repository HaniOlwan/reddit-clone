const { join } = require('path');
const express = require('express');
const { port } = require('../config');
const router = require('./routes');

const app = express();
app.set('PORT', port);
app.use(express.urlencoded({ extended: false }));
// app.use(express.static(join(__dirname, '..', 'public')));
app.use(router);

module.exports = app;
