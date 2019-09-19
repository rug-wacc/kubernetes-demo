'use strict';

const express = require('express');

// Constants
const PORT = 5000;

// App
const app = express();
app.get('/', (req, res) => {
  const hostname = process.env.HOSTNAME;

  console.log(`Hi! My hostname is: ${hostname}`)
  res.send(hostname);
});

app.listen(PORT);