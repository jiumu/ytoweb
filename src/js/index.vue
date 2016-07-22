<template>
	<div class="container">
		<div class="row">
			<div class="header-mid">
				<div class="title">
					<p>{{titleContent.txt1}}</p>
					<strong>{{titleContent.txt2}}</strong>
				</div>
				<br />
				<h4>{{titleContent.txt3}}</h4>
				<br />
				<br />
				<div class="btndiv">
					<a v-link="'singin'" class='btn-singin'>
						登录
					</a>
					<a href="#" class="btn-singin btn-reg" @click.prevent='modalshow(2)'>
						注册
					</a>
				</div>

			</div>
			<modal title="提示" :show.sync="show" @ok="ok" @cancel="cancel">
				{{{modalContent}}}
			</modal>
			
		</div>
	</div>
</template>

<script>
	//var config=require('../config.json');
	var modal = require('../components/modal.vue');
	export default {
		data: function() {
			return {
				titleContent: {
					txt1: '诚信快递     你我同行',
					txt2: '领先,领先,领先,赢在执行',
					txt3: '中国最NB快递企业',
				},
				show: false,
				modalContent: ''
			}
		},
		components: {
			//vue-bootstrap-modal模态框组件
			modal
		},
		methods: {
			modalshow: function(index) {

				if(index == 2) {
					this.modalContent="暂时未提供开放注册,如需要账号请联系川藏管理区IT部!!";
				} else if(index == 1) {
					this.modalContent="\
					<form  method='post'>\
						<div class='form-group'>\
							<input type='text' class='form-control' placeholder='用户名'/>\
						</div>\
						<div class='form-group'>\
							<input type='password' class='form-control' />\
						</div>\
						<input type='button' value='提交'/>\
					</form>";
				} else {
					return;
				}
				this.show = true;

			},
			ok: function() {
				this.show = false;
			},
			cancel: function() {}
		}

	}
</script>

<style scoped>
	.header-mid {
		color: #fff;
		text-align: center;
		max-width: 600px;
		margin: 15px auto;
		padding-top: 100px;
	}
	
	.header-mid .title {
		padding-bottom: 25px;
		border-bottom: 2px solid rgba(255, 255, 255, .2);
	}
	
	.header-mid p {
		font-size: 26px;
		font-weight: 100;
		margin: 0 0 0 10px;
	}
	
	.header-mid strong {
		letter-spacing: 5px;
		font-size: 36px;
	}
	
	.btndiv {
		margin-bottom: 45px;
	}
	
	.btn-singin {
		padding: 20px 60px;
		background-color: #c4141b;
		opacity: .9;
		border: 0;
		font-size: 18px;
		font-weight: 600;
		-webkit-transition: all .4s ease-in-out;
		-moz-transition: all .4s ease-in-out;
		-ms-transition: all .4s ease-in-out;
		-o-transition: all .4s ease-in-out;
		margin-right: 15px;
	}
	
	.btn-reg {
		background-color: transparent;
		padding: 19px 59px;
		border: 1px solid #fff;
	}
	
	.txt-black {
		color: #000000;
	}
</style>