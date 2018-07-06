var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('cats');
});

router.get('/cat1', function(req, res, next) {
    var catDetails = {
        Favorite_food: "Spaghetti",
        Age : 3,
        Sleeping_spots : ["under the bed", "in a sunbeam"]
    }

    // console.log(catDetails.Sleeping_spots[0]);
    res.render('catDetails', {catData: catDetails});
});

module.exports = router;