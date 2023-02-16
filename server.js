const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'build')));


app.get('/testing', (req, res) => {
    res.send("good route")
});

app.listen(5000, () => {
    console.log(`Server is Listening on  5000...`)
});