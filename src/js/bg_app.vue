<template>
    <div class="warp" id='bg_main'>
        <div class="navbar navbar-inverse">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand" href='#'>
                        <span class="first">圆通速递</span>
                        <span class='second'>川藏管理区</span>
                    </a>
                </div>
            </div>
        </div>
        <sidebar></sidebar>
        <div class="content">
            <ul class="breadcrumb">
                <li href='#'>Home</li>
                <span class='divider'>/</span>
                <li class="active">测试</li>
            </ul>
            <div class="container-fluid">
                <router-view></router-view>
            </div>

        </div>

    </div>
</template>

<script>
    var Sidebar= require('./bg_sidebar.vue');
    export default{
        el:function(){
            return '#bg_main';
        },
        components:{
            'sidebar':Sidebar
        }
    }
</script>
<style scoped>
    .content{
        min-width:400px;
        position:relative;;
        min-height:800px;
        background:#fff;
        margin-left:240px;
    }
    .header{
        background-color:#e6e6e6;
        border-bottom:1px solid #cccccc;
        border-top:1px solid #ffffff;
        border-left:1px solid #ffffff;
        padding:0em 1.25em;
    }
    .header .page-title{
        margin:1em 0em;
        padding:0em;
        line-height:1em;
        font-size:1.5em;
        color:#333;
    }
    .breadcrumb{
        box-shadow:none;
        background-clip:padding-box;
        background:#eee;
        border-bottom:1px solid #aaa;
        border-top:1px solid #fafafa;
        border-left:1px solid #fff;
        margin-bottom:.5em;
    }
    .navbar-brand .first {
        color: #ccc;
        font-style: italic;
    }
    .navbar-brand .second {
        color: #fff;
        font-weight: bold;
    }
</style>