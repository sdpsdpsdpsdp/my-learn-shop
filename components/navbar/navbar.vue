<template>
	<view class="navbar">
		<view class="navbar-fixed">
			<view class="navbar-search">
				<view class="navbar-search_icon"></view>
				<view class="navbar-search_text">搜索消息</view>
			</view>
		</view>
		<view style="height: 45px;"></view>
	</view>
</template>

<script>
	export default {
		name:"navbar",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.navbar{
		.navbar-fixed{
			position: fixed;
			top: 0;
			left: 0;
			z-index: 99;
			display: flex;
			width: 100%;
			height: 45px;
			justify-content: center;
			align-items: center;
			padding: auto 15px;
			background-color:$mk-base-color;
			.navbar-search{
				height: 30px;
				width: 100%;
				margin: auto 10px;
				background-color: #FFFFFF;
				display: flex;
				align-items: center;
				border-radius: 15px;
				.navbar-search_icon{
					margin-left: 15px;
					margin-right: 10px;
					width: 10px;
					height: 10px;
					border: 1px red solid;
				}
				.navbar-search_text{
					font-size: 12px;
					color: #808080;
				}
			}
		}
		
	}
</style>
