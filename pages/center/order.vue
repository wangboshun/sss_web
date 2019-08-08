<template>
	<scroll-view class="page">
		<cu_custom bgColor="bg-gradual-pink" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">订单列表</block>
		</cu_custom>

		<view class="cu-list menu" :class="[menuBorder?'sm-border':'',menuCard?'card-menu margin-top':'']" v-for="(item,index) in orderList"
		 :key="index">
			<view class="cu-item" :class="menuArrow?'arrow':''" @click="opendetail(item)">

				<view class="cu-capsule radius">
					<view class='cu-tag bg-cyan '>
						订单号
					</view>
					<view class="cu-tag line-cyan">
						{{item.first_trade_no}}
					</view>
				</view>

				<view class="action">
					<view class="cu-tag round bg-orange light" style="width: 80px;">{{item.coin}}</view>
					<view v-if="item.side==='buy'" class="cu-tag round" style="width: 30px;color:green;background-color: #d7f0dbff;">多</view>
					<view v-else class="cu-tag round  light bg-red" style="width: 30px;color:red">空</view>
					<view class="cu-tag round bg-blue light" style="width: 50px;">{{item.ktime}}分钟</view>
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
				orderList: [],
				menuCard: false,
				menuBorder: false,
				menuArrow: false
			}
		},
		onLoad() {
			_self = this;
			_self.Http.get("Trade/getlist").then((res) => {
				if (res.data.status) {
					_self.orderList = res.data.data.data;
				} else {
					_self.Utils.toast(res.data.message, true);
				}
			}).catch((err) => {
				_self.Utils.toast("接口异常", true);
			})
		},
		methods: {
			opendetail(e) {
				e.first_time = e.first_time.replace("T", " ");
				uni.navigateTo({
					url: 'orderdetail?val=' + JSON.stringify(e)
				})
			}
		}
	}
</script>

<style>

</style>
