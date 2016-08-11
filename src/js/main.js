var　Router = require('vue-router');

var Index=require('index.vue');
var router=new  Router();
router.map({
    '/':{
        component:Index
    }
})

router.start(App,'#app');