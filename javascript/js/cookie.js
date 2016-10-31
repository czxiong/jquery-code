/**
 * 设置cookie信息
 * @param {Object} cookieName
 * @param {Object} cookieValue
 * @param {Object} seconds   过期时间 单位为s
 */
function setCookie(cookieName,cookieValue,seconds){
	var expires = new Date();
	if(cookieValue == '' || seconds < 0 ){
		cookieValue = '';
		seconds = -2592000;
	}
	expires.setTime(expires.getTime()+seconds*1000);
	document.cookie = escape(cookieName)+'='+escape(cookieValue)+(expires?';expires='+expires.toGMTString():'');
}

/**
 * 获取cookie信息
 * @param {Object} name
 * @param {Object} nounescape
 */
function getCookie(name,nounescape){
	var cookie_start = document.cookie.indexOf(name);
	var cookie_end = document.cookie.indexOf(";",cookie_start);
	if(cookie_start == -1){
		return '';
	} else {
		var v = document.cookie.substring(cookie_start+name.length+1,(cookie_end > cookie_start ? cookie_end : document.cookie.length));
		return !nounescape ? unescape(v) : v;
	}
}

/**
 * 删除cookie
 * 为了删除指定的cookie，可以将其过期时间设定为一个过去的时间
 * @param {Object} name
 */
function delCookie(name){
var date = new Date();
date.setTime(date.getTime() - 10000);
document.cookie = name + "=a; expires="+date.toGMTString();
}
