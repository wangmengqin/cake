var url = location.href;
var arr = url.split('?');
var str = '';
var content = document.querySelector('.content');
ajax('get','json/cake.json','',function(obj){
	for(var i=0;i<obj.length;i++){
		if(arr[1] == obj[i].id){
			str+=`<div class="information" data-id = ${obj[i].id}>
					<p><a href="">蛋糕配送>></a><a href="">${obj[i].title}</a></p>
					<div class="info-bottom">
						<div class="left-box">
							<div id="box">
								<p id="filter"></p>
								<img src="${obj[i].middle}" class="middle" width="400" height="400">
							</div>
							<div id="max">
								<img src="${obj[i].middle}" class="large" width="800" height="800">	
							</div>
							<div id="small-box">
								<img src="${obj[i].small}" class="small"  data-url="${obj[i].middle}">
							</div>	
							<p>
								<span>分享到：</span><i></i><i></i><i></i><span>收藏此商品</span>
							</p>
						</div>
						
						<ul class="right-box">
							<h3><span>直送</span>${obj[i].title}</h3>
							<li>${obj[i].describ}</li>
							<li>
								<p>市场价：<span>${obj[i].price}</span></p>
								<p>售价：<span>${obj[i].price}</span></p>
							</li>
							<li>当前城市：广州市(可配送至：荔湾区、越秀区、海珠区、天河区)</li>
							<li><label>重量：</label><span class="weig">${obj[i].weight}</span></li>
							<li><label>口味：</label><span class="tast">${obj[i].taste}</span></li>
							<li>请选择："重量" "口味"  </li>
							<li style="display: none;">已选择：${obj[i].weight},${obj[i].weight}</li>
							<li><label>数量：</label><input type="text"  value="1"/><p><i id="add"></i><i id="sub"></i></p></li>
							<li>
								<label for="">贺词：</label><textarea  placeholder="此处不填则表示不要巧克力牌"></textarea>	
							</li>
							<li>巧克力牌加￥10；2磅或以上蛋糕免费送一个，可自订贺词，最多10个中文字、15个中英文混合字或20个英文字，标点符号或换行以空格替代。 </li>
							<li>温馨提示：订单支付成功后，如未能及时收到确认短信或个人中心订单状态没有变化，可凭手机号码取饼。</li>
							<li>选择配件（图片仅供参考，款式或会因货源略作更改） </li>
							<li><a href="##">立即购买</a><a href="##" class=addshop>加入购物车</a></li>
						</ul>
					</div>
				</div>
			
				<div class="detail-info">
					<h4><p>商品详情</p></h4>
					<img src="${obj[i].detail1}"/>
					<img src="${obj[i].detail}"/>
					<img src="${obj[i].detail2}"/>
				</div>
				
				<div class="recommend">
					<h3>热销推荐</h3>
					<ul>
						<li>
							<img src="images/detail/recommend1.jpg"/>
							<p><span>店取</span>小鸭旋转世界</p>
							<p>￥148.00</p>
						</li>
						<li>
							<img src="images/detail/recommend2.jpg"/>
							<p><span>店取</span>3.9澳洲牛奶蛋糕（原味）</p>
							<p>￥148.00</p>
						</li>
						<li>
							<img src="images/detail/recommend3.jpg"/>
							<p><span>店取</span>小鸭旋转世界</p>
							<p>￥148.00</p>
						</li>
						<li>
							<img src="images/detail/recommend4.jpg"/>
							<p><span>店取</span>小鸭旋转世界</p>
							<p>￥168.00</p>
						</li>
						<li>
							<img src="images/detail/recommend5.jpg"/>
							<p><span>店取</span>小鸭旋转世界</p>
							<p>￥148.00</p>
						</li>
					</ul>
			`;
		}
	}
	content.innerHTML = str;
	var tast = document.querySelector('.tast');
	var weig = document.querySelector('.weig');
	tast.onmouseover = function(){
		console.log("aaaa");
		this.style.cursor = 'pointer';
	}
	weig.onmouseover = function(){
		this.style.cursor = 'pointer';
	}
	tast.onclick = function(){
		this.style.border = '1px solid #fe5722';
	}
	weig.onclick = function(){
		this.style.border = '1px solid #fe5722';
	}
	var smallContent = document.getElementById('small-box');
   	var box = document.getElementById('box');
   	var middle = box.querySelector('.middle');
   	var large = document.querySelector('.large');
   	var max = document.getElementById('max');
   	var filter = document.getElementById('filter');
   	smallContent.onmouseover = function(e){
   		var e = e || event;
   		var target = e.target||e.srcElement;
   		if(target.className == 'small'){
   			var url = target.getAttribute('data-url');
	 		middle.src = url;
	 		large.src = url;
   		}
   		
   	} 
   	box.onmouseover = function(){
   		filter.style.display = 'block';
   		max.style.display = 'block';
   		box.onmousemove = function(e){
   			var e = e||event;
   			var target = e.target||e.srcElement;
   			var scroll = document.body.scrollTop || document.documentElement.scrollTop;
   			var os = offset(middle);
   			var x = e.clientX - os.l - filter.offsetWidth/2;
   			var y = e.clientY - os.t - filter.offsetHeight/2+scroll;
   		
   			if(x<=0){
   				x = 0;
   			}
   			if(x>=middle.offsetWidth-filter.offsetWidth){
   				x = middle.offsetWidth-filter.offsetWidth;
   			}
   			if(y<=0){
   				y = 0;
   			}
   			if(y>=middle.offsetHeight-filter.offsetHeight){
   				y = middle.offsetHeight-filter.offsetHeight;
   			}
   			filter.style.left = x + 'px';
   			filter.style.top = y + 'px';
   			large.style.left = -2*x + 'px';
   			large.style.top = -2*y + 'px';
   		}
   	}
   	box.onmouseout = function(){
   		filter.style.display = 'none';
   		max.style.display = 'none';
   	}
   		var obj1 = {};
   	content.onclick = function(e){
   		var e = e||event;
   		var target = e.target||e.srcElement;
   		if(target.className=='addshop'){
   			var id = target.parentNode.parentNode.parentNode.parentNode.getAttribute('data-id');
   			if(getCookie('shop')){
   				obj1 = JSON.parse(getCookie('shop'));
   			}
   			console.log(obj1);
   			if(!obj1[id]){
   				obj1[id] = 1;
   				setCookie('shop',JSON.stringify(obj1),7);	
   			}else{
   				var n2 = obj1[id];
   				n2++;
   				obj1[id] = n2;
   				setCookie('shop',JSON.stringify(obj1),7);		
   			}
   			 //弹出提示框 添加成功
   			var div = document.createElement('div');
   			div.className = 'tips';
   			div.innerHTML = '添加成功';
   			var scroll = document.body.scrollTop || document.documentElement.scrollTop;
   			div.style.top=document.documentElement.clientHeight/2-div.offsetHeight/2+scroll+"px";
   			console.log(div.style.top);
   			document.body.appendChild(div);
   			setTimeout(function(){
   				div.remove();
   			},2000)
   		}
   	}
 
})

	