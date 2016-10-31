/*
 * 
 * total:总记录数
 * pageSize:每页显示条数
 * page:当前页码，从0开始
 * aroundCount:当前页前后显示页码数
 * sideCount:两边显示页码数
 * paginationClass：分页div对应的class
 */

function Pagination(total, pageSize, page, aroundCount, sideCount, paginationClass){
	
	// 总页数
    var pageTotal = 1;
    if(total == 0 || pageSize == 0){
    	pageTotal = 1;
    } else {
    	pageTotal = Math.ceil(total / pageSize);
    }
    // 先全部删除
    $("." + paginationClass).children().remove();
    // 显示向前
    if(page == 1){
    	$("." + paginationClass).append("<span class='current prev'>上一页</span>");
    }else{
    	$("." + paginationClass).append("<a href='###' class='prev'>上一页</a>");
    }
    // 如果总页数大于 两边显示页码数+当前页前后显示数*2,才需要省略显示
    if(pageTotal > aroundCount + sideCount*2){
    	// sideCount + aroundCount + currentPage
    	if(page <= sideCount + aroundCount + 1){
    		for(var i = 1; i <= page + aroundCount; i++){
        		if(page == i){
        			$("." + paginationClass).append("<span class='current'>" + i + "</span>");
        		}else{
        			$("." + paginationClass).append("<a href='###' rel='" + i + "'>" + i + "</a>");
        		}
        	}
    		if(page + aroundCount < pageTotal - sideCount){
    			$("." + paginationClass).append("<span>...</span>");
    		}
    		var lastStart = pageTotal - sideCount + 1;
    		for(var i = lastStart; i <= pageTotal; i++){
    			$("." + paginationClass).append("<a href='###' rel='" + (i + 1) + "'>" + (i + 1) + "</a>");
    		}
    	// 
    	}else if(page >= pageTotal - aroundCount - sideCount){
    		for(var i = 1; i <= sideCount; i++){
    			$("." + paginationClass).append("<a href='###' rel='" + i + "'>" + i + "</a>");
        	}
    		if(page - aroundCount > sideCount){
    			$("." + paginationClass).append("<span>...</span>");
    		}
    		for(var i = page - aroundCount; i <= pageTotal; i++){
    			if(page == i){
    				$("." + paginationClass).append("<span class='current'>" + i + "</span>");
        		}else{
        			$("." + paginationClass).append("<a href='###' rel='" + i + "'>" + i + "</a>");
        		}
    		}
    	//	
    	}else{
    		for(var i = 1; i <= sideCount; i++){
    			$("." + paginationClass).append("<a href='###' rel='" + (i + 1) + "'>" + (i + 1) + "</a>");
        	}
    		if(page - aroundCount > sideCount){
    			$("." + paginationClass).append("<span>...</span>");
    		}
    		for(var i = page - aroundCount; i <= page + aroundCount; i++){
    			if(page == i){
    				$("." + paginationClass).append("<span class='current'>" + i + "</span>");
        		}else{
        			$("." + paginationClass).append("<a href='###' rel='" + i + "'>" + i + "</a>");
        		}
    		}
    		if(page + aroundCount < pageTotal - sideCount){
    			$("." + paginationClass).append("<span>...</span>");
    		}
    		for(var i = pageTotal - sideCount + 1; i <= pageTotal; i++){
    			$("." + paginationClass).append("<a href='###' rel='" + i + "'>" + i + "</a>");
    		}
    	}
    // 否则显示全部
    }else{
    	for(var i = 1; i <= pageTotal; i++){
    		if(page == i){
    			$("." + paginationClass).append("<span class='current'>" + i + "</span>");
    		}else{
    			$("." + paginationClass).append("<a href='###' rel='" + i + "'>" + i + "</a>");
    		}
    	}
    }
	// 显示向后
    if(page == pageTotal){
    	$("." + paginationClass).append("<span class='current next'>下一页</span>");
    }else{
    	$("." + paginationClass).append("<a href='###' class='next'>下一页</a>");
    }
}