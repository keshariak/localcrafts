var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/product', function(req, res, next) {
  res.render('productpage', { title: 'Express' });
});
router.get('/loginpage', function(req, res, next) {
  res.render('loginpage', { title: 'Express' });
});
router.get('/registerpage', function(req, res, next) {
  res.render('registerpage', { title: 'Express' });
});




module.exports = router;
