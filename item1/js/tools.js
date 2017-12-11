//右边工具栏
var toolbar = document.querySelector('.toolbar');
var aA = toolbar.getElementsByTagName('a');
var aB = toolbar.getElementsByTagName('b');
var backTop = document.getElementById('backTop');
var tools = document.getElementById('tools');
var discount = document.getElementById('discount');

var discount = document.getElementById('discount');
for(var i=0;i<aA.length;i++){
	aA[i].onmouseover = function(){
		move(this.children[1],{"right":35});
	}
	aA[i].onmouseout = function(){
		move(this.children[1],{"right":-75});
	}
}
aA[0].onclick = function(){
	
}
var count = 0;
aA[2].onclick = function(){
	count++;
	if(count%2 != 0){
		move(discount,{"right":0});
		move(toolbar,{"right":200});
		this.style.background = '#FF5417';
	}else{
		move(discount,{"right":-195});
		move(toolbar,{"right":0});
		this.style.background = '#3b3b3b';
	}
	
}

backTop.onmouseover = function(){
	move(this.children[1],{"right":35});
}
backTop.onmouseout = function(){
	move(this.children[1],{"right":-75});
}
function backTopEvent(){
		//获取滚动条的距离
		var t = document.body.scrollTop || document.documentElement.scrollTop;
		//让返回顶部固定在页面中间
		tools.style.top = t+document.documentElement.clientHeight/2-tools.offsetHeight/2+'px';
		backTop.style.top = t+document.documentElement.clientHeight - backTop.offsetHeight+'px';
		//当滚动条滚动时执行函数，实现一直固定在中间
		window.onscroll = function(){
			t = document.body.scrollTop || document.documentElement.scrollTop;
			tools.style.top = t+document.documentElement.clientHeight/2-tools.offsetHeight/2+'px';
			backTop.style.top = t+document.documentElement.clientHeight - backTop.offsetHeight+'px';
			discount.style.top=t+'px';
		}
		//返回顶部
		backTop.onclick = function(){
			document.body.scrollTop = document.documentElement.scrollTop = 0;
		}
	}
	backTopEvent();

//toolbar.onmouseover = function(e){
//	var e = e||event;
//	var target = e.target||e.srcElement;
//	if(target.tagName=='I'){
//		var b = target.children[1];
//		console.log(b);
//		move(b,{"right":35});
//	}
//	if(target.id =='backTop'){
//		move(target.children[1],{"right":35});
//	}
//}
//toolbar.onmouseout = function(e){
//	var e = e||event;
//	var target = e.target||e.srcElement;
//	if(target.tagName=='I'){
//		var b = target.children[1];
//		console.log(b);
//		move(b,{"right":-75});
//	}
//	if(target.id =='backTop'){
//		target.children[1].style.right=-75+'px';
//	}
//}
