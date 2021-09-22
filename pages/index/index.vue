<template>
	<view class="page">
		<!-- 轮播图 -->
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" class="carousel">
			<swiper-item>
				<image src="../../static/swiper/swiper_1.jpg" ></image>
			</swiper-item>
			<swiper-item>
				<image src="../../static/swiper/swiper_2.jpg" ></image>
			</swiper-item>
			<swiper-item>
				<image src="../../static/swiper/swiper_3.jpg" ></image>
			</swiper-item>
			<swiper-item>
				<image src="../../static/swiper/swiper_4.jpg" ></image>
			</swiper-item>
		</swiper>
		
		<!-- 热门超英 -->
		<view class="page-block super-hot">
			<view class="hot-title-wapper">
				<image src="../../static/icons/hot.png" class="hot-ico"></image>
				<view class="hot-title">
					热门超英
				</view>
			</view>
			
			<scroll-view scroll-x="true" class="page-block hot" @scrolltolower="scrollRightEnd">
				<view class="single-poster" v-for="item in hotData" >
					<view class="poster-wapper">
						<image :src="item.images.small" class="poster"></image>
						<view class="movie-name">
							{{item.title}}
						</view>
						<trailerStar :innerScore="item.rating.average" :showNum="1"></trailerStar>
					</view>
				</view>
			</scroll-view>
			
		</view>
		

		
		
		
	</view>
</template>

<script>
	// 评分组件
	import trailerStar from '../../components/common/trailerStar.vue'
	export default {
		components:{
			trailerStar
		},
		data() {
			return {
				title: 'Hello',
				
				hotData:[],//热门超英数据
				hotCount:10,//每次请求数据量
			}
		},
		onLoad() {
			
			this.getHotData()
		},
		methods: {
			
			// 获取热门数据
			getHotData(){
				// 特别注意：非H5端不能用uni.request来请求本地json数据！！！
				// const dataRes=await this.$http({url:'/new_movies.json'})
				const {subjects:dataRes}=require('../../static/mock/top250.json')
				// 截取10条数据
				let newArr=[]
				for(let i=0;i<dataRes.length;i++){
					if(i+this.hotCount-10<this.hotCount){
						let item=dataRes[i+this.hotCount-10]
						// 对图片做处理
						item.images.small=item.images.small.replace('https://','https://images.weserv.nl/?url=')
						newArr.push(item)
					}
				}
				this.hotData=[...this.hotData,...newArr]
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

<style lang="scss">

.carousel{
	width: 100%;
	height: 440rpx;
	image{
		width: 100%;
	}
}

.super-hot{
	margin-top: 12upx;
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
	
	.hot{
		width: 100%;
		// height: 350upx;
		white-space: nowrap;
		.single-poster{
			display: inline-block;
			margin-left: 20upx;
			.poster-wapper{
				display: flex;
				flex-direction: column;
				.poster{
					width: 200upx;
					height: 270upx;
				}	
				// .movie-name{
				// 	width: 200upx;
				// 	margin-top: 10upx;
				// 	font-size: 14px;
				// 	font-weight: bold;
				// 	// name 超出则省略号
				// 	white-space: nowrap;
				// 	overflow: hidden;
				// 	text-overflow: ellipsis;
				// }
				// .movie-score-wapper{
				// 	display: flex;
				// 	flex-direction: row;
				// 	.star-ico{
				// 		width: 20upx;
				// 		height: 20upx;
				// 		margin-top: 6upx;
				// 	}
				// 	.movie-score{
				// 		font-size: 12upx;
				// 		color: grey;
				// 		margin-left: 10px;
				// 	}
				// }
			}	
		}
	}
	
}
	
</style>
