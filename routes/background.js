var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.send('这是后台测试页面')
  //res.render('index', { title: '川藏管理区' });
});

router.get('/singin',function(req,res,next){
	res.render('backsingin');
});

module.exports = router;
