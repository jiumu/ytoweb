var express = require('express');
var router = express.Router();
var passport = require('passport')
    , LocalStrategy = require('passport-local').Strategy;

passport.use('bg_local', new LocalStrategy(
    function (username, password, done) {
        var user = {
            id: '1',
            username: 'admin',
            password: 'admin'
        }; // 可以配置通过数据库方式读取登陆账号
        if (username !== user.username) {
            return done(null, false, { message: '用户名错误' });
        }
        if (password !== user.password) {
            return done(null, false, { message: '密码错误' });
        }
        return done(null, user);
    }
));
function isAuthenticated(req,res,next){
    if(req.isAuthenticated()) return next();
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
    passport.authenticate('bg_local',
        function(err,user,info){
            if(err) {return next(err);}
            if(!user){return res.render('bg_singin',{msg:info.message});}
            req.login(user,function(err){
               if(err) return next(err);
                res.redirect('index');
            });
        })(req,res,next);
});
router.all('/*',isAuthenticated);
router.get('/index',function(req,res,next){
    res.render('bg_index',{title:'后台管理'});
});
module.exports = router;
