<template>
		<swiper class="home-swiper">
			<swiper-item class="swiper-item" v-for="(item,index) in tabList" :key='index'>
				<list-item></list-item>
			</swiper-item> 
		</swiper>
</template>

<script>
	import listItem from './list-item.vue'
	export default {
		components:{
			listItem
		},
		props:{
			tabList:{
				type: Array,
				default(){
					return []
				}
			}
		},
		data() {
			return { 
				
			};
		}
	}
</script>

<style lang="scss">
	.home-swiper{
		height: 100%;
		.swiper-item{
			height: 100%;
			overflow: hidden;
		}
	}
</style>
