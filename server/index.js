const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router');

const app = express();

app.use(bodyParser.json());

router(app);

app.listen(8080, () => {
  console.log('server listening to http://localhost:8080');
});
