const express = require('express');
const dotenv = require('dotenv');

require('dotenv').config()
const app = express();
const port = 4000;


app.get('/',(req,res) => {
    res.send('Hello world');
});

app.get('/twitter',(req,res) => {
    res.send('Lovishjindal.cośkm');
});

app.get('/login',() => {
    res.send('<h1>please login at chai aur code</h1>');
});

 app.get('/youtube',(req,res) => {
    res.send("<h2>Chai or code</h2>");
 });

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`);
});