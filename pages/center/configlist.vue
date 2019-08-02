<template>
	<scroll-view class="page">
		<cu_custom bgColor="bg-gradual-pink" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">配置列表</block>
		</cu_custom>

		<view v-if="showAddButton" style="height: 100%;width: 100%;padding: 10px;">
			<button class="cu-btn bg-green lg" style="display: block;margin:35%;line-height: 100px;height: 100px;width: 30%;"
			 @click="AddConfig">点击添加</button>
		</view>

		<view class="cu-list menu" :class="[menuBorder?'sm-border':'',menuCard?'card-menu margin-top':'']" v-for="(item,index) in configList"
		 :key="index">
			<view class="cu-item" :class="menuArrow?'arrow':''" @click="opendetail(item.id)">

				<view class="action">
					<view class="cu-tag round bg-orange light" style="width: 88px;">{{item.coin}}</view>
					<view class="cu-tag round bg-blue light" style="width: 40px;">{{item.ktime}}</view>
				</view>

				<view class="cu-capsule radius">
					<view class='cu-tag bg-cyan ' style="height: 60rpx;" @tap.native.stop="start(1)">
						开始
					</view>

					<view class='cu-tag bg-red ' style="height: 60rpx;margin-left: 10rpx;" @tap.native.stop="stop(1)">
						结束
					</view>
				</view>

			</view>
		</view>
	</scroll-view>
</template>

<script>
	var _self;

	export default {
		data() {
			return {
				configList: [],
				showAddButton: false,
				menuCard: false,
				menuBorder: false,
				menuArrow: false
			}
		},
		created: function() {
			_self = this;
			_self.Http.get("UserConfig/getlist").then((res) => {
				if (res.data.data.data.length < 1) {
					_self.showAddButton = true;
					_self.Utils.toast("请添加一个量化配置!", true);
				} else {
					_self.showAddButton = false;
					_self.configList = res.data.data.data;
				}
			}).catch((err) => {
				_self.Utils.toast("接口异常", true);
			})
		},
		methods: {
			AddConfig() {
				uni.navigateTo({
					url: 'config?status=0'
				});
			},
			opendetail(e) {
				uni.navigateTo({
					url: 'config?status=1&id=' + e
				})
			},
			start(e) {
				this.Utils.toast("开启成功");
			},
			stop(e) {
				this.Utils.toast("结束成功");
			}
		}
	}
</script>

<style>

</style>
