/**
 * Created by Yx on 2016/8/17.
 */
var passport = require('passport')
    , LocalStrategy = require('passport-local').Strategy;
var AdminUserModel = require('../models/AdminUser.js').AdminUserModel;
var UserModel = require('../models/User.js').UserModel;
var passportStrategy = {};
passportStrategy.bg_local='bg_local';
passportStrategy.local='local';

passport.use('bg_local', new LocalStrategy(
    function (username, password, done) {
        AdminUserModel.findOne({username: username}, function (err, user) {
            if (err) {
                return done(err);
            }
            if (!user) {
                return done(null, false, {message: '没有此用户'})
            }
            if ((username !== user.username) || (password !== user.password)) {
                return done(null, false, {message: '用户名或密码错误'});
            }
            return done(null, user);
        });
    }));
passport.use('local',new LocalStrategy(
    function(usernam,password,done){
        UserModel.findOne({username:username},function(err,user){
            if (err) {
                return done(err);
            }
            if (!user) {
                return done(null, false, {message: '没有此用户'})
            }
            if ((username !== user.username) || (password !== user.password)) {
                return done(null, false, {message: '用户名或密码错误'});
            }
            return done(null, user);
        })
    }
));
module.exports = passportStrategy;