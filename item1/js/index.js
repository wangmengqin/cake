
	var banner = document.getElementById('banner');
	var aLi = banner.getElementsByTagName('li');
	var timer = null;
	var iNow = 0;
	var next = 0;
	
	banner.onmouseover = function(){
		this.style.cursor = "pointer";
		clearInterval(timer);
	}
	banner.onmouseout = function(){
		autoPlay();
	}
	autoPlay();
	function autoPlay(){
		timer = setInterval(function(){
			if(next>=aLi.length-1){
				next=0;
			}else{
				next++;
			}
			toImg();
		},2000)
	}
	function toImg(){
		move(aLi[iNow],{"opacity":0});
		move(aLi[next],{"opacity":100});
		iNow = next;
	}

ajax("post","json/cake.json","",function(obj){
	console.log(obj);
	var product1 = document.querySelector('.product1');
	var cake = document.querySelector('.cake');
	var gift = document.querySelector('.gift');
	var str  =  '';
	var str1 = '';
	var str2 = '';
	for(var i=0;i<5;i++){
		str+='<li data-id='+obj[i].id+'><p><img src="'+obj[i].images+'"/></p><div><p>'+obj[i].title+'</p><p class="price">'+obj[i].price+'</p><a href="##" ></a></div></li>';
	}
	product1.innerHTML = str;
	for(var i=5;i<9;i++){
		str1+='<li data-id='+obj[i].id+'><p><img src="'+obj[i].images+'"/></p><div><p>'+obj[i].title+'</p><p class="price">'+obj[i].price+'</p><a href="##" ></a></div></li>';
	}
	cake.innerHTML = str1;
	for(var i=10;i<13;i++){
		str2+='<li data-id='+obj[i].id+'><p><img src="'+obj[i].images+'"/></p><div><p>'+obj[i].title+'</p><p class="price">'+obj[i].price+'</p><a href="##" ></a></div></li>';
	}
	gift.innerHTML += str2;
	product1.onmouseover = function(e){
		var e = e||event;
		var target = e.target||e.srcElement;
		if(target.tagName=='IMG'){
			target.style.cursor = "pointer";
			target.onclick = function(){
				var id = target.parentNode.parentNode.getAttribute('data-id');
				console.log(id);
				location.href='detail1.html?'+id;
			}
			
		}
	}
	cake.onmouseover = function(e){
		var e = e||event;
		var target = e.target||e.srcElement;
		if(target.tagName=='IMG'){
			target.style.cursor = "pointer";
			target.onclick = function(){
				var id = target.parentNode.parentNode.getAttribute('data-id');
				console.log(id);
				location.href='detail1.html?'+id;
			}
			
		}
	}
	gift.onmouseover = function(e){
		var e = e||event;
		var target = e.target||e.srcElement;
		if(target.tagName=='IMG' &&target.className!="imgnull"){
			target.style.cursor = "pointer";
			target.onclick = function(){
				var id = target.parentNode.parentNode.getAttribute('data-id');
				console.log(id);
				location.href='detail1.html?'+id;
			}
		}
	}
})