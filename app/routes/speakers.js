var express = require('express');
var router = express.Router();

//Speakers
router.get("/speakers", function(req, res){
  var info ='';
  dataFile.speakers.forEach(function(item){
    info += `
    <li>
      <h2>${item.name}</h2>
      <p>${item.summary}</p>
    </li>
    `;
  });
  res.send(`
      <h1>Roux Academy Meetups</h1>
      ${info}
  `);
  res.send('<h1>Roux Academy Meetups</h1>');
});

//Speakers/:speakerid
router.get("/speakers/:speakerid", function(req, res){
  var speaker = dataFile.speakers[req.params.speakerid];
  res.send(`
    <h1>${speaker.title}</h1>
    <h2>with ${speaker.name}</h2>
    <p>${speaker.summary}</p>
  `);
});

module.exports = router;
