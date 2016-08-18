var express = require('express');
var router = express.Router();
var RestResult=require('../dataTypes/RestResult.js');
var passport=require('passport');
var passportStrategy=require('../common/passportStrategy');
var AdminUser=require('../models/AdminUser.js').AdminUserModel;
var SiteInfoModel=require('../models/SiteInfo').SiteInfoModel;

//权限检查
function isAuthenticated(req,res,next){
    if(req.user){
        AdminUser.findOne({username:req.user.username},function(err,user){
            if(user.username===req.user.username&&user.password===req.user.password){
                return next();
            }
        });
    }
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
//router.all('/*',isAuthenticated);
router.get('/',function(req,res,next){
    res.render('bg_index',{title:'后台管理'});
});
//获取网址信息
router.get('/api/siteinfo/getlist',function(req,res,next){
    SiteInfoModel.find(function(err,sites){
        if(err){return next(err);}
        var restResult=new RestResult();
        restResult.errorCode=RestResult.NO_ERROR;
        restResult.returnValue='查询成功';
        restResult.returnValue=sites;
        res.json(restResult);
    })
});
router.get('/api/siteinfo/get',function(req,res,next){
    var id=req.query.id;
    if(id){
        SiteInfoModel.findOne({_id:id},function(err,site){
            if(err){return next(err);}
            var rest=new RestResult();
            if(site){
                rest.returnValue=site;
            }else{
                rest.errorCode=RestResult.TARGET_NOT_EXIT_ERROR;
                rest.errorReason='未查询到数据,目标不存在!';
            }
            res.json(rest);
        })
    }
})
router.post('/api/siteinfo/edit',function(req,res,next){
    SiteInfoModel.findOne({_id:req.body._id},function(err,site){
        var rest=new RestResult();
        if(err){
            rest.errorCode=RestResult.SERVER_EXCEPTION_ERROR;
            rest.errorReason='保存失败,mongodb异常';
            res.json(rest);
        }
        site.text=req.body.text;
        site.title=req.body.title;
        site.url=req.body.url;
        site.save();
        rest.returnValue=site;
        res.json(rest);
    });
});
router.post('/api/siteInfo/delete',function(req,res,next){
    var id=req.body.id;
    if(id){
        SiteInfoModel.remove({_id:id},function(err){
            if(err)return next(err);
            var rest=new RestResult();
            res.json(rest);
        })
    }
});
router.post('/api/siteInfo/add',function(req,res,next){
    var text=req.body.text,
        title=req.body.title,
        url=req.body.url;
    if(text!=''&&title!=''&&url!=''){
        var siteInfo=new SiteInfoModel();
        siteInfo.text=text;
        siteInfo.title=title;
        siteInfo.url=url;
        siteInfo.save(function(err,site){
            var rest=new RestResult();
            if(err){
                rest.errorCode=RestResult.SERVER_EXCEPTION_ERROR;
                rest.errorReason='增加数据错误';
            }else{
                rest.returnValue=site;
            }
            res.json(rest);
        });
    }
})

module.exports = router;
