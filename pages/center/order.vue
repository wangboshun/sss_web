<template>
	<scroll-view class="page">
		<cu-custom bgColor="bg-gradual-pink" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">订单列表</block>
		</cu-custom>

		<view class="cu-list menu" :class="[menuBorder?'sm-border':'',menuCard?'card-menu margin-top':'']" v-for="(item,key,index) in orderList">
			<view class="cu-item" :class="menuArrow?'arrow':''">
 
				<view class="cu-capsule">
					<view class='cu-tag bg-cyan '>
						订单号
					</view>
					<view class="cu-tag line-cyan">
						{{item.orderno}}
					</view>
				</view>
				<!--<view class="cu-capsule">
					<view class='cu-tag bg-cyan '>
						数量
					</view>
					<view class="cu-tag line-cyan">
						123
					</view>
				</view>

				<view class="cu-capsule">
					<view class="cu-tag line-cyan">
						{{item.createtime}}
					</view>
				</view> -->

				<view class="action">
					<view class="cu-tag round bg-orange light" style="width: 30px;">{{item.coin}}</view>
					<view class="cu-tag round  light" :class="item.side==='多'?'bg-green':'bg-red'" style="width: 20px;">{{item.side}}</view>
					<view class="cu-tag round bg-blue light" style="width: 40px;">{{item.ktime}}</view>
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
						orderno: '20190626123',
						coin: 'btc',
						side: '多',
						ktime: '1分钟',
						createtime: '2019-06-26 12:12:12'
					}, {
						orderno: '20190626123',
						coin: 'btc',
						side: '多',
						ktime: '15分钟',
						createtime: '2019-06-26 12:12:12'
					}, {
						orderno: '20190626123',
						coin: 'btc',
						side: '空',
						ktime: '1小时',
						createtime: '2019-06-26 12:12:12'
					}, {
						orderno: '20190626123',
						coin: 'btc',
						side: '多',
						ktime: '15分钟',
						createtime: '2019-06-26 12:12:12'
					}, {
						orderno: '20190626123',
						coin: 'btc',
						side: '空',
						ktime: '30分钟',
						createtime: '2019-06-26 12:12:12'
					}, {
						orderno: '20190626123',
						coin: 'btc',
						side: '多',
						ktime: '4小时',
						createtime: '2019-06-26 12:12:12'
					},
					{
						orderno: '20190626123',
						coin: 'btc',
						side: '空',
						ktime: '1天',
						createtime: '2019-06-26 12:12:12'
					}
				],
				menuCard: false,
				menuBorder: false,
				menuArrow: false
			}
		},
		methods: {}
	}
</script>

<style>
</style>
