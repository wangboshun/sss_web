<template>
	<scroll-view class="page">
		<cu-custom bgColor="bg-gradual-pink" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">账户盈亏</block>
		</cu-custom>
		<canvas canvas-id="canvasGauge" id="canvasGauge" class="charts"></canvas>
	</scroll-view>
</template>

<script>
	import utils from '../../utils.js';
	import uCharts from '../../chart/components/u-charts.js';
	var _self;
	var canvaGauge = null;

	export default {
		data() {
			return {
				cWidth: '',
				cHeight: '',
				pixelRatio: 1,
				Gauge: {
					"categories": [{
						"value": 0.2,
						"color": "#1890ff"
					}, {
						"value": 0.8,
						"color": "#2fc25b"
					}, {
						"value": 1,
						"color": "#f04864"
					}],
					"series": [{
						"name": "完成率",
						"data": 0.66
					}]
				}
			}
		},
		onLoad() {
			_self = this;
			this.cWidth = uni.upx2px(750);
			this.cHeight = uni.upx2px(500);
			this.showGauge();
		},
		methods: {
			showGauge() {
				let chartData = _self.$data.Gauge;
				canvaGauge = new uCharts({
					$this: _self,
					canvasId: 'canvasGauge',
					type: 'gauge',
					fontSize: 11,
					legend: false,
					title: {
						name: Math.round(chartData.series[0].data * 100) + '%',
						color: chartData.categories[1].color,
						fontSize: 25 * _self.pixelRatio,
						offsetY: 50 * _self.pixelRatio, //新增参数，自定义调整Y轴文案距离
					},
					subtitle: {
						name: chartData.series[0].name,
						color: '#666666',
						fontSize: 15 * _self.pixelRatio,
						offsetY: -50 * _self.pixelRatio, //新增参数，自定义调整Y轴文案距离
					},
					extra: {
						gauge: {
							type: 'default',
							width: _self.gaugeWidth * _self.pixelRatio, //仪表盘背景的宽度
							startAngle: 0.75,
							endAngle: 0.25,
							startNumber: 0,
							endNumber: 100,
							splitLine: {
								fixRadius: 0,
								splitNumber: 10,
								width: _self.gaugeWidth * _self.pixelRatio, //仪表盘背景的宽度
								color: '#FFFFFF',
								childNumber: 5,
								childWidth: _self.gaugeWidth * 0.4 * _self.pixelRatio, //仪表盘背景的宽度
							},
							pointer: {
								width: _self.gaugeWidth * 0.8 * _self.pixelRatio, //指针宽度
								color: 'auto'
							}
						}
					},
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					categories: chartData.categories,
					series: chartData.series,
					animation: true,
					width: _self.cWidth * _self.pixelRatio,
					height: _self.cHeight * _self.pixelRatio,
					dataLabel: true,
				});
			}
		}
	}
</script>

<style>

</style>
