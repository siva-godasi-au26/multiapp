const express = require('express');
const app = express();
const ejs = require('ejs');

app.use(express.static('public'));
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('index')
});

app.get('/hexacolor',(req,res)=>{
    res.render('hexacolor')
});

app.get('/tipcalculator',(req,res)=>{
    res.render('tipcalculator')
});

app.get('/flashcards',(req,res)=>{
    res.render('flashcards')
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);