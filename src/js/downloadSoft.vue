<template>
    <div class='container'>
        <div class='softlist' >
            <div class="list-group">
                <a class="list-group-item" v-for='item in softInfoes' :href='item.url'>
                    {{item.text}}
                    <span class='badge'>{{item.downloadCount}}</span>
                </a>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .softlist{
        margin-top:35px;
    }
</style>
<script>
    export default{
        data:function(){
            return{
                softInfoes:[]
            }
        },
        ready:function(){
            this.$http.get('/api/softInfo/list')
                    .then(function(result){
                        this.softInfoes=result.data.returnValue;
                    })
        }
    }
</script>
