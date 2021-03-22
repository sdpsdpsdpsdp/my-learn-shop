<template>
	<view class="navbar">
		<view class="navbar-fixed">
			<view :style="{height: statusHeight+'px'}"></view>
			<view class="navabar-content" :style="{width:windowWidth+'px', height: navbarHeight+'px'}">
				<view class="navbar-search">
					<view class="navbar-search_icon">
						<text class="iconfont icon-search"></text>
					</view>
					<view class="navbar-search_text">搜索消息</view>
				</view>
			</view>
		</view>
		<view :style="{height: (navbarHeight+statusHeight)+'px'}"></view>
	</view>
</template>

<script>
	export default {
		name: "navbar",
		data() {
			return {
				statusHeight: 20,
				navbarHeight:45,
				windowWidth:375
			};
		},
		created() {
			//获取手机系统信息
			const systemInfo = uni.getSystemInfoSync()
			this.statusHeight = systemInfo.statusBarHeight
			this.windowWidth = systemInfo.windowWidth
			//#ifndef H5 || APP-PLUS ||MP-ALIPAY
			//获取胶囊的位置信息
			const menuButtonInfo = uni.getMenuButtonBoundingClientRect()
			//胶囊底部高度-状态栏的高度 +（胶囊顶部的高度-状态栏内的高度）
			this.navbarHeight = (menuButtonInfo.bottom-this.statusHeight)+(menuButtonInfo.top-this.statusHeight)
			this.windowWidth = menuButtonInfo.left
			//#endif
		}
	}
</script>

<style lang="scss">
	@import "../../common/css/icons.css";
	.navbar {
		display: flex;
		flex-direction: column;
		.navbar-fixed {
			position: fixed;
			top: 0;
			left: 0;
			z-index: 99;
			width: 100%;
			background-color: $mk-base-color;

			.navabar-content {
				display: flex;
				justify-content: center;
				align-items: center;
				padding: 0 15px;
				height: 45px;
				box-sizing: border-box;

				.navbar-search {
					display: flex;
					align-items: center;
					padding: 0 10px;
					width: 100%;
					height: 30px;
					border-radius: 15px;
					background-color: #FFFFFF;

					.navbar-search_icon {
						margin-right: 10px;
					}

					.navbar-search_text {
						font-size: 12px;
						color: #808080;
					}
				}
			}
		}
	}
</style>
