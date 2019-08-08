<template name="center">
	<view>
		<scroll-view class="page">
			<cu_custom bgColor="bg-gradual-pink" :isBack="false">
				<block slot="content">个人中心</block>
			</cu_custom>

			<view class="cu-bar bg-white solid-bottom margin-top">
				<view class="action">
					<text class="cuIcon-title text-orange "></text>
					我的资金
				</view>
			</view>

			<view class="cu-list grid" :class="['col-' + gridCol, gridBorder ? '' : 'no-border']">
				<view class="cu-item" v-for="(item, index) in cuIconList" :key="index" v-if="index < gridCol * 2" @click="openurl(item.url)">
					<view :class="['cuIcon-' + item.cuIcon, 'text-' + item.color]">
						<view class="cu-tag badge" v-if="item.badge != 0">
							<block v-if="item.badge != 1">{{ item.badge > 99 ? '99+' : item.badge }}</block>
						</view>
					</view>
					<text>{{ item.name }}</text>
				</view>
			</view>

			<view class="cu-bar bg-white solid-bottom margin-top">
				<view class="action">
					<text class="cuIcon-title text-orange"></text>
					设置
				</view>
			</view>
			<view class="cu-modal" :class="modalName == 'menuModal' ? 'show' : ''" @tap="hideModal">
				<view class="cu-dialog" @tap.stop>
					<view class="cu-list menu text-left solid-top">
						<view class="cu-item">
							<view class="content"><text class="text-grey">短边框</text></view>
							<view class="action">
								<switch @change="MenuBorder" :class="menuBorder ? 'checked' : ''" :checked="menuBorder ? true : false"></switch>
							</view>
						</view>
						<view class="cu-item">
							<view class="content"><text class="text-grey">箭头</text></view>
							<view class="action">
								<switch @change="MenuArrow" :class="menuArrow ? 'checked' : ''" :checked="menuArrow ? true : false"></switch>
							</view>
						</view>
						<view class="cu-item">
							<view class="content"><text class="text-grey">卡片</text></view>
							<view class="action">
								<switch @change="MenuCard" :class="menuCard ? 'checked' : ''" :checked="menuCard ? true : false"></switch>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="cu-list menu" :class="[menuBorder ? 'sm-border' : '', menuCard ? 'card-menu margin-top' : '']">
				<view class="cu-item" :class="menuArrow ? 'arrow' : ''">
					<navigator class="content" hover-class="none" @click="openurl('/pages/center/order')" open-type="redirect">
						<text class="cuIcon-discoverfill text-orange"></text>
						<text class="text-grey">账单列表</text>
					</navigator>
				</view>

				<view class="cu-item" :class="menuArrow ? 'arrow' : ''">
					<navigator class="content" hover-class="none" @click="openurl('/pages/center/trade')" open-type="redirect">
						<text class="cuIcon-album text-orange"></text>
						<text class="text-grey">账单收益</text>
					</navigator>
				</view>

				<!-- 		<view class="cu-item" :class="menuArrow?'arrow':''">
					<view class="content">
						<text class="cuIcon-emojiflashfill text-pink"></text>
						<text class="text-grey">使用人数</text>
					</view>
					<view class="action">
						<view class="cu-avatar-group">
							<view class="cu-avatar round sm" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg);"></view>
							<view class="cu-avatar round sm" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg);"></view>
							<view class="cu-avatar round sm" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg);"></view>
							<view class="cu-avatar round sm" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg);"></view>
						</view>
						<text class="text-grey text-sm">1024 人</text>
					</view>
				</view> -->
				<!-- <view class="cu-item" :class="menuArrow?'arrow':''">
					<view class="content">
						<text class="cuIcon-tagfill text-red  margin-right-xs"></text>
						<text class="text-grey">量化中......</text>
					</view>
					<view class="action">
						<view class="cu-tag round bg-orange light">BTC</view>
						<view class="cu-tag round bg-olive light">空</view>
						<view class="cu-tag round bg-blue light">1分钟</view>
					</view>
				</view> -->
				<view class="cu-item">
					<view class="content padding-tb-sm">
						<view>
							<text class="cuIcon-clothesfill text-blue margin-right-xs"></text>
							清理缓存
						</view>
					</view>
					<view class="action">
						<switch class="switch-sex" @change="SwitchSex" :class="skin ? 'checked' : ''" :checked="skin ? true : false"></switch>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	var _self;
	export default {
		name: 'center',
		data() {
			return {
				cuIconList: [{
						cuIcon: 'pay',
						color: 'red',
						badge: 120,
						name: '资金',
						url: '/pages/center/money'
					},
					{
						cuIcon: 'order',
						color: 'orange',
						badge: 1,
						name: '账单',
						url: '/pages/center/order'
					},
					{
						cuIcon: 'moneybag',
						color: 'yellow',
						badge: 0,
						name: '盈亏',
						url: '/pages/center/win'
					},
					{
						cuIcon: 'noticefill',
						color: 'olive',
						badge: 22,
						name: '通知',
						url: '/pages/center/notity'
					},
					{
						cuIcon: 'upstagefill',
						color: 'cyan',
						badge: 0,
						name: '排行榜',
						url: '/pages/center/config'
					},
					{
						cuIcon: 'settings',
						color: 'blue',
						badge: 0,
						name: '配置',
						url: '/pages/center/configlist'
					}
				],
				modalName: null,
				gridCol: 3,
				gridBorder: false,
				menuBorder: false,
				menuArrow: false,
				menuCard: false,
				skin: false,
				listTouchStart: 0,
				listTouchDirection: null
			};
		},
		created: function() {
			_self = this;
			this.$parent.LoginModal();
		},
		methods: {
			openurl(e) {
				if (e === '/pages/center/order' || e === '/pages/center/configlist') {
					uni.navigateTo({
						url: e
					});
				} else {
					_self.Utils.toast('功能暂未开放', true);
				}
			},
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target;
			},
			hideModal(e) {
				this.modalName = null;
			},
			Gridchange(e) {
				this.gridCol = e.detail.value;
			},
			Gridswitch(e) {
				this.gridBorder = e.detail.value;
			},
			MenuBorder(e) {
				this.menuBorder = e.detail.value;
			},
			MenuArrow(e) {
				this.menuArrow = e.detail.value;
			},
			MenuCard(e) {
				this.menuCard = e.detail.value;
			},
			SwitchSex(e) {
				this.skin = e.detail.value;
			}
		}
	};
</script>

<style>
	.page {
		height: 100vh;
		width: 100vw;
	}

	.page.show {
		overflow: hidden;
	}

	.switch-sex::after {
		content: '\e716';
	}

	.switch-sex::before {
		content: '\e7a9';
	}

	.switch-music::after {
		content: '\e66a';
	}

	.switch-music::before {
		content: '\e6db';
	}
</style>
