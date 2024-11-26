const express = require('express');
 const app = express();
 app.get('/', (req, res) => {
 res.send('<h1> SABIHA JARIHA</h1>');
 });
 module.exports = app;
