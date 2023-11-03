var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('equipment', { title: 'Search Results equipment' });
});

module.exports = router;