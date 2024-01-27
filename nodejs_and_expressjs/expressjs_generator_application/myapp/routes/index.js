var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/embedded_javascript', function(req, res, next) {
  res.render('embedded_js', { title: 'Embedd javascript' });
});



module.exports = router;
