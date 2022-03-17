const express = require("express");
const mongoose = require("mongoose");
const url = 'mongodb://localhost/api-info';

const app = express();

mongoose.connect(url)   //for avoiding warning
const con = mongoose.connection;

con.on('open', function(){
    console.log("connected.....");
})

app.use(express.json());

const api = require('./controller/api');
app.use('/api',api);
app.listen(9000, () => {
    console.log("server is running on port 9000");
})