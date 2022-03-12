const app = require('./app');

const port = app.get('PORT');

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
