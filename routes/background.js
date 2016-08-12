var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('bg_index', { title: '川藏管理区' });
});

router.get('/singin',function(req,res,next){
	res.render('bg_singin');
});

module.exports = router;
