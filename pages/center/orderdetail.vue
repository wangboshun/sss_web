<template>
	<view>
		<cu-custom bgColor="bg-gradual-pink" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">订单详情</block>
		</cu-custom>

		<view class="cu-form-group margin-top">
			<view class="title">订单号：</view>
			<text class="text-cyan">{{orderdetail.orderno}}</text>
		</view>

		<view class="cu-form-group margin-top">
			<view class="title">交易对：</view>
			<text class="text-cyan">{{orderdetail.coin}}</text>
		</view>

		<view class="cu-form-group margin-top">
			<view class="title">方向：</view>
			<text class="text-cyan">{{orderdetail.side}}</text>
		</view>

		<view class="cu-form-group margin-top">
			<view class="title">K线指标：</view>
			<text class="text-cyan">{{orderdetail.ktime}}</text>
		</view>

		<view class="cu-form-group margin-top">
			<view class="title">成交价格：</view>
			<text class="text-cyan">{{orderdetail.price}}</text>
		</view>

		<view class="cu-form-group margin-top">
			<view class="title">成交数量：</view>
			<text class="text-cyan">{{orderdetail.size}}</text>
		</view>

		<view class="cu-form-group margin-top">
			<view class="title">成交时间：</view>
			<text class="text-cyan">{{orderdetail.createtime}}</text>
		</view>

		<view class="cu-form-group margin-top">
			<view class="title">状态：</view>
			<text class="text-cyan">{{orderdetail.status}}</text>
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				orderdetail: {
					orderno: '20190626123',
					coin: 'BTC-USDT',
					side: '多',
					ktime: '15分钟',
					price: 100.123,
					size: 100,
					createtime: '2019-06-26 12:12:12',
					status: '已完成'
				}
			}
		}
	}
</script>

<style>
</style>
