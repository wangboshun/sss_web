<template>
	<view>
		<mainpage v-if="PageCur == 'mainpage'"></mainpage>
		<manager v-if="PageCur == 'manager'"></manager>
		<center v-if="PageCur == 'center'"></center>
		<login_modal :IsShow.sync="LoginModal_Status"></login_modal>
		<view class="cu-bar tabbar bg-white shadow foot">
			<view class="action" @click="NavChange" data-cur="mainpage">
				<view class="cuIcon-cu-image">
					<image :src="'/static/tabbar/mainpage' + [PageCur == 'mainpage' ? '_cur' : ''] + '.png'"></image>
				</view>
				<view :class="PageCur == 'mainpage' ? 'text-green' : 'text-gray'">首页</view>
			</view>

			<view class="action" @click="NavChange" data-cur="manager">
				<view class="cuIcon-cu-image">
					<image :src="'/static/tabbar/manager' + [PageCur == 'manager' ? '_cur' : ''] + '.png'"></image>
				</view>
				<view :class="PageCur == 'manager' ? 'text-green' : 'text-gray'">管理</view>
			</view>

			<view class="action" @click="NavChange" data-cur="center">
				<view class="cuIcon-cu-image">
					<image :src="'/static/tabbar/center' + [PageCur == 'center' ? '_cur' : ''] + '.png'"></image>
				</view>
				<view :class="PageCur == 'center' ? 'text-green' : 'text-gray'">我</view>
			</view>
		</view>
	</view>
</template>

<script>
	var _self;

	export default {
		data() {
			return {
				LoginModal_Status: false,
				PageCur: 'mainpage'
			};
		},
		created: function() {
			_self = this;
		},
		onLoad(option) {
			if (option.route !== null) {
				this.PageCur = option.route;
			}
			console.log('index onLoad');
		},
		onBackPress() {
			console.log('index onBackPress');
		},
		onShow() {
			console.log('index onShow');
		},
		onReady() {
			console.log('index onReady');
		},
		onHide() {
			console.log('index onHide');
		},
		onUnload() {
			console.log('index onUnload');
		},
		onResize() {
			console.log('index onResize');
		},
		onTabItemTap() {
			console.log('index onTabItemTap');
		},
		onPageScroll() {
			console.log('index onPageScroll');
		},
		methods: {
			LoginModal: function() {
				let val = uni.getStorageSync('Auth');
				if (val !== undefined && val !== '') {
					_self.LoginModal_Status = false;
					_self.Utils.Openid = val;
					_self.Http.interceptor.request = config => {
						config.header = {
							Auth: val
						};
					};
				} else {
					_self.LoginModal_Status = true;
					uni.removeStorageSync('Auth');
				}
			},
			NavChange: function(e) {
				this.PageCur = e.currentTarget.dataset.cur;
				let title = '首页';
				switch (this.PageCur) {
					case 'manager':
						title = '管理';
						break;
					case 'center':
						title = '我';
						break;
				}
				uni.setNavigationBarTitle({
					title: title
				});
			}
		}
	};
</script>

<style></style>
