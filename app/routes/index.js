var express = require('express');
var router = express.Router();

router.get("/", function(req, res){
  res.render('index');  // app/views
});

module.exports = router;
