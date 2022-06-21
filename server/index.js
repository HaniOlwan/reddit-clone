const app = require('./app');

// const port = app.get('PORT');
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
