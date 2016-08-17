<template>
    <div id='content'>
        <h3>网站管理</h3>
        <vuetable
                api-url='/background/api/getsiteinfo'
                table-wrapper='#content'
                :fields='columns'
                :item-actions='itemActions'
        ></vuetable>
    </div>
</template>
<style>

</style>
<script>
    var vueTable=require('vuetable');
    export default{
        data:function(){
            return {
                columns:[
                        'text',
                        'title',
                        'url',
                        '_id'
                ],
                itemActions:[
                    {name:'view',label:'',icon:'zoom icon',class:'btn'},
                    {name:'edit',label:'',icon:'zoom icon',class:'btn'},
                    {name:'delete',label:'',icon:'zoom icon',class:'btn'}
                ]
            }
        },
        components:{
            'vuetable':vueTable
        },
        methods:{
            viewProfile:function(id){
                console.log(id);
            }
        },
        events:{
            'vuetable:action':function(action,data){
                switch(action){
                    case 'view':
                        this.viewProfile(data.text);
                        break;
                    case 'edit':
                        console.warn(data.text);
                        break;
                    case 'delete':
                        console.error(data.text);
                        break;
                    default:
                }
            },
            'vuetable:load-error': function(response) {
                console.log('Load Error: ', response)
            }
        }
    }
</script>
