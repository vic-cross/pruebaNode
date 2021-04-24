
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('leasim has a big black dick in his ass!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
