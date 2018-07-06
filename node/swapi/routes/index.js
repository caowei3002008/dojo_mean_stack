var express = require('express');
var axios = require('axios');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if(!req.session.mark){
      req.session.mark = "";
  }
  res.render('index');
});

router.get('/people', function(req, res, next) {
    req.session.mark = "people";
  axios.get('https://swapi.co/api/people')
      .then(data => {
        console.log(data);
        res.render("index", {data: data.data, mark: req.session.mark});
      })
      .catch(error =>{
        console.log(error);
        res.json(error);
      })
});

router.get('/planets', function(req, res, next) {
    req.session.mark = "planets";
    axios.get('https://swapi.co/api/planets')
        .then(data => {
            console.log(data);
            res.render("index", {data: data.data,  mark: req.session.mark});
        })
        .catch(error =>{
            console.log(error);
            res.json(error);
        })
});
router.post('/pre10', function(req,res,next){
  const url = req.body.preTen;
  axios.get(url)
      .then(data => {
          console.log(data);
          res.render("index", {data: data.data,  mark: req.session.mark});
      })
      .catch(error =>{
          console.log(error);
          res.json(error);
      })
});

router.post('/next10', function(req,res,next){
    const url = req.body.nextTen;
    axios.get(url)
        .then(data => {
            console.log(data);
            res.render("index", {data: data.data, mark: req.session.mark});
        })
        .catch(error =>{
            console.log(error);
            res.json(error);
        })
});

router.get('/getAllPlanets', function(req,res, next){
  var url = "";
  if(req.session.mark === "planets")  url = "https://swapi.co/api/planets";
  else url = "https://swapi.co/api/people";

  var allData = [];

    function getAllData(){
    return axios.get(url).then(function(data){
      allData.push.apply(allData,data.data.results);
      url = data.data.next;
      if(url != null){
          return getAllData();
      }else{
          res.render("index", {allData: allData});
      }

    })
        .catch(function(error){
            console.log(error);
            res.json(error);
        })
  }
    getAllData();




});
module.exports = router;
