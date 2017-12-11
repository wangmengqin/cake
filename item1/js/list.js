ajax("post","json/cake-data.json","",function(obj){
	
	var content = document.getElementById('content');
	var btnList = document.querySelector('.btnList');
	var first = document.querySelector('.first');
	var last = document.querySelector('.last');
	var len = obj.length;
	var iNow = 0;
	var num = Math.ceil((len-13)/20) ;
	console.log(len);
	for(var i=0;i<num;i++){
		var a = document.createElement('a');
		a.className = 'page';
		a.innerHTML = i+1;
		btnList.insertBefore(a,last);
	}
	paging(0);
	function paging(n){
		var str='';
		for(var i=n*20+13;i<Math.min(len,(n+1)*20+13);i++){
			str+='<li data-id='+obj[i].id+'><p><img src='+obj[i].images+' /></p><p><i>店取</i><a href="##">'+obj[i].title+'</a></p><p>'+obj[i].price+'<em>'+obj[i].price+'</em></p></li>'
		}
		content.innerHTML = str;
	}
	first.onclick = function(){
		if(iNow<=0){
			iNow=0;
		}else{
			iNow--;
		}
		paging(iNow);
	}
	last.onclick = function(){
		if(iNow>=num-1){
			iNow=num-1;
		}else{
			iNow++;
		}
		paging(iNow);
	}
	var aA = document.querySelectorAll('.page');
	for(var i=0;i<aA.length;i++){
		aA[i].index = i;
		aA[i].onclick = function(){
			paging(this.index);
			iNow = this.index;
		}
	}
	content.onclick = function(e){
		var e = e||event;
		var target = e.target||e.srcElement;
		if(target.tagName=='A'){
			var id = target.parentNode.parentNode.getAttribute('data-id');
			console.log(id);
			location.href='detail.html?'+id;
		}
	}
	
})