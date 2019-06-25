<template name="component">
	<view>
			component
		<scroll-view scroll-y class="page"> 
			<view class="nav-list">
				component
			</view>
			<view class="cu-tabbar-height"></view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name: "component",
		data() {
			return {
				 
			};
		},
		onShow() {
			console.log("component")
		}
	}
</script>

<style>
	.page {
		height: 100vh;
	}
</style>
