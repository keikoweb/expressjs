var express = require('express');
var router = express.Router();

router.get("/", function(req, res){
  res.send(`
      <h1>Welcome</h1>
      <p>Roux Academy Meetups put together artists from all walks of life</p>
  `);
  res.send('<h1>Roux Academy Meetups</h1>');
});

module.exports = router;
