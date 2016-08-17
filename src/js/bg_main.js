require('../css/bg_main.css');
var Router=require('vue-router');
Vue.use(Router);
var bgApp=require('./bg_app.vue');

var router=new Router();

router.map({
   '/':{//后台首页
       component:function(resolve){
           require(['./bg_index.vue'],resolve)
       }
   } ,
    '/useranage':{//用户管理
        component:function(resolve){
            require(['./bg_userManage.vue'],resolve);
        }
    },
    '/siteManage':{//网址管理
        component:function(resolve){
            require(['./bg_siteManage.vue'],resolve);
        }
    },
    '/softManage':{//软件管理
        component:function(resolve){
            require(['./bg_softManage.vue'],resolve);
        }
    }
});



router.start(bgApp,'#bgapp');
