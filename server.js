const express = require("express");
const bp = require('body-parser')
const app = express();
const PORT = 3000;

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.status(200).send('Hello World')
})

app.post('/', (req, res) => {
  //console.log('request received was', req)
  console.log('req body was', req.body)
  console.log('req params were', req.params)
  console.log('req query was', req.query)
  let textBody = JSON.stringify(req.body);
  res.status(200).send('Body received was \n' + textBody)
})

app.get('/json', (req, res) => {
  res.status(200).send({'key': 'value'})
})

app.listen(PORT, ()=> {
  console.log(`listening on port ${PORT}`)
});