<template>
    <div class="warp" id='bg_main'>
        <router-view></router-view>
    </div>
</template>

<script>
    export default{
        el:function(){
            return '#bg_main';
        }
    }
</script>