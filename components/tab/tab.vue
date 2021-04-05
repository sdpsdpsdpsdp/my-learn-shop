<template>
	<view class="tab">
		<scroll-view class="tab-scroll" scroll-x>
			<view class="tab-scroll_box">
				<view class="tab-scroll_item" :class="{active:activeIndex===index}" v-for="(item, index) in tabList" :key="index" @click="clickTab(item, index)">{{ item.name }}</view>
			</view>
		</scroll-view>
		<view class="tab-icons"><uni-icons type="gear" size="26" color="#666"></uni-icons></view>
	</view>
</template>
<script>
export default {
	props: {
		tabList: {
			type: Array,
			default() {
				return [];
			}
		}
	},
	data() {
		return {
			activeIndex:0
		};
	},
	methods: {
		clickTab(tab, index) {
			this.activeIndex=index
			this.$emit('tabClick',{data:tab,index})
		}
	}
};
</script>

<style lang="scss">
.tab {
	display: flex;
	background-color: #ffffff;
	width: 100%;
	border-bottom: 1px #f5f5f5 solid;
	box-sizing: border-box;
	.tab-scroll {
		overflow: hidden;
		.tab-scroll_box {
			height: 45px;
			flex-wrap: nowrap;
			box-sizing: border-box;
			display: flex;
			align-items: center;
			.tab-scroll_item {
				color: #333333;
				flex-shrink: 0;
				font-size: 14px;
				padding: 0 10px;
				&.active{
					color: $mk-base-color;
				}
			}
		}
	}

	.tab-icons {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 45px;
		&::after {
			content: '';
			position: absolute;
			top: 12px;
			bottom: 12px;
			left: 0;
			width: 1px;
			background-color: #ddd;
		}
	}
}
</style>
