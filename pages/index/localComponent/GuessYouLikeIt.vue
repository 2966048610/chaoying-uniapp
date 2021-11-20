<template>
	<view class="">
		<view class="GuessYouLikeIt page-block" v-for="(item, index) in guessData" :key='item.id'>
			<view class="movieList">
				<image :src="item.images.small" class="movieList-image"></image>
				
				<view class="movie-desc">
					
					<view class="movie-title">
						{{item.title}}
					</view>
					
					<!-- 评分组件 -->
					<trailerStar :innerScore="item.rating.average" :showNum="0"></trailerStar>
					
					<view class="movie-info">
						{{item.mainland_pubdate}}
					</view>
					<view class="movie-info">
						<text v-for="(g,i) in item.genres" :key="i">{{g}}/</text>
					</view>
					<view class="movie-info">
						时长：{{item.durations[0]}}
					</view>
					<view class="movie-info">
						点赞数：{{item.collect_count}}
					</view>
					
				</view>
				
				<give-the-thumbs-up></give-the-thumbs-up>
				
			</view>
		</view>

	</view>
	
</template>

<script>
	
	// 评分组件
	import trailerStar from 'components/common/trailerStar.vue'
	import GiveTheThumbsUp from 'pages/index/localComponent/GiveTheThumbsUp.vue'
	
	export default {
		components: {
			trailerStar,
			GiveTheThumbsUp
		},
		props:{
			guessData: {
				type:Array,
				default() {
					return []
				}
			}
		},
		
		data() {
			
		},
		// created 是组件的生命周期 ， 组件创建时执行
		created() {
			
		},
		
		// vue实例销毁后调用
		destroyed() {
			
		},
		
		
		
		methods:{
			
		}
	}
</script>

<style lang="scss" scoped>
	.GuessYouLikeIt{
		padding: 20upx;
		
		.movieList{
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			
			.movieList-image{
				width: 180upx;
				height: 240upx;
				border-radius: 3%;
				margin-right: 20rpx;
			}
			
			.movie-desc{
				width: 340upx;
				
				.movie-title{
					// name 超出则省略号
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
				}
				.movie-info{
					color: #808080;
					font-size: 14px;
					margin-bottom: 8rpx;
				}
			}

		}
	}
</style>
