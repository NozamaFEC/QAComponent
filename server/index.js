const express = require('express');
const path = require('path');

const app = express();
// const axios = require('axios');

app.use(express.static(path.join(process.cwd(), '/client/dist')));

const port = 5000;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on port ${port}`);
});
