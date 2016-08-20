<template>
    <div>
        <div class='orgbox'>
            <button class="btn btn-sm btn-success" @click="modalshow('add')">添加</button>
        </div>
        <table class='table table-striped table-bordered table-hover'>
            <thead>
            <tr>
                <th class='text-center bg-info'>名称</th>
                <th class='text-center bg-info'>下载次数</th>
                <th class='text-center bg-info'>地址</th>
                <th class='text-center bg-info'>操作</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for='item in softInfoes'>
                <td class='text-center'>{{item.text}}</td>
                <td class='text-center'>{{item.downloadCount}}</td>
                <td class='text-center'>{{item.url}}</td>
                <td class='text-center'>
                    <button class="btn btn-xs btn-success" @click="modalshow('edit',item._id)">编辑</button>
                    <button class="btn btn-xs btn-danger" @click='delete(item._id)'>删除</button>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
    <modal :title=modaltitle :show.sync='show' @ok='ok' @cancel='cancel'>
        <div class='form-horizontal'>
            <div class="form-group">
                <label class='col-sm-2 control-label'> 软件文字</label>
                <div class='col-sm-8'>
                    <input class="form-control" v-model='singleSoftInfo.text' type="text" placeholder='连接显示的文字'>
                </div>
            </div>
            <div class="form-group">
                <label class='col-sm-2 control-label'> 软件地址</label>
                <div class='col-sm-8'>
                    <input class="form-control" v-model='singleSoftInfo.url' type="text" placeholder='鼠标提示'>
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
    var modal = require('vue-bootstrap-modal');
    export default{
        data: function () {
            return {
                singleSoftInfo: {
                    _id: 0,
                    text: '',
                    downloadCount: 0,
                    url: ''
                },
                softInfoes: [],
                modalorg: '',
                modaltitle: '',
                show: false
            }
        },
        components: {
            modal
        },
        ready: function () {
            this.initData();
        },
        methods: {
            initData: function () {
                this.$http.get('/api/softInfo/list')
                        .then(function (result) {
                            if (result.data.errorCode == 0) {
                                this.softInfoes = result.data.returnValue;
                            } else {
                                alert(result.data.errorReason);
                            }
                        })
            },
            modalshow: function (method, id) {
                if (method == 'add') {
                    this.modaltitle = '添加软件';
                }
                if (method == 'edit') {
                    this.modaltitle = '编辑软件信息';
                    this.$http.get('/background/api/softInfo/single?id=' + id)
                            .then(function (result) {
                                if (result.data.errorCode == 0) {
                                    this.singleSoftInfo = result.data.returnValue;
                                } else {
                                    alert(result.data.errorReason);
                                }
                            })
                }
                this.show = true;
            },
            delete: function (id) {

            },
            ok: function () {
                var soft = this.singleSoftInfo;
                if (soft.text == '' || soft.url == '') {
                    alert('参数有错误,不能为空');
                    return;
                }
                this.$http.post('/background/api/softInfo/save',
                        {
                            _id: this.singleSoftInfo._id,
                            text: this.singleSoftInfo.text,
                            url: this.singleSoftInfo.url
                        }).then(function (result) {
                    if (result.data.errorCode == 0) {
                        alert('成功');
                        this.initData();
                        this.resetModal();
                        this.show = false;
                    } else {
                        alert(result.data.errorReason);
                    }
                })
            },
            cancel: function () {
                this.resetModal();
            },
            resetModal: function () {
                this.singleSoftInfo._id = 0;
                this.singleSoftInfo.text = '';
                this.singleSoftInfo.downloadCount = 0;
                this.singleSoftInfo.url = '';
                this.modalorg = '';
            }
        }
    }
</script>
