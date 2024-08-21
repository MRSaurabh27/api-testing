const express = require('express');
const app = express();
app.use(express.json());
const PORT = 3000;
let d = {};

app.post('/ism1/test/jsonreadapi', (req, res)=> {
    try {
        d = req.body;
        res.status(200).send(d);
    } catch (err) {
        res.status(400).send(err);
    }
})

app.get('/ism1/test/jsonreadapi', (req, res)=> {
    try {
        res.status(200).send(d);
    } catch (err) {
        res.status(400).send(err);
    }
})

app.get('/', (req, res)=> {
    try {
        res.status(200).send({ msg: "Server is Up and running!" });
    } catch (err) {
        res.status(400).send(err);
    }
})

app.listen(PORT, ()=> {
    console.log("Server is Live on  PORT: "+PORT);
})