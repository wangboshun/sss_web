<template name="center">
	<view>
			center
		<scroll-view scroll-y class="page"> 
			<view class="nav-list">
				center
			</view>
			<view class="cu-tabbar-height"></view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name: "center",
		data() {
			return {
				 
			};
		},
		onShow() {
			console.log("center")
		}
	}
</script>

<style>
	.page {
		height: 100vh;
	}
</style>
