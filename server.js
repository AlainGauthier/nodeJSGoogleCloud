const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log('allo');
//  var shell = require('shelljs');
//  shell.exec('./first.sh 1');
  res.send('Hello from App Engine!');
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});