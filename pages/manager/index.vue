<template name="manager">
	<view>
		<scroll-view class="page">
			<cu_custom bgColor="bg-gradual-pink" :isBack="false">
				<block slot="content">账号管理</block>
			</cu_custom>

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
						<input type="text" name="apikey" v-model="UserApi.apikey" />
					</view>

					<view class="cu-form-group  margin-top">
						<view class="title">Secret：</view>
						<input type="text" name="secret" v-model="UserApi.secret" />
					</view>

					<view class="cu-form-group  margin-top">
						<view class="title">PassPhrase：</view>
						<input type="text" name="passphrase" v-model="UserApi.passphrase" />
					</view>

					<view class="padding flex flex-direction"><button class="cu-btn bg-red margin-tb-sm lg" @click="confirm">确定</button></view>
				</form>

				<view class="cu-tabbar-height"></view>
			</view>
			<view v-else>
				<config_list></config_list>
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
					apikey: '1',
					secret: '2',
					passphrase: '3'
				},
				loadModal: true,
				isbind: false
			};
		},
		created: function() {
			_self = this;
			_self.$parent.LoginModal();
			_self.getuserkey();
		},
		methods: {
			getuserkey() {
				if (_self.Utils.Openid === '') {
					_self.loadModal = false;
					return;
				}

				_self.Http.get('UserApi/getbyuserid')
					.then(res => {
						if (res.data.status) {
							_self.isbind = true;
							_self.loadModal = false;
						} else {
							_self.Utils.toast(res.data.message, true);
							_self.loadModal = false;
						}
					})
					.catch(err => {
						if (err.data === undefined) {
							_self.Utils.toast('接口异常', true);
							_self.loadModal = false;
						} else if (err.data.data === '' && err.data.code == 200) {
							_self.Utils.toast('请配置交易Api', true);
							_self.loadModal = false;
							_self.isbind = false;
						}
					});
			},
			confirm() {
				let url = 'UserApi/add';
				_self.Http.post(url, _self.UserApi)
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
