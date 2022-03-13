const path = require('path');
const express = require('express');
const router = require('./routes');
const { port } = require('../config');

const app = express();
app.use(express.json());
app.set('PORT', port || 1000);
app.use(express.static(path.join(__dirname, '..', 'public')));
// app.use(express.static(path.join(__dirname, '..', 'public', 'stylesheets')));

app.use(router);

module.exports = app;
