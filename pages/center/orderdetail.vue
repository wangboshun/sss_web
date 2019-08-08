<template>
	<view>
		<cu_custom bgColor="bg-gradual-pink" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">订单详情</block>
		</cu_custom>

		<view class="cu-form-group margin-top">
			<view class="title">订单号：</view>
			<text class="text-cyan">{{ orderdetail.first_trade_no }}</text>
		</view>

		<view class="cu-form-group margin-top">
			<view class="title">交易对：</view>
			<text class="text-cyan">{{ orderdetail.coin }}</text>
		</view>

		<view class="cu-form-group margin-top">
			<view class="title">方向：</view>
			<text class="text-cyan">{{ orderdetail.side== 'buy' ? '多' : '空' }}</text>
		</view>

		<view class="cu-form-group margin-top">
			<view class="title">K线指标：</view>
			<text class="text-cyan">{{ orderdetail.ktime }}分钟</text>
		</view>

		<view class="cu-form-group margin-top">
			<view class="title">成交价格：</view>
			<text class="text-cyan">{{ orderdetail.first_price }}</text>
		</view>

		<view class="cu-form-group margin-top">
			<view class="title">成交数量：</view>
			<text class="text-cyan">{{ orderdetail.size }}</text>
		</view>

		<view class="cu-form-group margin-top">
			<view class="title">成交时间：</view>
			<text class="text-cyan">{{ orderdetail.first_time }}</text>
		</view>

		<!-- 		<view class="cu-form-group margin-top">
			<view class="title">状态：</view>
			<text class="text-cyan"></text>
		</view> -->
	</view>
</template>

<script>
	var _self;
	export default {
		data() {
			return {
				orderdetail: {}
			};
		},
		onLoad(e) {
			_self = this;
			_self.orderdetail = JSON.parse(e.val);
		}
	};
</script>

<style></style>
