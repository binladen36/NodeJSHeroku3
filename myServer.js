var express=require('express');
var app=express();
app.set('view engine','jade');
var port = process.env.PORT || 3000;

app.get('/',function(req,res)
{
res.render('index',
{title:'Anh',message:'Welcome',"book": {"name": "Hello", "price": 12.99}})
});

app.get('/test',function(req,res)
{
res.render('index',
{title:'Bnt',message:'Hi'})
});

var server=app.listen(port,function() {});