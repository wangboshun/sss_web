<template>
	<scroll-view class="page">
		<cu-custom bgColor="bg-gradual-pink" :isBack="true" style="z-index: 2;">
			<block slot="backText">返回</block>
			<block slot="content">盈亏比</block>
		</cu-custom>

		<view class="cu-bar solid-bottom margin-top" style="z-index: 1;">
			<view class="action">
				<text class="cuIcon-title text-orange "></text>
				量化盈利率
			</view>
		</view>
		<view style="z-index: 1;">
			<canvas canvas-id="canvasArcbar1" class="charts" id="canvasArcbar1"></canvas>
		</view>

		<view class="cu-bar solid-bottom" style="z-index: 1;">
			<view class="action">
				<text class="cuIcon-title text-orange "></text>
				量化亏损率
			</view>
		</view>
		<view class="response" style="z-index: 1;">
			<canvas canvas-id="canvasArcbar2" class="charts" id="canvasArcbar2"></canvas>
		</view>

		<view class="cu-bar solid-bottom" style="z-index: 1;">
			<view class="action">
				<text class="cuIcon-title text-orange "></text>
				量化总体分析
			</view>
		</view>
		<view class="response" style="z-index: 1;">
			<canvas canvas-id="canvasArcbar3" class="charts" id="canvasArcbar3"></canvas>
		</view>
	</scroll-view>
</template>

<script> 
	import uCharts from '../../chart/components/u-charts.js';
	var _self;
	var canvaArcbar1;

	export default {
		data() {
			return {
				cWidth3: '', //圆弧进度图
				cHeight3: '', //圆弧进度图
				arcbarWidth: '', //圆弧进度图，进度条宽度,此设置可使各端宽度一致
				pixelRatio: 1,
				ArcbarData: [{
					name: " ",
					data: 0.79,
					color: "#2fc25b"
				}, {
					name: " ",
					data: 0.11,
					color: "#f04864"
				}, {
					name: " ",
					data: 0.85,
					color: "#1890ff"
				}]
			}
		},
		onLoad() {
			_self = this;
			this.cWidth3 = uni.upx2px(300); //这里要与样式的宽高对应
			this.cHeight3 = uni.upx2px(300); //这里要与样式的宽高对应
			this.arcbarWidth = uni.upx2px(25);

			let data1 = {
				series: []
			};
			let data2 = {
				series: []
			};
			let data3 = {
				series: []
			};

			data1.series[0] = _self.$data.ArcbarData[0];
			data2.series[0] = _self.$data.ArcbarData[1];
			data3.series[0] = _self.$data.ArcbarData[2];

			_self.showArcbar("canvasArcbar1", data1);
			_self.showArcbar("canvasArcbar2", data2);
			_self.showArcbar("canvasArcbar3", data3);
		},
		methods: {
			showArcbar(canvasId, chartData) {
				canvaArcbar1 = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'arcbar',
					fontSize: 11,
					legend: true,
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					series: chartData.series,
					animation: true,
					width: _self.cWidth3 * _self.pixelRatio,
					height: _self.cHeight3 * _self.pixelRatio,
					dataLabel: true,
					title: {
						name: Math.round(chartData.series[0].data * 100) + '%',
						color: chartData.series[0].color,
						fontSize: 25 * _self.pixelRatio
					},
					subtitle: {
						name: chartData.series[0].name,
						color: '#666666',
						fontSize: 15 * _self.pixelRatio
					},
					extra: {
						arcbar: {
							type: 'default',
							width: _self.arcbarWidth * _self.pixelRatio, //圆弧的宽度
						}
					}
				});

			}
		}
	}
</script>

<style>
	.page {
		height: 100Vh;
		width: 100vw;
		background: #FFFFFF;
		text-align: center;
	}

	.charts {
		width: 300upx;
		height: 300upx;
		margin-left: 220upx;
	}

	.solid-bottom {
		border-bottom: 5upx solid rgba(0, 0, 0, 0.1);
	}
</style>
