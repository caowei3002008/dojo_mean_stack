var express = require('express');
var router = express.Router();
var session = require('express-session');

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index');
});

router.post('/results', function(req, res, next) {



    req.session.name = req.body.name;
    req.session.location = req.body.location;
    req.session.language = req.body.language;
    req.session.comment = req.body.comment;

    const surveyResult ={
        name: req.session.name,
        location:  req.session.location,
        language:req.session.language,
        comment:req.session.comment
    };





    res.render('info', {info: surveyResult});
});

module.exports = router;
