<template>
	<view>
		<cu-custom bgColor="bg-gradual-pink" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">盈亏比</block>
		</cu-custom>

		<canvas canvas-id="canvasArcbar1" id="canvasArcbar1" class="charts3"></canvas>
		<canvas canvas-id="canvasArcbar2" id="canvasArcbar2" class="charts3" style="margin-left: 250upx;"></canvas>
		<canvas canvas-id="canvasArcbar3" id="canvasArcbar3" class="charts3" style="margin-left: 500upx;"></canvas>

	</view>
</template>

<script>
	import utils from '../../utils.js';
	import uCharts from '../../chart/components/u-charts.js';
	var _self;

	export default {
		data() {
			return {
				cWidth3: '', //圆弧进度图
				cHeight3: '', //圆弧进度图
				arcbarWidth: '', //圆弧进度图，进度条宽度,此设置可使各端宽度一致
				pixelRatio: 1,
				textarea: '',
				Arcbar1: {
					series: [{
						name: "正确率",
						data: 0.29,
						color: "#2fc25b"
					}]
				},
				Arcbar2: {
					series: [{
						name: "错误率",
						data: 0.65,
						color: "#f04864"
					}]
				},
				Arcbar3: {
					series: [{
						name: "完成率",
						data: 0.85,
						color: "#1890ff"
					}]
				}
			}
		},
		onLoad() {
			_self = this;
			this.cWidth3 = uni.upx2px(250);
			this.cHeight3 = uni.upx2px(250);
			this.arcbarWidth = uni.upx2px(24);

			let Arcbar1 = {
				series: []
			};
			let Arcbar2 = {
				series: []
			};
			let Arcbar3 = {
				series: []
			};

			Arcbar1.series = _self.$data.Arcbar1.series;
			Arcbar2.series = _self.$data.Arcbar2.series;
			Arcbar3.series = _self.$data.Arcbar3.series;


			this.showArcbar('canvasArcbar1', 0, Arcbar1);
			this.showArcbar('canvasArcbar2', 1, Arcbar2);
			this.showArcbar('canvasArcbar3', 2, Arcbar3);
		},
		methods: {
			showArcbar(id, index, chartData) {
				new uCharts({
					$this: _self,
					canvasId: id,
					type: 'arcbar',
					fontSize: 11,
					legend: false,
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					series: chartData.series,
					animation: true,
					width: _self.cWidth3 * _self.pixelRatio,
					height: _self.cHeight3 * _self.pixelRatio,
					dataLabel: true,
					title: {
						name: Math.round(chartData.series[index].data * 100) + '%',
						color: chartData.series[index].color,
						fontSize: 25 * _self.pixelRatio
					},
					subtitle: {
						name: chartData.series[index].name,
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
			},
			showArcbar(id, index, chartData) {
				new uCharts({
					$this: _self,
					canvasId: id,
					type: 'arcbar',
					fontSize: 11,
					legend: false,
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					series: chartData.series,
					animation: true,
					width: _self.cWidth3 * _self.pixelRatio,
					height: _self.cHeight3 * _self.pixelRatio,
					dataLabel: true,
					title: {
						name: Math.round(chartData.series[index].data * 100) + '%',
						color: chartData.series[index].color,
						fontSize: 25 * _self.pixelRatio
					},
					subtitle: {
						name: chartData.series[index].name,
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
	/*样式的width和height一定要与定义的cWidth和cHeight相对应*/
	.qiun-charts3 {
		width: 750upx;
		height: 250upx;
		background-color: #FFFFFF;
		position: relative;
	}

	.charts3 {
		position: absolute;
		width: 250upx;
		height: 250upx;
		background-color: #FFFFFF;
	}
</style>
