const api_url = 'http://www.qq.com';

const toast = function(title) { 
	uni.showToast({
		title: title,
		success() {
			setTimeout(function() {
				uni.navigateBack({
					delta: 1
				});
			}, 1500);
		}
	});
}
 
export default {
	api_url,
	toast
}
