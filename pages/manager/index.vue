<template name="manager">
	<view>
		<scroll-view class="page">
			<cu-custom bgColor="bg-gradual-pink" :isBack="false">
				<block slot="content">账号管理</block>
			</cu-custom>

			<view v-if="!isbind">
				<view class="cu-bar solid-bottom margin-top">
					<view class="action">
						<text class="cuIcon-title text-orange "></text>
						配置账户API
					</view>
				</view>

				<form>
					<view class="cu-form-group  margin-top">
						<view class="title">ApiKey：</view>
						<input name="input" />
					</view>

					<view class="cu-form-group  margin-top">
						<view class="title">Secret：</view>
						<input name="input" />
					</view>

					<view class="cu-form-group  margin-top">
						<view class="title">PassPhrase：</view>
						<input name="input" />
					</view>

					<view class="padding flex flex-direction"><button class="cu-btn bg-red margin-tb-sm lg" @click="confirm">确定</button></view>
				</form>

				<view class="cu-tabbar-height"></view>
			</view>

			<view v-else>
				<view class="cu-bar solid-bottom margin-top">
					<view class="action">
						<text class="cuIcon-title text-orange "></text>
						账户资金变动
					</view>
				</view>

				<canvas canvas-id="canvasColumn" id="canvasColumn" class="charts" @touchstart="touchColumn"></canvas>

				<view class="cu-bar solid-bottom margin-top">
					<view class="action">
						<text class="cuIcon-title text-orange "></text>
						量化情况
					</view>

				</view>
				<view class="cu-list menu"> 
					<view class="cu-item">
						<view class="content">
							<text class="cuIcon-tagfill text-red  margin-right-xs"></text>
							<text class="text-grey">量化中......</text>
						</view>
						<view class="action">
							<view class="cu-tag round bg-orange light">BTC</view>
							<view class="cu-tag round bg-olive light">空</view>
							<view class="cu-tag round bg-blue light">1分钟</view>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import utils from '../../utils.js';
	import uCharts from '../../chart/components/u-charts.js';
	var _self;
	var canvaColumn = null;

	export default {
		name: 'manager',
		data() {
			return {
				cWidth: '',
				cHeight: '',
				pixelRatio: 1,
				isbind: true,
				ColumnData: {
					categories: ['06-26', '06-27', '06-28', '06-29', '06-30', '07-01', '07-02'],
					series: [{
						name: '账户资金',
						data: [1251, 1322, 1468, 1655, 1829, 2191, 2319]
					}]
				}
			}
		},
		created: function() {
			if (this.isbind) {
				_self = this;
				this.cWidth = uni.upx2px(750);
				this.cHeight = uni.upx2px(500);
				this.showcolumn();
			}
		},
		methods: {
			showcolumn() {
				let chartData = _self.$data.ColumnData;
				canvaColumn = new uCharts({
					$this: _self,
					canvasId: 'canvasColumn',
					type: 'column',
					legend: true,
					fontSize: 11,
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					animation: true,
					categories: chartData.categories,
					series: chartData.series,
					xAxis: {
						disableGrid: true
					},
					yAxis: {
						//disabled:true
					},
					dataLabel: true,
					width: _self.cWidth * _self.pixelRatio,
					height: _self.cHeight * _self.pixelRatio,
					extra: {
						column: {
							type: 'group',
							width: (_self.cWidth * _self.pixelRatio * 0.45) / chartData.categories.length
						}
					}
				});
			},
			touchColumn(e) {
				canvaColumn.showToolTip(e, {
					format: function(item, category) {
						if (typeof item.data === 'object') {
							return category + ' ' + item.name + ':' + item.data.value;
						} else {
							return category + ' ' + item.name + ':' + item.data;
						}
					}
				});
			},
			confirm() {
				utils.toast('配置成功');
			}
		}
	};
</script>

<style>
	.page {
		height: 100Vh;
		width: 100vw;
	}

	.qiun-charts {
		width: 750upx;
		height: 500upx;
		background-color: #ffffff;
	}

	.charts {
		width: 750upx;
		height: 500upx;
		background-color: #ffffff;
	}
</style>
