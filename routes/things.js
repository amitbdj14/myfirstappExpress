var express = require('express');
var router = express.Router();

var app=express();


app.get('/:id', function(req, res){
    res.send('The id you specified is '+ req.params.id);
 });
 app.get('/things/:name/:id', function(req, res) {
    res.send('id: ' + req.params.id + ' and name: ' + req.params.name);
 });

 app.get('/things/:id([0-9]{5})', function(req, res){
    res.send('id: ' + req.params.id);
 });
 app.listen(3060);
//export this router to use in our index.js
module.exports = router;