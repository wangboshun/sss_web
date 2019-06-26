<template>
	<scroll-view class="page">
		<cu-custom bgColor="bg-gradual-pink" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">订单列表</block>
		</cu-custom>

		<view class="cu-list menu" :class="[menuBorder?'sm-border':'',menuCard?'card-menu margin-top':'']" v-for="(item,key,index) in orderList">
			<view class="cu-item" :class="menuArrow?'arrow':''">
				<view class="cu-capsule round">
					<view class='cu-tag bg-red '>
						价格
					</view>
					<view class="cu-tag line-red">
						123
					</view>
				</view> 
				<view class="cu-capsule">
					<view class='cu-tag bg-cyan '>
						数量
					</view>
					<view class="cu-tag line-cyan">
						123
					</view>
				</view>
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
					ktime: '1分钟'
				}, {
					orderno: '20190626123',
					coin: 'btc',
					side: '多',
					ktime: '15分钟'
				}, {
					orderno: '20190626123',
					coin: 'btc',
					side: '空',
					ktime: '1小时'
				}, {
					orderno: '20190626123',
					coin: 'btc',
					side: '多',
					ktime: '15分钟'
				}, {
					orderno: '20190626123',
					coin: 'btc',
					side: '空',
					ktime: '30分钟'
				}, {
					orderno: '20190626123',
					coin: 'btc',
					side: '多',
					ktime: '4小时'
				}, {
					orderno: '20190626123',
					coin: 'btc',
					side: '空',
					ktime: '1天'
				}],
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
