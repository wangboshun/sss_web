<template>
	<scroll-view class="page">
		<cu-custom bgColor="bg-gradual-pink" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">账单列表</block>
		</cu-custom>

		<view class="tradelist  cu-list menu" :class="[menuBorder?'sm-border':'',menuCard?'card-menu margin-top':'']" v-for="(item,index) in tradeList">
			<view @click="opendetail(item.orderno)">

				<view class="response padding-xs">
					<view class="padding-5 radius shadow justify-between">
						<view class="flex solid-bottom padding-sm justify-between">
							<view>类型</view>
							<view> {{item.coin}} : {{item.side}}</view>
						</view>

						<view class="flex padding-sm justify-between">
							<view>收益</view>
							<view> {{item.percent}}%</view>
						</view>

						<view class="flex  padding-sm justify-between">
							<view>时间</view>
							<view> {{item.createtime}}</view>
						</view>
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
				tradeList: [{
						orderno: '20190626123',
						coin: 'BTC-USDT',
						side: '多',
						percent: -10,
						createtime: '2019-06-26 12:12:12'
					}, {
						orderno: '20190626123',
						coin: 'BTC-USDT',
						side: '多',
						percent: 10,
						createtime: '2019-06-26 12:12:12'
					}, {
						orderno: '20190626123',
						coin: 'BTC-USDT',
						side: '空',
						percent: 10,
						createtime: '2019-06-26 12:12:12'
					}, {
						orderno: '20190626123',
						coin: 'BTC-USDT',
						side: '多',
						percent: -10,
						createtime: '2019-06-26 12:12:12'
					}, {
						orderno: '20190626123',
						coin: 'BTC-USDT',
						side: '空',
						percent: 10,
						createtime: '2019-06-26 12:12:12'
					}, {
						orderno: '20190626123',
						coin: 'BTC-USDT',
						side: '多',
						percent: 10,
						createtime: '2019-06-26 12:12:12'
					},
					{
						orderno: '20190626123',
						coin: 'BTC-USDT',
						side: '空',
						percent: 10,
						createtime: '2019-06-26 12:12:12'
					}
				],
				menuCard: false,
				menuBorder: false,
				menuArrow: false
			}
		},
		methods: {
			opendetail(e) {
				uni.navigateTo({
					url: 'orderdetail?orderno=' + e
				})
			}
		}
	}
</script>

<style>
	.tradelist:nth-of-type(odd) {
		color: #e54d42;
		background-color: #fadbd9;
	}

	.tradelist:nth-of-type(even) {
		color: #8dc63f;
		background-color: #e8f4d9;
	}
</style>
