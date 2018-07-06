var express = require('express');
var router = express.Router();
var session = require('express-session');

/* GET home page. */
router.get('/', function(req, res, next) {

  if(!req.session.counter){
      req.session.counter = 0;}
      res.render('index', { counter: req.session.counter });



});

router.post('/add1', function(req, res, next) {

    req.session.counter +=1;
    res.redirect('/');
});

router.post('/add2', function(req, res, next) {

    req.session.counter +=2;
    res.redirect('/');
});

router.post('/clear', function(req, res, next) {

    req.session.counter =0;
    res.redirect('/');
});

module.exports = router;


