/**
 * placeholder属性兼容IE
 * 必须先引入jquery文件,如果不使用jquery，则
 */
$(function(){
	var doc=document,
    inputs=doc.getElementsByTagName('input'),
    textarea=doc.getElementsByTagName('textarea'),
    supportPlaceholder='placeholder'in doc.createElement('input'),
    textareaSupport='placeholder' in doc.createElement('textarea'),
    placeholder=function(obj){
     var text=obj.getAttribute('placeholder'),
     defaultValue=obj.defaultValue;
     if(defaultValue==''){
    	 obj.value=text;
     }
     obj.onfocus=function(){
        if(obj.value===text)
        {
            this.value='';
        }
      };
      obj.onblur=function(){
        if(obj.value===''){
            this.value=text;
        }
      };
  };
  
  if(!supportPlaceholder){
     for(var i=0,len=inputs.length;i<len;i++){
          var input=inputs[i],
          text=input.getAttribute('placeholder');
          if(input.type==='text'&&text){
             placeholder(input);
          }
      }
  }
  if(!textareaSupport){
	  for(var i=0;i<textarea.length;i++){
		  var area = textarea[i],
		  text = textarea[i].getAttribute('placeholder');
		  if(text){
			  placeholder(area);
		  }
	  }
  }
});
