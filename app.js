var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require('fs');
var session = require('express-session');
var flash = require('express-flash');
var passport = require('passport');
var routes = require('./routes/index');

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'img/favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: 'yto',
    name: 'yto280901',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 12000000
    }
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash())
//注册根路由
app.use('/', routes);
//初始化路由
initRoutes('./routes', '/');

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;


//===============华丽的分割线======================

//递归初始化路由
function initRoutes(dirPath, urlPath) {
    console.log('开始搜索文件夹' + dirPath);
    var files = fs.readdirSync(dirPath);
    var reg = /^(.*)\.js$/i;
    files.forEach(function (file) {
        var tempPath = dirPath + '/' + file;
        var stats = fs.statSync(tempPath);
        if (stats.isDirectory()) {
            var tempUrlPath = urlPath + file + '/';
            initRoutes(tempPath, tempUrlPath);
        } else {
            if (reg.test(file)) {
                console.log('发现路由文件并尝试注册:' + dirPath + '/' + file);
                var ph = RegExp.$1;
                app.use(urlPath + ph, require(dirPath + '/' + ph));
                console.log('注册路由成功:' + urlPath + ph);
            }
        }
    });
    console.log('注册路由完成!');
}
