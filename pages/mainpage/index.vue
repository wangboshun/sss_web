<template name="mainpage">
	<view>
		<scroll-view scroll-y class="page">
			<cu_custom bgColor="bg-gradual-red" :isBack="false">
				<block slot="content">首页</block>
			</cu_custom>

			<swiper class="screen-swiper square-dot" :indicator-dots="true" :circular="true" :autoplay="true" interval="3000"
			 duration="500">
				<swiper-item v-for="(item, index) in swiperList" :key="index">
					<image :src="item.url" mode="aspectFill" v-if="item.type == 'image'"></image>
					<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type == 'video'"></video>
				</swiper-item>
			</swiper>

			<view class="footer">
				<view style="margin-top: 50%;text-align: center;color: red;font-size: 2rem;">
					<text>欢迎使用小程序！</text>
					<!-- <image @click="previewImage" src="../../static/thank.jpg"></image> -->
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	var _self;

	export default {
		name: 'mainpage',
		data() {
			return {
				swiperList: [{
						id: 0,
						type: 'image',
						url: 'http://img5.imgtn.bdimg.com/it/u=3942677153,1465122172&fm=26&gp=0.jpg'
					},
					{
						id: 1,
						type: 'image',
						url: 'http://img4.imgtn.bdimg.com/it/u=1302079946,701102204&fm=26&gp=0.jpg'
					},
					{
						id: 2,
						type: 'image',
						url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1761250568,2860123877&fm=26&gp=0.jpg'
					},
					{
						id: 3,
						type: 'image',
						url: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1445128200,464909664&fm=26&gp=0.jpg'
					}
				]
			};
		},
		created: function() {
			_self = this;
			_self
				.methods1()
				.then(() => {
					_self.methods2().catch(() => {
						console.log('----------methods2 catch');
					});
				})
				.then(() => {
					_self.methods3();
				})
				.catch(() => {
					console.log('----------methods1 catch');
				});
		},
		methods: {
			previewImage() {
				uni.previewImage({
					urls: ['https://small.huanchongkeji.com/thanks.jpg']
				});
			},
			methods1() {
				console.log('methods1');
				return Promise.resolve();
			},
			methods2() {
				console.log('methods2');
				return Promise.reject();
			},
			methods3() {
				console.log('methods3');
			}
		}
	};
</script>

<style>
	.page {
		height: 100vh;
		background-color: #ffff;
	}

	.footer {
		/* 	position: absolute;
		bottom: 0;
		width: 100%;
		height: 100px; */
	}
</style>
