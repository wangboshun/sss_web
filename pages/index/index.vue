<template>
	<view>
		<main v-if="PageCur=='main'"></main>
		<components v-if="PageCur=='component'"></components>
		<center v-if="PageCur=='center'"></center>
		
		<view class="cu-bar tabbar bg-white shadow foot">
			<view class="action" @click="NavChange" data-cur="main">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/main' + [PageCur=='main'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='main'?'text-green':'text-gray'">首页</view>
			</view>
			<view class="action" @click="NavChange" data-cur="component">
				<view class='cuIcon-cu-image'> 
					<image :src="'/static/tabbar/component' + [PageCur == 'component'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='component'?'text-green':'text-gray'">订单</view>
			</view>
			<view class="action" @click="NavChange" data-cur="center">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/center' + [PageCur == 'center'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='center'?'text-green':'text-gray'">我</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				PageCur: 'main' 
			}
		},
		onLoad() {
			let the = this;
			let url = this.api_url;

		},
		methods: { 
			NavChange: function(e) {
				this.PageCur = e.currentTarget.dataset.cur
			}
		}
	}
</script>

<style>
 
</style>
