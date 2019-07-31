<template>
	<view>
		<view class="cu-modal show">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">授权登录</view>
					<view class="action"><text class="cuIcon-close text-red"></text></view>
				</view>
				<view class="padding-xl">授权登录使用核心功能，获取身份信息，只做登录用途！</view>
				<view class="cu-bar bg-white">
					<view class="action margin-0 flex-sub text-green solid-left"><button style="font-size:0.8rem;" type="warn" @getuserinfo="getUserInfo">取消</button></view>
					<view class="action margin-0 flex-sub  solid-left">
						<button style="font-size:0.8rem;" type="primary" open-type="getUserInfo" @getuserinfo="getUserInfo">登录</button>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {},
	name: 'login-modal',
	computed: {},
	props: {},
	methods: {}
};
</script>

<style></style>
