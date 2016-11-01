$.ajax({
			type: "GET",
			url:"http://chexian.sinosig.com/Net/netCarModelsDataWebAction.action",
			data:{
				"pageNo":"1",
				"pageSize":"20",
				"frameNo":vehicleFrameNo,
				"encodeURI":"UTF-8",
				"callback":"show"
			},
			 jsonpCallback:"show", 
			dataType:"jsonp",
			success: function(json){
				if(json.Responsetor.ResultCode != "0000"){
					$(".errorMsg").html("无法找到对应的品牌型号,请核对车架号!");
					return;
				}
				$(".errorMsg").html("");
			var dataInfos = [];
			$.each(json.ProductResponses.vehicle,function(i,item){
			var dataInfo = {};
			   dataInfo.text = item.ConfigName+","+item.VehicleName+","+item.GearboxType+"排量"+item.EngineDesc+",新车购置价"+item.PurchasePrice+"元";
			   dataInfo.value = item.VehicleCode+";"+item.Seat;
			   dataInfo.seat=item.Seat;
			   dataInfos.push(dataInfo);
			});
		    jh.picker(dataInfos,elementId,"nodeValue");
			}
		}); 