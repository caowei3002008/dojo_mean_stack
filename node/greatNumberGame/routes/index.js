var express = require('express');
var router = express.Router();
var session = require('express-session');

/* GET home page. */
router.get('/', function(req, res, next) {

  if(!req.session.number){
      req.session.number = Math.floor(Math.random()*100) +1;
  }
  if(!req.session.flag){
    req.session.flag = false;
  }
  if(!req.session.meg){
    req.session.meg = null;
  }
  console.log(req.session.number);
  res.render('index', {flag: req.session.flag, number: req.session.number, meg: req.session.meg});
});

router.post('/guess', function(req,res,next){
  if(req.session.number == req.body.number){
      req.session.flag = true;
      req.session.meg = req.session.number + " was the number!"
  }else if(req.session.number > req.body.number){
      req.session.meg = "Too low!"

  }else if(req.session.number < req.body.number){
      req.session.meg = "Too high!"
  }else if(!req.body.number){
      req.session.number = Math.floor(Math.random()*100) +1;
      req.session.meg = null;
      req.session.flag = false;

  }
    res.redirect('/');
});



module.exports = router;
