var express = require('express');
var router = express.Router();

router.get("/feedback", function(req, res){

  res.render('feedback', {
    pageTitle: 'Feedback',
    pageID: 'feedback'
  });  // app/views
});

module.exports = router;
