var express = require('express');
var router = express.Router();
var proj4 = require('proj4');

router.get('/', function(req, res, next) {

    let values = "";

    var firstProjection = "+proj=tmerc +lat_0=38 +lon_0=127.5 +k=0.9996 +x_0=1000000 +y_0=2000000 +ellps=GRS80 +units=m +no_defs"; //from
    var secondProjection = "+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs"; //to
    //I'm not going to redefine those two in latter examples.
    console.log(); // Convert 하려는 좌표
    console.log('GRS80_UTM-K.html');


    //출처: https://windingroad.tistory.com/26 [나의 Winding Road]


    res.render('loc', { title: proj4(firstProjection, secondProjection, [1104556.6371050898, 1691661.0486570774]) });
});


module.exports = router;
