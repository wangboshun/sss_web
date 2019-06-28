<template>

	<view>
		<cu-custom bgColor="bg-gradual-pink" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">量化配置</block>
		</cu-custom>

		<form>
			<view class="cu-form-group margin-top">
				<view class="title">币种</view>
				<picker @change="coinchange" :value="coinindex" :range="coinlist">
					<view class="picker">
						{{coinindex>-1?coinlist[coinindex]:'选择币种'}}
					</view>
				</picker>
			</view>

			<view class="cu-form-group margin-top">
				<view class="title">K线指标</view>
				<picker @change="ktimechange" :value="ktimeindex" :range="ktimelist">
					<view class="picker">
						{{ktimeindex>-1?ktimelist[ktimeindex]:'选择时间'}}
					</view>
				</picker>
			</view>

			<view class="cu-form-group  margin-top">
				<view class="title">数量</view>
				<input name="input" type="digit">个</input>
			</view>

			<view class="cu-form-group  margin-top">
				<view class="title">止盈</view>
				<input name="input" type="digit">百分比</input>
			</view>

			<view class="cu-form-group  margin-top">
				<view class="title">止损</view>
				<input name="input" type="digit">百分比</input>
			</view>

			<view class="padding flex flex-direction">
				<button class="cu-btn bg-red margin-tb-sm lg" @click="confirm">确定</button>
			</view>

		</form>
	</view>

</template>

<script>
	import utils from '../../utils.js';

	export default {
		data() {
			return {
				coinindex: -1,
				ktimeindex: -1,
				coinlist: ['BTC-USDT', 'ETH-USDT', 'LTC-USDT'],
				ktimelist: ['1分钟', '15分钟', '1小时'],
			}
		},
		methods: {
			coinchange(e) {
				this.coinindex = e.detail.value
			},
			ktimechange(e) {
				this.ktimeindex = e.detail.value
			},
			confirm() {
				utils.toast("设置成功");
			}
		}
	}
</script>

<style>
</style>
