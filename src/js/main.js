var　Router = require('vue-router');


//引入视图组件
var Index=require('index.vue'),
    SiteNav=require('sitenav.vue'),
    Singin=require('singin.vue');

var router=new  Router();

router.map({//注册路由
    //首页
    '/':{
        component:Index
    },
    //网址导航
    '/sitenav':{
        component:SiteNav
    },
    //登录页面
    '/singin':{
        component:Singin
    }
});

router.start(app,'#app');