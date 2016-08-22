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
				sites:[]
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