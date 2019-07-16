<template>
	<scroll-view class="page">
		<cu-custom bgColor="bg-gradual-pink" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">配置列表</block>
		</cu-custom>

		<view class="cu-list menu" :class="[menuBorder?'sm-border':'',menuCard?'card-menu margin-top':'']" v-for="(item,key) in orderList">
			<view class="cu-item" :class="menuArrow?'arrow':''" @click="opendetail(item.id)">

				<view class="action">
					<view class="cu-tag round bg-orange light" style="width: 30px;">{{item.coin}}</view>
					<view class="cu-tag round  light" :class="item.side==='多'?'bg-green':'bg-red'" style="width: 20px;">{{item.side}}</view>
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
	export default {
		data() {
			return {
				orderList: [{
					id: '20190626123',
					coin: 'btc',
					side: '多',
					ktime: '1分钟',
					createtime: '2019-06-26 12:12:12'
				}, {
					id: '20190626123',
					coin: 'btc',
					side: '多',
					ktime: '15分钟',
					createtime: '2019-06-26 12:12:12'
				}],
				menuCard: false,
				menuBorder: false,
				menuArrow: false
			}
		},
		methods: {
			opendetail(e) {
				uni.navigateTo({
					url: 'config?id=' + e
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
