<template>
	<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" class="carousel">
		<swiper-item>
			<image src="~static/swiper/swiper_1.jpg" ></image>
		</swiper-item>
		<swiper-item>
			<image src="~static/swiper/swiper_2.jpg" ></image>
		</swiper-item>
		<swiper-item>
			<image src="~static/swiper/swiper_3.jpg" ></image>
		</swiper-item>
		<swiper-item>
			<image src="~static/swiper/swiper_4.jpg" ></image>
		</swiper-item>
	</swiper>
</template>

<script>
	export default {
		
	}
</script>

<style lang="scss" scoped>
.carousel{
	width: 100%;
	height: 440rpx;
	image{
		width: 100%;
	}
}
</style>
