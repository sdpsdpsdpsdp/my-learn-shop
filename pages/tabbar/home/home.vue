<template>
	<view class="home">
		<navbar></navbar>
		<tab :tabList='tabList' @tabClick='tabClick'></tab>
		<list :tabList='tabList'></list>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabList:[]
			}
		},
		onLoad() {
			this.getLabel()
		},
		methods: {
			getLabel(){
				this.$api.get_base('get_label').then(res=>{
				this.tabList=res 
				})
			},
			tabClick({data,index}){
				console.log("接收tab事件："+data+","+index)
			}
		}
	}
</script>

<style lang="scss">
	page{
		height: 100%;
		display: flex;
	}
	.home{
		display: flex;
		flex-direction: column;
		flex: 1;
		overflow: hidden;
	}
</style>
