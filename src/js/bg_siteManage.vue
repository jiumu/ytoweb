<template>
    <div>
        <div class='orgbox'>
            <button class="btn btn-sm btn-success" @click='addmodalshow'>添加</button>
        </div>

        <table class="table table-striped table-bordered table-hover">
            <thead>
            <tr>
                <th class='text-center bg-info'>text</th>
                <th class='text-center bg-info'>title</th>
                <th class='text-center bg-info'>url</th>
                <th class='text-center bg-info'>操作</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for='item in siteInfoes'>
                <td class='text-center'>{{item.text}}</td>
                <td class='text-center'>{{item.title}}</td>
                <td class='text-center'>{{item.url}}</td>
                <td class='text-center'>
                    <button class="btn btn-xs btn-success" @click='editmodalshow(item._id)'>编辑</button>
                    <button class="btn btn-xs btn-danger" @click='delete(item._id)'>删除</button>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
    <modal title='添加' :show.sync='addshow' @ok='add' @cancel='cancel'>
        <div class="form-group">
            <input class="form-control" v-model='text' type="text" placeholder='连接显示的文字'>
        </div>
        <div class="form-group">
            <input class="form-control" v-model='title' type="text" placeholder='鼠标说明'>
        </div>
        <div class="form-group">
            <input class="form-control" v-model='url' type="text" placeholder='url地址'>
        </div>
    </modal>
    <modal title='编辑' :show.sync='editshow' @ok='edit' @cancel=cancel>
        <div class='form-horizontal'>
            <div class="form-group">
                <label class='col-sm-2 control-label'> ID</label>
                <div class='col-sm-8'>
                    <p class="form-control-static">{{sitemodel._id}}</p>
                </div>
            </div>
            <div class="form-group">
                <label class='col-sm-2 control-label'> 链接文字</label>
                <div class='col-sm-8'>
                    <input class="form-control" v-model='sitemodel.text' type="text" placeholder='连接显示的文字'>
                </div>
            </div>
            <div class="form-group">
                <label class='col-sm-2 control-label'> 鼠标提示</label>
                <div class='col-sm-8'>
                    <input class="form-control" v-model='sitemodel.title' type="text" placeholder='鼠标提示'>
                </div>
            </div>
            <div class="form-group">
                <label class='col-sm-2 control-label'> url地址</label>
                <div class='col-sm-8'>
                    <input class="form-control" v-model='sitemodel.url' type="text" placeholder='url地址'>
                </div>
            </div>
        </div>
    </modal>
</template>
<style scoped>
    .orgbox {
        padding: 5px;
    }
</style>
<script>
    //模态框组件
    var modal = require('vue-bootstrap-modal');
    export default{
        data: function () {
            return {
                siteInfoes: [],
                addshow: false,
                editshow: false,
                text: '',
                title: '',
                url: '',
                sitemodel: {
                    _id: '',
                    text: '',
                    title: '',
                    url: ''
                }
            }
        },
        ready: function () {
            this.downloadData();
        },
        components: {
            modal
        },
        methods: {
            editmodalshow: function (id) {
                this.editshow = true;
                this.$http.get('/background/api/siteinfo/get?id='+id)
                        .then(function(result){
                            if(result.data.errorCode==0){
                                this.sitemodel=result.data.returnValue;
                            }else{
                                alert(result.data.errorReason);
                            }
                        });
            },
            addmodalshow: function () {
                this.addshow = true;
            },
            add: function () {
                if (this.text == '' || this.title == '' || this.url == '') {
                    alert('参数不能为空');
                    return;
                }
                this.$http.post('/background/api/siteinfo/add', {
                    text: this.text,
                    title: this.title,
                    url: this.url
                }).then(function (result) {
                    if (result.data.errorCode == 0) {
                        alert('添加成功!');
                        this.downloadData();
                        this.text = this.title = this.url = '';
                    } else {
                        alert(result.data.errorReason);
                    }
                })
            },
            cancel: function () {
            },
            delete: function (id) {
                this.$http.post('/background/api/siteinfo/delete', {id: id})
                        .then(function (result) {
                            if (result.data.errorCode == 0) {
                                this.downloadData();
                            }
                            console.error(result.data.errorReason);
                        });
            },
            edit: function () {
                if (this.sitemodel._id==''||this.sitemodel.text == '' || this.sitemodel.title == '' || this.sitemodel.url == '') {

                    alert('参数不能为空');
                    return;
                }
                this.$http.post('/background/api/siteinfo/edit',{
                    _id:this.sitemodel._id,
                    text:this.sitemodel.text,
                    title:this.sitemodel.title,
                    url:this.sitemodel.url
                }).then(function(result){
                    if(result.data.errorCode==0){
                        alert('修改成功');
                        this.editshow=false;
                        this.downloadData();
                    }else{
                        alert(result.data.errorReason);
                    }
                })
            },
            downloadData: function () {
                this.$http.get('/background/api/siteinfo/getlist')
                        .then(function (result) {
                            this.siteInfoes = result.data.returnValue;
//                            var data=result.data.returnValue;
//                            for(var item in data) {
//                                this.siteInfoes.push(data[item]);
//                            }
                        });
            }
        },
        events: {}
    }
</script>
