<template name="main">
	<view>
		main
		<scroll-view scroll-y class="page"> 
			<view class="nav-list">
				main
			</view>
			<view class="cu-tabbar-height"></view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name: "main",
		data() {
			return {
				 
			};
		},
		onShow() {
			console.log("main")
		}
	}
</script>

<style>
	.page {
		height: 100vh;
	}
</style>
