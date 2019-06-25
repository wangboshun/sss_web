<script>
	export default {
		onLaunch: function() {
			let env=process.env.NODE_ENV ;
			let client=uni.getSystemInfoSync();
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		} 
	}
</script>

<style>
    @import "colorui/main.css";
    @import "colorui/icon.css"; 
</style>
