<template>
	<view class="page">
		<!-- 轮播图 -->
		<SwiperItem></SwiperItem>
		
		<view class="h10"></view>
		
		<!-- 热门超英、热门预告、猜你喜欢 -->
		<view class="super-hot" v-for="(tag,index) in tagList" :key='index' >

			<!-- 标签组件：热门超英、热门预告、猜你喜欢 -->
			<tag :imgSrc='tag.imgSrc' :hotTitle='tag.hotTitle'></tag>
			
			<!-- 热门超英 -->
			<ScrollViewItem v-if="index == 0" :hotData='hotData' :scrollRightEnd='scrollRightEnd'></ScrollViewItem>

			<!-- 热门预告 -->
			<HotTrailer v-if="index == 1"></HotTrailer>
			
			<!-- 猜你喜欢 -->
			<GuessYouLikeIt :guessData="guessData"  v-if="index == 2"></GuessYouLikeIt>
			
		</view>

		
		<view class="h100"></view>
		<view class="h100"></view>
		
		
		
		
	</view>
</template>

<script>

	
	
	
	// 轮播图组件
	import SwiperItem from './localComponent/SwiperItem.vue'
	
	// 标签组件：热门超英、热门预告、猜你喜欢
	import Tag from './localComponent/Tag'
	
	// 热门超英 组件
	import ScrollViewItem from './localComponent/ScrollViewItem.vue'
	// 热门预告 组件
	import HotTrailer from './localComponent/HotTrailer.vue'
	// 猜你喜欢
	import GuessYouLikeIt from './localComponent/GuessYouLikeIt.vue'
	
	
	export default {
		components:{
			
			SwiperItem,
			Tag,
			ScrollViewItem,
			HotTrailer,
			GuessYouLikeIt
			
		},
		data() {
			return {
				title: 'Hello',
				
				hotData:[],//热门超英数据
				hotCount:10,//每次请求数据量
				
				
				tagList:[
					{
						hotTitle:'热门超英',
						imgSrc:'../../static/icons/hot.png'
					},{
						hotTitle:'热门预告',
						imgSrc:'../../static/icons/interest.png'
					},{
						hotTitle:'猜你喜欢',
						imgSrc:'../../static/icons/guess-u-like.png'
					}
				],
				
				// 猜你喜欢
				guessData:[],
				guessCount:5,//每次请求数据量
				
			}
		},
		onLoad() {
			
			this.getHotData();
			this.getGuessData();
		},
		methods: {
			
			// 获取热门数据
			getHotData(){
				// 特别注意：非H5端不能用uni.request来请求本地json数据！！！
				// const dataRes=await this.$http({url:'/new_movies.json'})
				const {subjects:dataRes} = require('static/mock/top250.json')
				// 截取10条数据
				let newArr=[];
				
				// debugger;  // debugger  可以给代码打一个断点 ，在浏览器进行调试
				
				for(let i = 0; i < dataRes.length; i++){
					if(i + this.hotCount - 10 < this.hotCount){
						let item=dataRes[i+this.hotCount-10]
						// 对图片做处理
						item.images.small=item.images.small.replace('https://','https://images.weserv.nl/?url=')
						newArr.push(item)
					}
				}
				this.hotData=[...this.hotData,...newArr]
			},
			
			// 获取猜你喜欢数据
			getGuessData(){
				const {subjects:dataRes}=require('../../static/mock/weekly.json')
				// 截取5条数据，每次展示5条
				let newArr=[]
				for(let i=0;i<dataRes.length;i++){
					if(i+this.guessCount-5<this.guessCount){
						let item=dataRes[i+this.guessCount-5].subject
						// 对图片做处理
						item.images.small=item.images.small.replace('https://','https://images.weserv.nl/?url=')
						newArr.push(item)
					}
				}
				this.guessData=newArr;
				// console.log(this.guessData);
			},
			
			// 向右滑动到终点
			scrollRightEnd(){
				if(this.hotCount == 50){
					this.$show({
						icon:"none",
						title:"没有更多数据了~"
					})
				}else{
					this.hotCount += 10  //再次请求10条数据
					this.getHotData()
				}
			}
			
		}
	}
</script>

<style lang="scss" scoped>

.super-hot{

	padding: 22upx;
	
	.hot-title-wapper{
		display: flex;
		flex-direction: row;
		.hot-ico{
			width: 30upx;
			height: 30upx;
			margin-top: 10upx;
		}
		.hot-title{
			font-size: 20px;
			margin-left: 20upx;
			
		}
	}
	
	
	
}
	
</style>
