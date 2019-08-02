<template>

	<view>
		<cu_custom bgColor="bg-gradual-pink" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">量化配置</block>
		</cu_custom>

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
				<input name="input" type="digit" v-model="size" style="padding-left: 60%;">个</input>
			</view>

			<view class="cu-form-group  margin-top">
				<view class="title">止盈</view>
				<input name="input" type="digit" v-model="profit" style="padding-left: 60%;">百分比</input>
			</view>

			<view class="cu-form-group  margin-top">
				<view class="title">止损</view>
				<input name="input" type="digit" v-model="loss" style="padding-left: 60%;">百分比</input>
			</view>

			<view class="padding flex flex-direction">
				<button class="cu-btn bg-red margin-tb-sm lg" @click="confirm">确定</button>
			</view>
		</form>
	</view>

</template>

<script>
	var _self;
	export default {
		data() {
			return {
				updatestatus: false,
				coinindex: -1,
				ktimeindex: -1,
				size: 0,
				profit: 0,
				loss: 0,
				coinlist: ['BTC-USDT', 'ETH-USDT', 'LTC-USDT'],
				ktimelist: ['1分钟', '15分钟', '60分钟'],
				configid: ''
			}
		},
		onLoad(e) {
			_self = this;
			if (e.status === '1') {
				_self.updatestatus = true;
				_self.configid = e.id;
				_self.Http.get("UserConfig/getconfig", {
					id: e.id
				}).then((res) => {
					let coin = res.data.data.coin.toUpperCase();
					_self.coinindex = _self.coinlist.indexOf(coin);
					let ktime = res.data.data.ktime.toString() + "分钟";
					_self.ktimeindex = _self.ktimelist.indexOf(ktime);
					_self.size = res.data.data.size;
					_self.profit = res.data.data.profit;
					_self.loss = res.data.data.loss;
				}).catch((err) => {
					console.log("error", err);
					_self.Utils.toast("接口异常", true);
				})
			} else {
				_self.updatestatus = false;
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
				if (_self.coinindex == -1) {
					_self.Utils.toast("请选择交易对", true);
					return;
				}
				if (_self.ktimeindex == -1) {
					_self.Utils.toast("请选择交易频率", true);
					return;
				}
				if (_self.size <= 0) {
					_self.Utils.toast("请填写数量", true);
					return;
				}

				let url = 'UserConfig/add';

				let data = {
					'coin': _self.coinlist[_self.coinindex],
					'size': _self.size,
					'ktime': parseInt(_self.ktimelist[_self.ktimeindex]),
					'profit': _self.profit,
					'loss': _self.loss
				};

				if (_self.updatestatus) {
					url = 'UserConfig/update';
					data.id = _self.configid;
				}

				_self.Http.post(url, data).then((res) => {
					this.Utils.toast("设置成功");
					setTimeout(() => {
						uni.navigateBack({
							delta: 2
						});
					}, 1000);
				}).catch((err) => {
					_self.Utils.toast("接口异常", true);
				});
			}
		}
	}
</script>

<style>
</style>
