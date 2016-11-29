/**
 * 获取当前项目路径
 * localhost:port/项目名称/
 */
var root = {};
root.location = (window.location+'').split('/');
root.path = root.location[0]+'//'+root.location[2]+'/'+root.location[3]+'/';

/**
 * 全局的回车事件，需要传入按钮的id或者class
 */
/*
$(function(){
	$(document).bind("keyup",function(e){
		if(e.keyCode == 13){
			$("#id").click();
		}
	})
});
*/

/**
 * 获取url后面的传递的参数
 * @param {Object} name
 * $.getUrlParam(name)
 */
$.getUrlParam = function(name){
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if(r==null)
	return unescape(r[2]);
}

/**
 * 加载效果
 * @param {Object} type
 * @param {Object} msg
 */
function loading(type,msg){
	if(msg == null || msg == ''){
		msg = "请稍后，正在加载......";
	}
	var body_width = document.body.clientWidth;
	var body_height = document.body.clientHeight;
	//展示loading
	if(type == "show"){
		var myload = $("<div id='myload' style='border:2px solid #95B8E7;display:inline-block;padding:10px 8px;;position:absolute;z-index:999999999;top:0px;left:0px;background:#ffffff'>"+
				"<div style='float:left;'><img src='"+hz.basePath+"/images/login/loading.gif'></div>"+
				"<div style='font-size:12px;float:left;display:inline-block;margin-top:2px;margin-left:5px;'>"+msg+"</div>"+
		 "</div>").appendTo($("body"));
		 var myloadwidth = myload.width();
		 var myloadheight = myload.height();
		 myload.css({"left":(body_width-myloadwidth)/2,"top":(body_height-myloadheight)/2});
		 $("<div id='remote_load' style='position:fixed;width:100%;height:"+body_height+"px;z-index:99999999;top:0px;left:0px;background-color: #ccc;opacity: 0.3;filter: alpha(opacity = 30);'></div>").appendTo($("body"));
	}else{
		$("#myload").remove();
		$("#remote_load").remove();
	}
}

/**
 * 设置单选框选中状态，根据参数值找出值与之相等的radio，并置为选中状态
 * @param {Object} radioName  radio名称
 * @param {Object} value  需要找出的radio的值
 */
function setRadioValue(radioName,value){
	var radioList = document.getElementsByName(radioName);
	if(radioList.length) {
		for (var i = 0; i < radioList.length; i++)
		{
			radioList[i].checked = radioList[i].value == value;
		}
	}else {
		radioList.checked = radioList.value == value;
	}
}

/**
 * 检验字符串是否为空
 * @param {Object} str
 */
function checkStringEmpty(str){
	if(str == null || $.trim(str).length == 0 || str == 'null' || str == ''){
		return false;
	}else{
		return true;
	}
}

/**
 * 检验字符串是否为整数
 * @param {Object} str
 */
function strIsInteger(str){
	var isInteger = RegExp(/^[0-9]+$/);
	return isInteger.test(str);
}

/**
 * 动态生成指定行列的表格
 * @param {Object} data
 */
function createTableByRowsAndColunm(tableIdAndClass,info){
	//先清空表格内容
	$("tableIdAndClass").empty();
	//将传递过来的字符串转json对象
	var data = JSON.parse(info);
	var tr = $("<tr></tr>");
	//设置一行多少列(一行4列)
	var rows = 0;
	$.each(data, function(i,item) {
		var value = item["value"];
		tr.append("<td>"+value+"</td>");
		$("tableIdAndClass").append(tr);
		rows++;
		if(rows%4 == 0){
			//重新起一行
			tr = $("<tr></tr>");
		}
	});
}

/**
 * 发送ajax post请求
 * @param {Object} url
 * @param {Object} param
 */
function sendAjaxPost(url,param){
	if(typeof(param) == "string"){
		return "数据格式错误，请传入json格式数据";
	}
	$.ajax({
		type:"post",
		url:url,
		dataType:"json",
		data : JSON.parse(param),
		success:function(data){
			return data;
		},error:function(){
			return "error";
		}
	});
}

/**
 * 设置select默认值
 * @param {Object} selectId
 * @param {Object} value
 */
function setSelectValue(selectId,value){
	$("#selectId option['"+value+"']").attr("selected","selected");
}

/**
 * 获取选中的值
 * @param {Object} id
 */
function getSelectValue(nameId){
	var strValue = "";
	var nameObj = document.getElementsByName("nameId");
	for(var i = 0;i<nameObj.length;i++){
		if(nameObj[i].checked){
			if(i == 0){
				strValue = nameObj[i].value;
			}else{
				strValue+=","+nameObj[i].value;
			}
		}
	}
}
