const express = require("express");
require('dotenv').config();
const app = express();
const port = 8080;

app.use(express.static("public"));

app.use((req, res, next) => {
  if (req.headers.host === 'apousia.com') {
    return res.redirect(301, 'https://www.apousia.com' + req.url);
  }
  next();
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
