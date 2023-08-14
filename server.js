const express = require('express');
const app = express();

app.get('/api/:date/', (req, res) => {
    let date;
    if(req.params.date.indexOf('-') !== -1)
        date = new Date(req.params.date);
    else
        date = new Date(parseInt(req.params.date));

    if(date.toString() === "Invalid Date")
        date = new Date(Date.now());

    res.json({ "unix": date.getTime(), "utc": date.toString()});
})

app.use('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
})

app.listen(3001, () => {console.log("Listening")});