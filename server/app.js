const path = require('path');
const express = require('express');
const router = require('./routes');
const { port } = require('../config');

const app = express();
app.use(express.json());
app.set('PORT', port || 3000);
app.use(express.static(path.join(__dirname, '..', 'public')));
// app.use(express.static(path.join(__dirname, '..', 'public', 'stylesheets')));

app.use(router);

// app.use((req, res, next) => {
//   const err = handleError({ msg: 'Page Not found', status: '400' });
//   console.log(err);
//   // next(err);
// });
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send(err);
});

module.exports = app;
