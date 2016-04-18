// API

var express = require('express');
var router = express.Router();

var candies = [
  {name: "Kit Kat"},
  {name: "Hershey's"},
  {name: "Crunch Bar"},
  {name: "Gummy Sharks"},
  {name: "Starburst"},
  {name: "Fruit Loops"}
];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(candies);
});

router.post('/', function(req, res, next) {
  candies.push(req.body);
  res.json(req.body);
});

module.exports = router;
