<template name="mainpage">
	<view>
		<scroll-view scroll-y class="page">

			<cu-custom bgColor="bg-gradual-red" :isBack="false">
				<block slot="content">首页</block>
			</cu-custom>
			<swiper class="screen-swiper square-dot" :indicator-dots="true" :circular="true" :autoplay="true" interval="3000"
			 duration="500">
				<swiper-item v-for="(item,index) in swiperList" :key="index">
					<image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
					<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video>
				</swiper-item>
			</swiper>

			<button type="primary" open-type="getUserInfo" @getuserinfo="getUserInfo">使用微信登录</button>

			<view class="footer">
				<view class="text-center">
					<image @click="previewImage" src="../../static/thank.jpg"></image>
				</view>
			</view>
			
			<view class="cu-modal show">
				<view class="cu-dialog">
					<view class="cu-bar bg-white justify-end">
						<view class="content">微信授权登录</view>
						<view class="action">
							<text class="cuIcon-close text-red"></text>
						</view>
					</view>
					<view class="padding-xl">
						需要微信授权登录
					</view>
					<view class="cu-bar bg-white"> 
						<view class="action margin-0 flex-sub text-green solid-left">取消</view>
						<view class="action margin-0 flex-sub  solid-left">确定</view>
					</view>
				</view>
			</view>
			
		</scroll-view>
	</view>
</template>

<script>
	var _self;

	export default {
		name: "mainpage",
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
					}, {
						id: 2,
						type: 'image',
						url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1761250568,2860123877&fm=26&gp=0.jpg'
					}, {
						id: 3,
						type: 'image',
						url: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1445128200,464909664&fm=26&gp=0.jpg'
					}
				]
			};
		},
		created: function() {
			_self = this;
			uni.getStorage({
				key: 'Auth',
				complete: (res) => {
					if (res.data !== undefined && res.data !== "") {
						_self.Openid = res.data;
						_self.Http.interceptor.request = (config) => {
							config.header = {
								"Auth": res.data
							}
						}
					} else {
					 
					}
				}
			});
		},
		methods: {
			previewImage() {
				uni.previewImage({
					urls: ["https://small.huanchongkeji.com/thanks.jpg"]
				});
			},
			getUserInfo: function(data) {
				_self = this;
				uni.login({
					provider: 'weixin',
					success: function(res) {
						_self.Http.post("/api/v1/UserInfo/add", {
							code: res.code,
							iv: data.detail.iv,
							encryptedData: data.detail.encryptedData
						}).then((res) => {
							if (res.data.status) {
								uni.setStorage({
									key: 'Auth',
									data: _self.Openid
								});

								_self.Openid = res.data.data.openid;

								_self.Http.interceptor.request = (config) => {
									config.header = {
										"Auth": _self.Openid
									}
								}
								_self.Utils.toast("登陆成功");
							}
						}).catch((err) => {
							_self.Utils.toast("接口异常", true);
						})
					},
				});
			}
		}
	}
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
