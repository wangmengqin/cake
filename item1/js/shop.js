var goods = document.querySelector('.cakeself>.goods');//自取模块
var sendGoods = document.querySelector('.cakesend>.goods');//配送模块
var content = document.querySelector('.content');//内容模块

var goodsnumber = document.querySelector('.goodsnumber');//购物车总共几件商品
var totalPrice = document.querySelector('.total-price');//总价
var delSelect = document.querySelector('.del-select');//删除商品

var totalPrice1 = document.querySelector('.total-price1');//配送模块总价
var delSelect1 = document.querySelector('.del-select1');//配送模块删除
var str = '';
var str1 = '';
var sum = 0;
//var sum1 = 0;
ajax('get','json/cake-data.json','',function(obj){
	if(getCookie('shop')){
		var list = JSON.parse(getCookie('shop'));
		//自取模块
		for(var i in list){
			sum+=list[i];
			for(var j=13;j<obj.length;j++ ){
				if(i == obj[j].id){
					str+=`<div class="good" data-id=${obj[j].id}>
						<input type="checkbox" class="select"/>
						<div class="goodsdetail">
							<img src="${obj[j].small}"/><p><span>${obj[j].title}</span><i><img src="images/shop/ziti_03.jpg"/>支持店取</i><em>重量：${obj[j].weight}/口味：${obj[j].taste}/</em></p>
							<p class="price" data-total=${obj[j].price.slice(1)*list[i]}>${obj[j].price}</p>
							<p class="num"><b class="sub">-</b><input type="text" value="${list[i]}" class="count"/><b class="add">+</b></p>
							<p class="operate"><a href="##" class="del">删除</a><span>选择配件</span></p>
						</div>
					</div>`
				}
			}
		}
		goods.innerHTML = str;
		goodsnumber.innerHTML = sum;
		//配送模块
		for(var i in list){
//			sum1+=list[i];
			for(var j=0;j<13;j++ ){
				if(i == obj[j].id){
					str1 +=`<div class="good" data-id=${obj[j].id}>
						<input type="checkbox" class="select1"/>
						<div class="goodsdetail">
							<img src="${obj[j].small}"/><p><span>${obj[j].title}</span><i><img src="images/shop/ziti_03.jpg"/>支持配送</i><em>重量：${obj[j].weight}/口味：${obj[j].taste}/</em></p>
							<p class="price1" data-total=${obj[j].price.slice(1)*list[i]}>${obj[j].price}</p>
							<p class="num"><b class="sub">-</b><input type="text" value="${list[i]}" class="count"/><b class="add">+</b></p>
							<p class="operate"><a href="##" class="del">删除</a><span>选择配件</span></p>
						</div>
					</div>`
				}
			}
		}
		sendGoods.innerHTML = str1;
//		goodsnumber1.innerHTML = sum1;
	
	}
	
	//自取模块全选
	var all = document.getElementById('allcheck');
	var aCheck = document.querySelectorAll('.select');
	var aPrice = document.querySelectorAll('.price');
	var selectCount = document.querySelector('.selectcount');
	var total = 0;
	//判断全选
	all.onclick = function(){
		if(all.checked){
			for(var i=0;i<aCheck.length;i++){
				aCheck[i].checked = 'checked';
			}
			selectCount.innerHTML = aCheck.length;
			for(var j=0;j<aPrice.length;j++){
				total+=Number(aPrice[j].getAttribute('data-total'));
			}
			totalPrice.innerHTML='¥'+parseFloat(total);
		}else{
			for(var i=0;i<aCheck.length;i++){
				aCheck[i].checked = '';
			}
			selectCount.innerHTML=0;
			totalPrice.innerHTML='¥'+'0.00';
		}
	}
	//判断复选框,并计算商品总价
	for(var i=0;i<aCheck.length;i++){
		aCheck[i].onclick = function(){
				var n = 0;
				var t=0;
			var isTrue = true;
			for(var j=0;j<aCheck.length;j++){
				if(aCheck[j].checked){
					t+=Number(aPrice[j].getAttribute('data-total'));
					console.log('checked:'+t);
					n++;
					
				}else{
					isTrue=false;
//					break;
					console.log('false:'+t);
				}
			}
			if(isTrue){
				all.checked='checked';
			}else{
				all.checked = '';
			}	
			totalPrice.innerHTML='¥'+parseFloat(t);
			selectCount.innerHTML=n;
		}
	}
	//删除选中商品
	delSelect.onclick=function(){
		for(var i=0;i<aCheck.length;i++){
			if(aCheck[i].checked){
				aCheck[i].parentNode.remove();
				var sId = aCheck[i].parentNode.getAttribute('data-id'); 
				var list = JSON.parse(getCookie('shop'));
				delete list[sId];
				setCookie('shop',JSON.stringify(list),7);
			}
		}
	}
	
	//配送模块的操作
	var all1 = document.getElementById('allcheck1');
	var aCheck1 = document.querySelectorAll('.select1');
	var aPrice1 = document.querySelectorAll('.price1');
	var selectCount1 = document.querySelector('.selectcount1');
	var total1 = 0;
	//判断全选
	all1.onclick = function(){
		if(all1.checked){
			for(var i=0;i<aCheck1.length;i++){
				aCheck1[i].checked = 'checked';
			}
			selectCount1.innerHTML = aCheck1.length;
			for(var j=0;j<aPrice1.length;j++){
				total1+=Number(aPrice1[j].getAttribute('data-total'));
			}
			totalPrice1.innerHTML='¥'+parseFloat(total1);
		}else{
			for(var i=0;i<aCheck1.length;i++){
				aCheck1[i].checked = '';
			}
			selectCount1.innerHTML=0;
			totalPrice1.innerHTML='¥'+'0.00';
		}
	}
	//判断复选框,并计算商品总价
	for(var i=0;i<aCheck1.length;i++){
		aCheck1[i].onclick = function(){
				var n = 0;
				var t=0;
			var isTrue = true;
			for(var j=0;j<aCheck1.length;j++){
				if(aCheck1[j].checked){
					t+=Number(aPrice1[j].getAttribute('data-total'));
					console.log('checked:'+t);
					n++;
					
				}else{
					isTrue=false;
//					break;
					console.log('false:'+t);
				}
			}
			if(isTrue){
				all1.checked='checked';
			}else{
				all1.checked = '';
			}	
			totalPrice1.innerHTML='¥'+parseFloat(t);
			selectCount1.innerHTML=n;
		}
	}
	//删除选中商品
	delSelect1.onclick=function(){
		for(var i=0;i<aCheck1.length;i++){
			if(aCheck1[i].checked){
				aCheck1[i].parentNode.remove();
				var sId = aCheck1[i].parentNode.getAttribute('data-id'); 
				var list = JSON.parse(getCookie('shop'));
				delete list[sId];
				setCookie('shop',JSON.stringify(list),7);
			}
		}
	}
	
	
	//自取商品的操作(加减删除)
	goods.onclick = function(e){
		var e = e||event;
		var target = e.target||e.srcElement;
		if(target.className=='add'){
			console.log("111");
			var count = Number(target.previousElementSibling.value);
			count++;
			target.previousElementSibling.value = count;
			var str = target.parentNode.previousElementSibling.innerHTML;
			console.log(str.slice(1));
			var price = Number(str.slice(1));
			var perTotal = price*count;
			target.parentNode.previousElementSibling.setAttribute('data-total',perTotal);
			var sId = target.parentNode.parentNode.parentNode.getAttribute('data-id'); 
			var list = JSON.parse(getCookie('shop'));
			if(!list[sId]){
				list[sId] = count;
			}else{
				var num2 = list[sId];
				num2++;
				list[sId] = num2;
				setCookie('shop',JSON.stringify(list),7);
				console.log(document.cookie);
			}
		}
		if(target.className == 'sub'){
			var count = Number(target.nextElementSibling.value);
			count--;
			if(count<=0){
				count = 0;
			}
			if(count == 0){
				target.parentNode.parentNode.parentNode.remove();
				var sId = target.parentNode.parentNode.parentNode.getAttribute('data-id'); 
				var list = JSON.parse(getCookie('shop'));
				delete list[sId];
				setCookie('shop',JSON.stringify(list),7);
			}
			target.nextElementSibling.value = count;
			var str = target.parentNode.previousElementSibling.innerHTML;
			console.log(str.slice(1));
			var price = Number(str.slice(1));
				
			var perTotal = price*count;
			target.parentNode.previousElementSibling.setAttribute('data-total',perTotal);
			
			var sId = target.parentNode.parentNode.parentNode.getAttribute('data-id'); 
			var list = JSON.parse(getCookie('shop'));
			if(!list[sId]){
				list[sId] = count;
			}else{
				var num2 = list[sId];
				num2--;
				list[sId] = num2;
				setCookie('shop',JSON.stringify(list),7);
				console.log(document.cookie);
			}
		}
		if(target.className == 'del'){
			target.parentNode.parentNode.parentNode.remove();
			var sId = target.parentNode.parentNode.parentNode.getAttribute('data-id'); 
			var list = JSON.parse(getCookie('shop'));
			delete list[sId];
			setCookie('shop',JSON.stringify(list),7);
		}
	}
	//配送商品的操作(加减删除)
	sendGoods.onclick = function(e){
		var e = e||event;
		var target = e.target||e.srcElement;
		if(target.className=='add'){
			console.log("111");
			var count = Number(target.previousElementSibling.value);
			count++;
			target.previousElementSibling.value = count;
			var str = target.parentNode.previousElementSibling.innerHTML;
			console.log(str.slice(1));
			var price = Number(str.slice(1));
			var perTotal = price*count;
			target.parentNode.previousElementSibling.setAttribute('data-total',perTotal);
			var sId = target.parentNode.parentNode.parentNode.getAttribute('data-id'); 
			var list = JSON.parse(getCookie('shop'));
			if(!list[sId]){
				list[sId] = count;
			}else{
				var num2 = list[sId];
				num2++;
				list[sId] = num2;
				setCookie('shop',JSON.stringify(list),7);
				console.log(document.cookie);
			}
		}
		if(target.className == 'sub'){
			var count = Number(target.nextElementSibling.value);
			count--;
			if(count<=0){
				count = 0;
			}
			if(count == 0){
				target.parentNode.parentNode.parentNode.remove();
				var sId = target.parentNode.parentNode.parentNode.getAttribute('data-id'); 
				var list = JSON.parse(getCookie('shop'));
				delete list[sId];
				setCookie('shop',JSON.stringify(list),7);
			}
			target.nextElementSibling.value = count;
			var str = target.parentNode.previousElementSibling.innerHTML;
			console.log(str.slice(1));
			var price = Number(str.slice(1));
				
			var perTotal = price*count;
			target.parentNode.previousElementSibling.setAttribute('data-total',perTotal);
			
			var sId = target.parentNode.parentNode.parentNode.getAttribute('data-id'); 
			var list = JSON.parse(getCookie('shop'));
			if(!list[sId]){
				list[sId] = count;
			}else{
				var num2 = list[sId];
				num2--;
				list[sId] = num2;
				setCookie('shop',JSON.stringify(list),7);
				console.log(document.cookie);
			}
		}
		if(target.className == 'del'){
			target.parentNode.parentNode.parentNode.remove();
			var sId = target.parentNode.parentNode.parentNode.getAttribute('data-id'); 
			var list = JSON.parse(getCookie('shop'));
			delete list[sId];
			setCookie('shop',JSON.stringify(list),7);
		}
	}
})
