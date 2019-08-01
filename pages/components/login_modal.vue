<template>
	<view class="cu-modal" :class="[IsShow?'show':'none']">
		<view class="cu-dialog  bg-white">
			<view class="cu-bar justify-end">
				<view class="content">授权登录</view>
				<view class="action" @tap="LoginCancel"><text class="cuIcon-close text-red"></text></view>
			</view>
			<view class="padding-xl">需要登录才能使用核心功能！</view>
			<view class="cu-bar">
				<view class="action margin-0 flex-sub text-green solid-left"><button style="font-size:0.8rem;" type="warn" @tap="LoginCancel">取消</button></view>
				<view class="action margin-0 flex-sub  solid-left">
					<button style="font-size:0.8rem;" type="primary" open-type="getUserInfo" @getuserinfo="LoginIn">登录</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	var _self;

	export default {
		data() {
			return {}
		},
		name: 'login_modal',
		computed: {},
		props: {
			IsShow: {
				type: [Boolean],
				default: false
			},
		},
		methods: {
			LoginCancel() {
				this.$emit('update:IsShow', false)
			},
			LoginIn: function(data) {
				_self = this;
				uni.login({
					provider: 'weixin',
					success: function(res) {
						_self.Http.post('UserInfo/add', {
								code: res.code,
								iv: data.detail.iv,
								encryptedData: data.detail.encryptedData
							})
							.then((res) => {
								if (res.data.status) {
									_self.Utils.Openid = res.data.data.openid;

									uni.setStorage({
										key: 'Auth',
										data: _self.Utils.Openid
									});

									_self.Http.interceptor.request = config => {
										config.header = {
											Auth: _self.Utils.Openid
										};
									};
									_self.Utils.toast('登陆成功');
									_self.$emit('update:IsShow', false)
								}
							})
							.catch((err) => {
								_self.Utils.toast('接口异常', true);
							});
					}
				});
			}
		}
	};
</script>

<style></style>
