require('../css/main.css');

var　Router = require('vue-router');
var App=require('./app.vue');
var vueResource=require('vue-resource');
Vue.use(vueResource);

Vue.use(Router);
//引入视图组件
// var Index=require('./index.vue'),
//     Sitenav=require('./sitenav.vue'),
//     Singin=require('./singin.vue')

var router=new  Router();

router.map({//注册路由
    //首页
    '/':{
        component:function(resolve){
            require(['./index.vue'],resolve)
        }
    },
    //网址导航
    '/sitenav':{
        component:function(resolve){
            require(['./sitenav.vue'],resolve)
        }
    },
    '/downloadSoft':{
        component:function(resolve){
            require(['./downloadSoft.vue'],resolve)
        }
    },
    //登录页面
    '/singin':{
        component:function(resolve){
            require(['./singin.vue'],resolve)
        }
    }
});

router.start(App,'#app');