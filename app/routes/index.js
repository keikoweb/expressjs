var express = require('express');
var router = express.Router();

router.get("/", function(req, res){
  res.send(`
      <link rel="stylesheet" type="text/css" href="css/style.css">
      <h1>Welcome</h1>
      <img src="/images/misc/background.jpg" alt="background" style="heigh: 300px;">
      <p>Roux Academy Meetups put together artists from all walks of life</p>
  `);
  res.send('<h1>Roux Academy Meetups</h1>');
});

module.exports = router;
