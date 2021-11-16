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
						时长：{{item.durations[0]}}
					</view>
					<view class="movie-info">
						点赞数：{{item.collect_count}}
					</view>
					
				</view>
				
				<view class="movie-oper" @click="praiseMe">
					<image src="../../../static/icons/praise.png" class="movie-oper-image"></image>
					<view class="movie-oper-me">点赞</view>
					<view :animation="animationData" class="movie-oper-me animation-opacity">+1</view>
				</view>
				
			</view>
		</view>

	</view>
	
</template>

<script>
	
	// 评分组件
	import trailerStar from 'components/common/trailerStar.vue'
	
	export default {
		components: {
			trailerStar
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
			return {
				animationData: {},
				
			}
		},
		// created 是组件的生命周期 ， 组件创建时执行
		created() {
			// 在组件创建的时候,创建一个临时动画对象	
			this.animation = uni.createAnimation()
			// console.log(this.animation);
			// console.log(this.guessData);
		},
		
		// vue实例销毁后调用
		destroyed() {
			// 页面卸载的时候,清楚动画数据
			this.animationData = {};
		},
		
		
		
		methods:{
			// 实现动画点赞效果
			praiseMe() {
				// console.log(this.animation);
				// 构建动画数据，并且通过 step 来表示这组动画的完成
				// translateY（-60）向 y 轴移动 -60px ；opacity（1）透明度为 1
				this.animation.translateY(-70).opacity(1).step({
					duration:450
				});
				
				// 导出动画数据 view 组件 ,实现组件的动画效果
				this.animationData = this.animation.export();
				
				// 还原动画
				setTimeout(function() {
					this.animation.translateY(0).opacity(0).step({duration:0})
					// 动画还原之后 也需要 重新导出 动画数据
					this.animationData = this.animation.export();
				}.bind(this),500)
			}
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
				}
			}
			
			.movie-oper{
				width: 140upx;
				display: flex;
				flex-direction: column;
				justify-content: center;
				
				border-left: dashed 2px;
				border-left-color: #dbdbda;
				
				.movie-oper-image{
					width: 40upx;
					height: 40upx;
					align-self: center;
				}
				.movie-oper-me{
					font-size: 14px;
					color: #feab2a;
					align-self: center;
				}
				
				.animation-opacity{
					font-weight: bold;
					opacity: 0;
				}
			}
			
		}
	}
</style>
