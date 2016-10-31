/**
 * 删除数组指定下标
 * @param {Object} index
 */
function delArrayByIndex(index){
	//如果index是数字或者大于数组长度
	if(isNaN(index) || index >= this.length){
		return false;
	}
	for (var i=0,n=0;i<this.length;i++) {
		if(this[i]!=this[index]){
			this[n++]=this[i]
		}
	}
	this.length -=1;
}

/**
 * 根据文件路径读取文件内容
 * @param {Object} fileName
 */
function readFile(fileName){
	var fso = new ActiveXObject("Scripting.FileSystemObject")
	var f = fso.openFile(fileName,1,false,-2);
	var s = "";
	while(!f.AtEndOfStream){
		s+=f.ReadLine()+"\n";
	}
	f.Close();
	return s;
}

/**
 * 删除Ifarme时，清楚Ifarme内存
 * @param {Object} frame
 */
function clearIframeM(frame){
	//设置ifarme的src
	frame[0].src = 'about:blank';
	//清空ifarme内容
	frame[0].contentWindow.document.write('');
	//避免ifarme内存泄漏
	frame[0].contentWindow.close();
	//删除ifarme
	frame.remove();
}

/**
 * 根据年月获取当月的天数
 * @param {Object} year
 * @param {Object} month
 */
function getMonthDays(year,month){
	var t1 = Date.parse(month+"/28/"+year);
	var t2 = Date.parse(month+1+"/1/"+year);
	var thisMonthDays = 27+(t2-t1)/(60*60*24*1000);
	return thisMonthDays;
}

