var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express Application ' });
});

router.get('/abc', function(req, res, next) {
  res.send("hello");
});

module.exports = router;
