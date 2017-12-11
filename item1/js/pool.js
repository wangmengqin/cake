//冒泡排序
function bubbleSort(arr){
		console.log(arr);
		var temp;
		for(var i=0;i<arr.length-1;i++){
			for(var j=0;j<arr.length-1-i;j++){
				if(arr[j]>arr[j+1]){
					temp = arr[j];
					arr[j] = arr[j+1];
					arr[j+1] = arr[j];
					console.log(arr[j]);
				}
			}
		}
		return arr;
	}


//选择排序
function selectSort(arr){
	var temp;
	for(var i = 0;i<arr.length-1;i++){
		for(var j=i+1;j<arr.length;j++){
			if(arr[i]>arr[j]){
				temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}
	}
	return arr;
}
//最大值
function getMax(arr){
	var max = arr[0];
	for(var i=1;i<arr.length;i++){
		if(max<arr[i]){
			max = arr[i];
		}
	}
	return max;
}
//获取最小值
function getMin(arr){
	var min = arr[0];
	for(var i=1;i<arr.length;i++){
		if(min>arr[i]){
			min = arr[i];
		}
	}
	return min;
}
//随机数
function randomNum(){
		return parseInt(1+Math.random()*100);
	}

//随机颜色
function randomColor(){
	var r = parseInt(Math.random()*255);
	var g = parseInt(Math.random()*255);
	var b = parseInt(Math.random()*255);
	return 'rgb('+r+','+g+','+b+')';
}

//让一个元素隐藏
function hide(obj){
	return obj.style.display = 'none';
}
//显示
function show(obj){
	return obj.style.display = 'block';
}

//设置或获取一个元素
function setOrGetAttr(obj,attr,val){
	if(arguments.length == 3){
		return obj.setAttribute(attr, val);
	}
	if(arguments.length == 2){
		return obj.getAttribute(attr);
	}
	if(arguments.length <= 1 || arguments.length>3){
		return;
	}
}
//设置cookie
function setCookie(name,val,time){
	var d = new Date();
	d.setDate(d.getDate()+time);
	document.cookie = name+'='+val+';path=/;expires='+d;
} 
//获取cookie
function getCookie(name){
    var cookie = document.cookie;
    var arr = cookie.split('; ');
    for(var i=0;i<arr.length;i++){
    	var newArr = arr[i].split('=');
	    if(newArr[0]==name){
	    	return newArr[1];
	    }
    }	
}
//删除cookie  
function removeCookie(name,val){
    setCookie(name,val,-1);
}

//通过ClassName获取标签，没有兼容
function getClassName(oParent,aClass){
	var arr = [];
	var aList = oParent.getElementsByTagName('*');
	var reg = new RegExp('\\b'+aClass+'\\b');
	//不能用for in 因为getElementsByTagName获取的是伪数组
	for(var i=0;i<aList.length;i++){
		if(reg.test(aList[i].className)){
			arr.push(aList[i]);
		}
	}
	return arr;
}

//随机验证码
function randomCode(){
	var str = '';
	for(var i=0;i<4;i++){
		var num = parseInt(48+Math.random()*(122-47));

		while(num>=58&&num<=64||num>=91&&num<=96){
			num = parseInt(48+Math.random()*(122-47))
		}
		str+=String.fromCharCode(num)
		
	}
	return str;
}

function getStyle(ele,attr){
	if(ele.currentStyle){
		return ele.currentStyle[attr];
	}else{
		return getComputedStyle(ele,false)[attr];
	}
}

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

function offset(ele){
	var obj = {};
	obj.l = ele.offsetLeft;
	obj.t = ele.offsetTop;
	while(ele.offsetParent){
		obj.l+=ele.offsetParent.offsetLeft;
		obj.t+=ele.offsetParent.offsetTop;
		ele = ele.offsetParent;
	}
	return obj;
}