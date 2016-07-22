<template>
	<div class="header navbar-hide" id='header'>
		<div class="container">
			<div class="row">
				<div class="navbar-header">
					<a class="navbar-brand" href="/">
						<span>
									<img src="../img/logo.png" alt="圆通" class="logo"/>
								</span>
						<span class="logofont">
									<strong>川藏管理区</strong>
								</span>
					</a>
				</div>
				<nav class="navbar-collapse">
					<ul class="nav navbar-nav navbar-right" id="nav">
						<li v-for="item in menus">
							<a v-link='item.url'>
								{{item.text}}
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				menus: [{
					text: '首页',
					url: '/'
				},{
					text:'网址导航',
					url:'/sitenav'
				},{
					text: '关于我们',
					url: '#'
				}, {
					text: '帮助中心',
					url: '#'
				}]
			}
		}
	}
</script>

<style scoped>
	.header {
		padding: 15px 0px;
	}
	
	.nav {
		margin-top: 7px;
	}
	
	.navbar-hide {
		padding-top: 30px;
	}
	
	.logo {
		width: 100px;
	}
	
	.logofont {
		letter-spacing: 2px;
	}
</style>