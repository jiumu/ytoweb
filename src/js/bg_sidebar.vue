<template>
    <div class='sidebar-nav'>
        <a class="btn-nav" v-for='item in menus' v-link='item.url'>{{item.text}}</a>
    </div>
</template>
<style scoped>
    .sidebar-nav {
        width: 228px;
        box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.9);
        float:left;
        position:absolute;
    }

    .sidebar-nav .btn-nav {
        border-top: 1px solid #4d4d4d;
        border-bottom: 1px solid #0d0d0d;
        border-left: none;
        color: #ddd;
        display: block;
        background: #333333;
        font-weight: normal;
        font-size: 1em;
        line-height: 2.5em;
        padding: 0em .25em;
        margin-bottom: 0px;
        text-shadow: none;
        text-transform: none;
        text-align: center;
    }
</style>
    a:link{
        text-decoration: underline;
    }
<script>
    export default{
        data: function () {
            return {
                menus: [
                    {
                        text: '用户管理',
                        url: '/userManage'
                    }, {
                        text: '网址管理',
                        url: '/siteManage'
                    }, {
                        text: '软件管理',
                        url: '/softManage'
                    }
                ]
            }
        }
    }
</script>
