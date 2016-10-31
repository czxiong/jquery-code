/**
 * 时间格式化
 * 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符， 
 * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) 
 * 例子： 
 * (new Date()).format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423 
 * (new Date()).format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18 
 * @param {Object} fmt
 */
Date.prototype.format = function(fmt) { 
	var o = { 
		"M+" : this.getMonth()+1,                 //月份 
		"d+" : this.getDate(),                    //日 
		"h+" : this.getHours(),                   //小时 
		"H+" : this.getHours(),                   //小时 
		"m+" : this.getMinutes(),                 //分 
		"s+" : this.getSeconds(),                 //秒 
		"q+" : Math.floor((this.getMonth()+3)/3), //季度 
		"S"  : this.getMilliseconds()             //毫秒 
	}; 
	if(/(y+)/.test(fmt)) 
		fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length)); 
	for(var k in o) 
		if(new RegExp("("+ k +")").test(fmt)) 
	fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length))); 
	return fmt; 
}

/**
 * 获取当前日期
 */
function getCurDate(){
	var mydate = new Date();
	var y = mydate.getFullYear();
	var M = mydate.getMonth()+1;
	var d = mydate.getDate();
	var h = mydate.getHours();
	var m = mydate.getMinutes();
	var s = mydate.getSeconds();
	return y+"年"+M+"月"+d+"日"+" "+h+"时"+m+"分"+s+"秒";
}

/**
 * 判断开始日期是否小于等于结束日期
 * @param {Object} startDate
 * @param {Object} endDate
 */
function isStartLessThanEndDate(startDate,endDate){
	if(startDate.length > 0 && endDate.length > 0){
		var arrStartDate = startDate.split("-");
		var arrEndDate = endDate.split("-");
		var allStartDate = new Date(arrStartDate[0],arrStartDate[1],arrStartDate[2]);
		var allEndDate = new Date(arrEndDate[0],arrEndDate[1],arrEndDate[2]);   
		if(allStartDate.getTime() > allEndDate.getTime()){
			return false;
		}
		return true;
	}
}

/**
 * 将秒转换成hh:mm:ss
 * @param {Object} value
 */
function formatSeconds(value){
	var theTime = parseInt(value);//秒
	var theTime1 = 0;//分
	var theTime2 = 0;//小时
	if(theTime > 60){
		theTime1 = parseInt(theTime/60);
		theTime = parseInt(theTime%60);
		if(theTime1 > 60) {
	         theTime2 = parseInt(theTime1/60);
	         theTime1 = parseInt(theTime1%60);
	       }
	}
	var result = ""+parseInt(theTime)+"秒";
	       if(theTime1 > 0) {
	       result = ""+parseInt(theTime1)+"分"+result;
	       }
	       if(theTime2 > 0) {
	       result = ""+parseInt(theTime2)+"小时"+result;
	       }
	       return result;
}
