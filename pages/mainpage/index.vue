<template name="mainpage">
	<view>
		<scroll-view scroll-y class="page">
			<cu_custom bgColor="bg-gradual-red" :isBack="false"><block slot="content">首页</block></cu_custom>

			<swiper class="screen-swiper square-dot" :indicator-dots="true" :circular="true" :autoplay="true" interval="3000" duration="500">
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

			<view style="position:absolute;bottom:10%;width:100%;padding: 1rem;">
				<text class="cuIcon-questionfill" style="float: left;color:red;" @click="help">使用帮助</text>
				<text class="cuIcon-appreciatefill" style="float: right;color:green" @click="previewImage">友情赞助</text>
			</view>

			<view class="cu-load load-modal" v-if="loadModal">
				<view class="cuIcon-emojifill text-orange"></view>
				<view class="gray-text">加载中...</view>
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
			loadModal: false,
			swiperList: [
				{
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
		help() {
			_self.loadModal = true;
			let url = _self.Http.Api_Url + '/file/量化使用教程.pdf';
			uni.downloadFile({
				url: url,
				success(res) {
					let path = res.tempFilePath;
					console.log('---path', path);
					uni.openDocument({
						filePath: path,
						success(res) {
							_self.loadModal = false; 
							console.log('打开成功', res);
						},
						fail(res) {
							_self.loadModal = false;
							_self.Utils.toast('帮助文档打开失败', true);
							console.log('打开失败', res);
						}
					});
				}
			});
		},
		previewImage() {
			uni.previewImage({
				urls: [_self.Http.Api_Url + '/file/image/thank1.jpg']
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
