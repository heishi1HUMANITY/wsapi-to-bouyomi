const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

app.use(express.static('./'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.post('/app/', (req, res) => {
    console.log(req.body.text);
    let uri = encodeURI(`http://localhost:50080/talk?text=${req.body.text}`)
    fetch(uri)
    .catch(e => console.error(e));
    res.send(JSON.stringify({condition: true}));
});
app.listen(8000, () => console.log('server is working at localhost:8000'));
