const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()


const app = express ();
const PORT = porcess.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

const mongoose = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/networkDB'
mongoose.connect(
    mongouri.at,
    {
        useNewUrlParser: True,
        useUnifiedTopology:true
    }
);
