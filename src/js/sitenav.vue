<template>
	<div class="container">
		<div class="panel panel-default site-panel">
			<div class="panel-heading">
				<h3 class="panel-title">
					圆通相关网址
				</h3>
			</div>
			<div class="panel-body link-coll" >
				<a v-for='site in sites' :href='site.url' :title='site.title' target="_blank" class="btn btn-success">{{site.text}}</a>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data:function(){
			return{
				sites:[
					{
						title:'网点在线客服系统',
						text:'在线客服系统',
						url:'http://chatroom.yto.net.cn/auth/login'
					},
					{
						title:'金刚核心运营系统',
						text:'金刚核心运行系统',
						url:'http://jingang.yto56.com.cn'
					},
					{
						title:'圆通网点查询',
						text:'圆通网点查询',
						url:'http://www.yto.net.cn/gw/service/branchsearch.html'
					},
					{
						title:'圆通速递',
						text:'圆通速递官网',
						url:'http://www.yto.net.cn'
					},
					{
						title:'客户在地图查询最近的网点和联系方式',
						text:'GIS查询系统',
						url:'http://116.228.70.238:8801/gisow'
					},{
						title:'网点修改外网电话派送范围等',
						text:'GIS网点系统',
						url:'http://gis.yto56.com.cn/gis/main.action'
					},{
						title:'企业邮箱',
						text:'企业邮箱',
						url:'http://mail.yto.net.cn/'
					},{
						title:'圆通在线视频教学网站',
						text:'圆通网络学院',
						url:'http://yto.21tb.com/'
					},{
						title:'发货客户自助跟单系统',
						text:'易通点上系统',
						url:'http://ec.yto.net.cn/login_goLogin.action'
					},{
						title:'内部事务网',
						text:'内部事务网',
						url:'http://116.228.70.245'
					},{
						title:'人资系统',
						text:'人资系统',
						url:'http://hr.yto56.com.cn'
					},{
						title:'采购平台,提交后需要发传真确认',
						text:'内部采购系统',
						url:'http://mall.yto.net.cn/'
					},{
						title:'单点登录系统,暂时功能不全',
						text:'SSO单点登录',
						url:'http://occ.yto56.com.cn/cas/login'
					},{
						title:'电子面单系统',
						text:'电子面单系统',
						url:'http://ewms.yto56.net.cn/'
					},{
						title:'财务NC系统',
						text:'财务NC系统',
						url:'http://116.228.70.237:9081/'
					},{
						title:'OA审批系统',
						text:'OA审批系统',
						url:'http://oa.yto56.com.cn/c6/jhsoft.web.login/password.aspx'
					},{
						title:'妈妈驿站',
						text:'妈妈驿站',
						url:'http://station.mamayz.com/stationwebexp/logout'
					}
				]
			}
		},
		ready:function(){
			this.$http.get('/api/siteinfo/list')
					.then(function(result){
						if(result.data.errorCode==0){
							this.sites=result.data.returnValue;
						}else{
							alert(result.data.errorReason);
						}
					})
		}
	}
</script>

<style scoped>
	.link-coll a{
		margin-right: 15px;
		margin-bottom: 10px;
		width:138px;
	}
	.site-panel{
		margin-top:15px;
	}
</style>