require('../lib/bootstrap/css/bootstrap.css');
require('../css/bg_main.css');
var Router=require('vue-router');
Vue.use(Router);
var bgApp=require('./bg_app.vue');

var router=new Router();

router.map({
   '/':{
       component:function(resolve){
           require(['./bg_index.vue'],resolve)
       }
   } 
});



router.start(bgApp,'#bgapp');
