const api_url = 'http://localhost:12345';

const toast = function(title, iserror) {
	uni.showToast({
		title: title,
		icon: iserror ? 'none' : 'success',
		duration: 1000
	});
}

export default {
	api_url,
	toast
}
