<template name="manager">
	<view>
		<scroll-view class="page">
			<cu_custom bgColor="bg-gradual-pink" :isBack="false"><block slot="content">账号管理</block></cu_custom>
			<view v-if="isshow">
				<view v-if="!isbind">
					<view class="cu-bar solid-bottom margin-top">
						<view class="action">
							<text class="cuIcon-title text-orange "></text>
							配置账户API
						</view>
					</view>

					<form>
						<view class="cu-form-group  margin-top">
							<view class="title">ApiKey：</view>
							<input type="text" placeholder="请填写ApiKey" name="apikey" v-model="UserApi.apiKey" />
						</view>

						<view class="cu-form-group  margin-top">
							<view class="title">Secret：</view>
							<input type="text" placeholder="请填写Secret" name="secret" v-model="UserApi.secret" />
						</view>

						<view class="cu-form-group  margin-top">
							<view class="title">PassPhrase：</view>
							<input type="text" placeholder="请填写PassPhrase" name="passphrase" v-model="UserApi.passPhrase" />
						</view>

						<view class="padding flex flex-direction"><button class="cu-btn bg-green margin-tb-sm lg" @click="confirm">确定</button></view>
					</form>

					<view class="cu-tabbar-height"></view>
				</view>
				<view v-else>
					<view class="cu-bar bg-white solid-bottom margin-top margin-bottom">
						<view style="font-size:1rem;width: 100%;">
							<text class="cuIcon-title text-orange" style="margin-left: 30rpx;float: left;">我的配置</text>
							<text class="cuIcon-settingsfill rigth" style="margin-right: 30rpx;float: right;" @click="setting"></text>
						</view>
					</view>

					<config_list></config_list>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
var _self;
var canvaColumn = null;

export default {
	name: 'manager',
	data() {
		return {
			UserApi: {
				apiKey: '',
				secret: '',
				passPhrase: ''
			},
			isshow: false,
			isbind: false,
			url: 'UserApi/add'
		};
	},
	created: function() {
		_self = this;
		_self.$parent.LoginModal().then(() => {
			_self.getuserkey();
		});
	},
	methods: {
		getuserkey() {
			if (_self.Utils.Openid === '') {
				uni.clearStorageSync(); 
				return;
			}

			_self.Http.get('UserApi/getbyuserid')
				.then(res => {
					if (res.data.status) {
						_self.isbind = true;
						_self.UserApi = res.data.data;
					} else {
						_self.Utils.toast(res.data.message, true);
					}
				})
				.then(() => {
					_self.isshow = true;
				})
				.catch(err => {
					if (err.data.code === 401) {
						_self.$parent.LoginModal_Status = true;
						return;
					}
					if (err.data === undefined) {
						_self.Utils.toast('接口异常', true);
					} else if (err.data.data === '' && err.data.code == 200) {
						_self.Utils.toast('请配置交易Api', true);
						_self.isbind = false;
					}
					_self.isshow = true;
				});
		},
		setting() {
			_self.isbind = false;
			_self.url = 'UserApi/update';
		},
		confirm() {
			_self.Http.post(_self.url, _self.UserApi)
				.then(res => {
					if (res.data.status) {
						_self.Utils.toast('设置成功,添加策略');
						_self.isbind = true;
					}
				})
				.catch(err => {
					_self.Utils.toast('接口异常', true);
				});
		}
	}
};
</script>

<style>
.page {
	height: 100vh;
	width: 100vw;
}
</style>
