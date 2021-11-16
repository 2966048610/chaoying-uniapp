<template>
	
	<view class="HotTrailer page-block">
		<video 
		
			v-for="(item,index) in hotTrailerList"  :key='item.id' 
			
			:src="item.src" 
			:poster="item.poster" 
			
			object-fit="fill"
			:id="item.id"
			@play="videoPlay(item.id)"
			controls
		>
		</video>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {

				// 热门预告
				hotTrailerList:[
					{
						id:'001',
						src:'http://qo1xme9v6.hn-bkt.clouddn.com/JusticeLeague.mp4',
						poster:'http://qo1xme9v6.hn-bkt.clouddn.com/JusticeLeague.jpg'
					},
					// {
					// 	id:'002',
					// 	src:'http://qo1xme9v6.hn-bkt.clouddn.com/The%20Falcon%20and%20the%20Winter%20Soldier.mp4',
					// 	poster:'http://qo1xme9v6.hn-bkt.clouddn.com/The%20Falcon%20and%20the%20Winter%20Soldier.jpg'
					// },
					{
						id:'003',
						src:'http://qo1xme9v6.hn-bkt.clouddn.com/trailer3.mp4',
						poster:'http://qo1xme9v6.hn-bkt.clouddn.com/trailer3.jpg'
					},
					{	
						id:'004',
						src:'http://mdup.apdcdn.tc.qq.com/vcloud1022.tc.qq.com/1022_d35f9f934fa64fb7b1c2f225337cf55c.f0.mp4?vkey=EF84BEC7B073D830522ADCDC3936E4F97318D878FD5B75D24D2B83D465724F1E8FD7465E3D1053139E75BFCA0112DFB33FE3AA851730FAEA841047CDEEDBA726E6FEF84FC3AF0005F46ED2A5BCB107A5D3D8AFD06458E4CC&sha=0',
						poster:'http://qo1xme9v6.hn-bkt.clouddn.com/nz.png'
					},
					{
						id:'005',
						src:'http://mdup.apdcdn.tc.qq.com/vcloud1022.tc.qq.com/1022_17aca686afb74be18abd1564b5b76531.f0.mp4?vkey=7140DFB86F5FFA4578448010304D675C3D13CC0A2E4FE6A6C5D2208719444B60FE7A6794A4C9CD496B6BFF423D34CD6052F9D4C8B33271AB9E6CBE8AAC75791E0D1F311237909ED7379ADAF666BDA86EB7F0EBDDC339B6AF&sha=0',
						poster:'http://qo1xme9v6.hn-bkt.clouddn.com/nz.png'
					}
				],
				
				// 视频上下文对象
				videoCtx:null,
				videoId:null,
				
			}
		},
		onHide() {
			// 当页面隐藏时 视频 关闭
			if(this.videoCtx){
				this.videoCtx.pause()
			}
		},
		methods: {
			// 每次点击 视频 播放和暂停 时执行
			videoPlay(id) {
				// 解决真机无限播放暂停问题
				if(this.videoId==id){
					return false
				}
				this.videoCtx=uni.createVideoContext(id)
				// 确保只能有一个视频被播放，其它的暂停
				this.hotTrailerList.forEach(item=>{
					if(item.id==id){
						this.videoCtx.play()
						this.videoId=id
					}else{
						uni.createVideoContext(item.id).pause()
					}
				})
				
				// 确保只能有一个视频被播放，其它的暂停 ; 这个 bug 在 网页端解决了 ,但在其它端 还是存在
			}
		}
		
		
		
		
		
	}
</script>

<style lang="scss" scoped>
	.HotTrailer{
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
		padding: 0 20upx 20upx 20upx;
		
		video{
			width: 330upx;
			height: 200upx;
			margin-top: 10upx;
		}
		
	}
</style>
