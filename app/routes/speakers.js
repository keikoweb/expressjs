var express = require('express');
var router = express.Router();

//Speakers
router.get("/speakers", function(req, res){
  var data = req.app.get('appData');
  var pagePhotos = [];
  var pageSpeakers = data.speakers

  data.speakers.forEach(function(item){
    pagePhotos = pagePhotos.concat(item.artwork);
  })
  res.render('speakers', {
    pageTitle: 'Speakers',
    artwork: pagePhotos,
    speakers: pageSpeakers,
    pageID: 'speakerList'
  });  // app/views
});

//Speakers/:speakerid
router.get("/speakers/:speakerid", function(req, res){
  var data = req.app.get('appData');
  var pagePhotos = [];
  var pageSpeakers = [];

  data.speakers.forEach(function(item){
    if (item.shortname == req.params.speakerid) {
      pageSpeakers.push(item);
      pagePhotos = pagePhotos.concat(item.artwork);
    }
  });

  res.render('speakers', {
    pageTitle: 'Speaker Info',
    artwork: pagePhotos,
    speakers: pageSpeakers,
    pageID: 'speakerDetail'
  });  // app/views
});

module.exports = router;
