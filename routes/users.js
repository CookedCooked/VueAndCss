var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/index', function(req, res, next) {
  res.send('respond with a resource');
  //res.render("/demo/template");
});

module.exports = router;
