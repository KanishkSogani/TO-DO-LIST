const express = require('express');
const bodyparser = require('body-parser');
var app = express();

app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));

app.use(express.static('public'))
var example = 'working';
var items = [];

app.get('/',(req,res)=>{
    res.render('list',{ejes:items})
});

app.post('/',(req,res) => {
    var item = req.body.ele1;
    items.push(item);
    res.redirect('/');
})

app.listen(3000,()=>{
    console.log("Server is running");
})