function move(ele,json,fn){
	clearInterval(ele.timer);
	var iCur = 0;
	ele.timer = setInterval(function(){
		var isStop = true;
		for(var attr in json){
			if(attr == 'opacity'){
				iCur = parseInt(parseFloat(getStyle(ele,attr)*100)); 
			}else{
				iCur = parseInt(getStyle(ele,attr));
			}
			var speed = (json[attr]-iCur)/8;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			if(iCur != json[attr]){
				isStop = false;
			}
			if(attr == 'opacity'){
				ele.style.opacity = (iCur+speed)/100;
				ele.style.filter = 'alpha(opacity:'+(iCur+speed)+')';
			}else{
				ele.style[attr] = iCur+speed+'px';
			}
		}
		if(isStop){
			clearInterval(ele.timer);
			if(fn){
				fn();
			}
		}
	},30)
}

function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,false)[attr];
	}
}



