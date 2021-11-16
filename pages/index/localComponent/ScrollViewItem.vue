<template>
	<scroll-view scroll-x="true" class="page-block hot" @scrolltolower="scrollRightEnd">
		<view class="single-poster" v-for="(item,index) in hotData" :key='index' >
			<view class="poster-wapper">
				<image :src="item.images.small" class="poster"></image>
				<view class="movie-name">
					{{item.title}}
				</view>
				<trailerStar :innerScore="item.rating.average" :showNum="1"></trailerStar>
			</view>
		</view>
	</scroll-view>
</template>

<script>
	// 评分组件
	import trailerStar from 'components/common/trailerStar.vue'
	
	export default {
		components: {
			trailerStar
		},
		props: {
			scrollRightEnd:'',
			hotData: {
				type:Array,
				default () {
					return []
				}
			}
		},
		
	}
</script>

<style lang="scss" scoped>
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
				.movie-name{
					width: 200upx;
					margin-top: 10upx;
					font-size: 14px;
					font-weight: bold;
					// name 超出则省略号
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
				}
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
</style>
