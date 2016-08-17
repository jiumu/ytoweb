var express = require('express');
var router = express.Router();
var RestResult=require('../dataTypes/RestResult.js');
var passport=require('passport');
var passportStrategy=require('../common/passportStrategy');
var AdminUser=require('../models/AdminUser.js').AdminUserModel;
var SiteInfoModel=require('../models/SiteInfo').SiteInfoModel;

//权限检查
function isAuthenticated(req,res,next){
    if(req.isAuthenticated()) return next();
    if(req.xhr){
        var restResult=new RestResult();
        restResult.errorCode=RestResult.AUTH_ERROR;
        restResult.returnValue='认证错误,未登录或无相应权限';
        res.json(restResult);
    }
    res.redirect('/background/singin');
}


/* GET home page. */
router.get('/singin', function(req, res, next) {
    var msg='未登录,没权限';
    if(req.query.errmsg){
        msg=req.query.errmsg;
    }
  res.render('bg_singin', { msg: msg });
});


router.post('/singin',function(req,res,next){
    passport.authenticate(passportStrategy.bg_local,
        function(err,user,info){
            if(err) {return next(err);}
            if(!user){return res.render('bg_singin',{msg:info.message});}
            user.lastLoginTime=new Date();
            user.save();
            req.login(user,function(err){
               if(err) return next(err);
                res.redirect('/background');
            });
        })(req,res,next);
});
router.all('/*',isAuthenticated);
router.get('/',function(req,res,next){
    res.render('bg_index',{title:'后台管理'});
});

router.get('/api/getsiteinfo',function(req,res,next){
    SiteInfoModel.find(function(err,sites){
        if(err){return next(err);}
        var restResult=new RestResult();
        restResult.errorCode=RestResult.NO_ERROR;
        restResult.returnValue='查询成功';
        restResult.returnValue=sites;
        res.json(restResult);
    })
})
module.exports = router;
