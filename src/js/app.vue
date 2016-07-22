<script>

var Header=require('./header.vue');
var Footer=require('./footer.vue');


	export default {
		el:function(){
			return '#main' 
		},
		components:{
			'my-header':Header,
			'my-footer':Footer
		}
	}
</script>

<template>
	<div class="warpbg" id='main'>
		<my-header></my-header>
		<router-view></router-view>
		<my-footer></my-footer>
	</div>
</template>

<style scoped>
	.warpbg {
	background-image: url(../img/bg.jpg);
	background-size: cover;
	height: 100%;
	width: 100%;
	position: absolute;
	--min-height: 900px;
	
}
</style>