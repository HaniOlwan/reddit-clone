const { join } = require('path');
const express = require('express');
const router = require('./routes');
const { port } = require('../config');

const app = express();
app.use(express.json());
app.set('PORT', port || 1000);
app.use(express.static(join(__dirname, '..', 'public')));
app.use(router);

module.exports = app;
