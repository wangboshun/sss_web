<template>
	<view> 

		<view class="cu-list menu" v-for="(item, index) in configList" :key="index">
			<view class="cu-item" @click="openconfig(item.id)">
				<view class="action">
					<view class="cu-tag round bg-orange light" style="width: 88px;">{{ item.coin }}</view>
					<view class="cu-tag round bg-blue light" style="width: 40px;">{{ item.ktime }}</view>
				</view>

				<view class="cu-capsule radius" v-if="item.status==0">
					<view class="cu-tag bg-cyan " style="height: 60rpx;" @tap.native.stop="start(item.id)">开始</view>
				</view>

				<view class="cu-capsule radius" v-else>
					<view class="cu-tag bg-red " style="height: 60rpx;margin-left: 10rpx;" @tap.native.stop="stop(item.id)">结束</view>
				</view>
			</view>
		</view>

		<view style="height: 100%;width: 100%;padding: 10px;">
			<button class="cu-btn bg-green lg" style="display: block;margin-left: 35%;line-height: 100px;height: 100px;width: 30%;margin-top: 20%;"
			 @click="addConfig">点击添加</button>
		</view>
	</view>
</template>

<script>
	var _self;

	export default {
		name: 'config_list',
		data() {
			return {
				configList: []
			};
		},
		created: function() {
			_self = this;
			_self.getconfig();
		},
		methods: {
			getconfig() {
				_self.Http.get('UserConfig/getlist')
					.then(res => {
						if (res.data.data.data.length < 1) {
							_self.Utils.toast('请添加一个量化配置!', true);
						} else {
							_self.configList = res.data.data.data;
						}
					})
					.catch(err => {
						_self.Utils.toast('接口异常', true);
					});
			},
			//添加配置
			addConfig() {
				uni.navigateTo({
					url: '/pages/center/config?status=0'
				});
			},
			//打开配置
			openconfig(e) {
				uni.navigateTo({
					url: '/pages/center/config?status=1&id=' + e
				});
			},
			//开始
			start(e) {
				uni.showModal({
					title: '温馨提示',
					content: '确定要开始这个量化配置吗?',
					success: function(res) {
						if (res.confirm) {
							let data = _self.configList.filter(item => item.id === e)[0];
							data.status = 1;
							_self.update(data);
						}
					}
				});
			},
			//结束
			stop(e) {
				uni.showModal({
					title: '温馨提示',
					content: '确定要关闭这个量化配置吗?',
					success: function(res) {
						if (res.confirm) {
							let data = _self.configList.filter(item => item.id === e)[0];
							data.status = 0;
							_self.update(data);
						}
					}
				});
			},
			//更新
			update(data) {
				_self.Http.post('UserConfig/update', data)
					.then(res => {
						if (data.status == 0)
							_self.Utils.toast('关闭成功');
						else
							_self.Utils.toast('开启成功');
					})
					.then(() => {
						_self.getconfig();
					})
					.catch(err => {
						_self.Utils.toast('接口异常', true);
					});
			}
		}
	};
</script>

<style></style>
