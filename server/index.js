const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;
// const axios = require('axios');

app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(process.cwd(), '/client/dist')));

app.route('/bundle')
  .get((req, res) => {
    res.sendFile(path.join(process.cwd(), '/client/dist/bundle.js'));
  });


app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on port ${port}`);
});
