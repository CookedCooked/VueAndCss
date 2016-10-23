var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/**
*  去测试demo页面
*/
router.get('/demo',function(req,res,next){
   res.render('demo/template',{});
});

/**
 * 去测试页面
 */
router.get('/showData',function(req,res){
    res.render('test/template',{});
});

router.get('/index',function(req,res){
    res.render('index',{});
});

module.exports = router;
