
const Openid='';

const toast = function(title, iserror) {
	uni.showToast({
		title: title,
		icon: iserror ? 'none' : 'success',
		duration: 1000
	});
}

export default { 
	Openid,
	toast
}
