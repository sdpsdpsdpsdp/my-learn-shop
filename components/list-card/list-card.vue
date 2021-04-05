<template>
	<view>
		<!--基础卡片-->
		<view v-if="mode==='base'" class="listcard">
			<view class="listcard-image"><image src="../../static/logo.png" mode="aspectFill"></image></view>
			<view class="listcard-content">
				<view class="listcard-content_title"><text>oibohohooiiubiubiubiib我真服了大法师打发我真服了大法师打发我真服了大法师打发我真服了大法师打发</text></view>
				<view class="listcard-content_des">
					<view class="list-content_des_label"><view class="list-content_des_label_item">dddddd</view></view>
					<view class="list-content_des_browse">100</view>
				</view>
			</view>
		</view>
		<!--多图显示 上面为title,下面为图片-->
		<view v-if="mode==='column'" class="listcard mode-column">
			<view class="listcard-content">
				<view class="listcard-content_title">
					<text>oibohohooiiubiubiubiib我真服了大法师打发我真服了大法师打发我真服了大法师打发我真服了大法师打发</text>
					<view class="listcard-image">
						<view class="listcard-image_item" v-for="item in 3" :key="item"><image src="../../static/logo.png" mode="aspectFill"></image></view>
					</view>
				</view>
				<view class="listcard-content_des">
					<view class="list-content_des_label"><view class="list-content_des_label_item">dddddd</view></view>
					<view class="list-content_des_browse">100</view>
				</view>
			</view>
		</view>
		<!--大图显示，大图在中间，文字在下面 左右为label和浏览人数-->
		<view v-if="mode==='image'" class="listcard mode-image">
			<view class="listcard-image"><image src="../../static/logo.png" mode="aspectFill"></image></view>
			<view class="listcard-content">
				<view class="listcard-content_title"><text>oibohohooiiubiubiubiib我真服了大法师打发我真服了大法师打发我真服了大法师打发我真服了大法师打发</text></view>
				<view class="listcard-content_des">
					<view class="list-content_des_label"><view class="list-content_des_label_item">dddddd</view></view>
					<view class="list-content_des_browse">100</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	props:{
		mode:{
			type:String,
			default: 'base'
		}
	},
	data() {
		return {};
	}
};
</script>

<style lang="scss">
.listcard {
	display: flex;
	padding: 10px;
	margin: 10px;
	border-radius: 5px;
	box-shadow: 0 0 5px 1px rgba($color: #000000, $alpha: 0.1);
	box-sizing: border-box;
	.listcard-image {
		flex-shrink: 0;
		width: 60px;
		height: 60px;
		border-radius: 5px;
		overflow: hidden;
		image {
			width: 100%;
			height: 100%;
		}
	}
	.listcard-content {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding-left: 10px;
		width: 100%;
		.listcard-content_title {
			font-size: 14px;
			color: #333;
			font-weight: 400;
			line-height: 1.2;
			text {
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
				text-overflow: ellipsis;
				overflow: hidden;
			}
		}
		.listcard-content_des {
			display: flex;
			justify-content: space-between; //左右两边对齐
			font-size: 12px;
			.list-content_des_label {
				display: flex;
				.list-content_des_label_item {
					padding: 0 5px;
					margin-right: 5px;
					border-radius: 15px;
					color: $mk-base-color;
					border: 1px $mk-base-color solid;
				}
			}
			.list-content_des_browse {
				color: #999;
				line-height: 1.5;
			}
		}
	}
	&.mode-column {
		.listcard-content {
			width: 100%;
			padding-left: 0;
		}
		.listcard-image {
			display: flex;
			margin-top: 10px;
			width: 100%;
			height: 70px;
			.listcard-image_item {
				margin-left: 10px;
				width: 100%;
				border-radius: 5px;
				overflow: hidden;
				&:first-child {
					margin-left: 0;
				}
				image {
					width: 100%;
					height: 100%;
				}
			}
		}
		.listcard-content_des {
			margin-top: 10px;
		}
	}
	&.mode-image {
		flex-direction: column;
		.listcard-image {
			width: 100%;
			height: 100px;
		}
		.listcard-content {
			padding-left: 0;
			margin-top: 10px;
			.listcard-content_des {
				display: flex;
				align-items: center;
				margin-top: 10px;
			}
		}
	}
}
</style>
