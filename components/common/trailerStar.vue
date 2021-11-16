<template>
	<view class="trailer_star">
		<view class="movie_score_wrapper">
			
			<!-- 遍历 黄色星星 -->
			<image src="../../static/icons/star-yellow.png" mode="" class="star"
				v-for="(ys,ysindex) in yellowScore" :key='ysindex'
			></image>
			
			<!-- 遍历 灰色星星 -->
			<image src="../../static/icons/star-gray.png" mode="" class="star"
				v-for="(gs,gsindex) in grayScore" :key='gsindex + "1"'
			></image>
			
			<!-- 显示评分 -->
			<view class="movie_score" v-if="showNum">
				{{innerScore}}
			</view>
			
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			innerScore:{//外部传入的分数
				type:Number,
				default:0
			}, 
			showNum:{ //是否显示具体分数 1-显示 0-不显示
				type:Number,
				default:0
			}
		},
		data(){
			return{
				// 根据传入的 分数 来判断 黄色星星 和 灰色星星 的数量 ，两者的总数量是 5个
				yellowScore:0,  // 控制 黄色星星 的数量
				grayScore:5,    // 控制 灰色星星 的数量 
			}
		},
		created() {
			let tempScore = 0
			if(this.innerScore){   // 判断 外部 传入的 分数 是否 有值
				tempScore = this.innerScore
			}
			
			this.yellowScore = parseInt(tempScore / 2)   // 计算 黄色星星 的数量 ， 传入的分数 除 2 ；外部传入的分数为 十分制
			this.grayScore = 5 - this.yellowScore        // 计算 灰色星星 的数量 ， 用 5 减去 黄色星星 的数量 就是 灰色星星的数量
		}
	}
</script>

<style lang="scss" scoped>
	.trailer_star{
		.movie_score_wrapper{
			display: flex;
			flex-direction: row;
			justify-content: left;
			.star{
				width: 20upx;
				height: 20upx;
				margin-top: 6upx;
			}
			.movie_score{
				color: gray;
				font-size: 12px;
				margin-left: 8upx;
			}
		}
	}
</style>
