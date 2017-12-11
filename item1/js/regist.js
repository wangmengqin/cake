
//整个ul
var oList = document.getElementById('list');
//换一张
var changeBtn = document.getElementById('change');
//验证码
var oCode = document.getElementById('code');

//用户名
var uname = document.getElementById('username');
//密码
var pwd = document.getElementById('password');
//阅读用户注册协议按钮
var check = document.getElementById('check');
var isTrue = true;
var result1;//输入提示
var result2;//验证不通过
var result3;//验证成功
var arr = [];
//存储账号密码的json对象
var obj = {};
//表单验证
oList.onmouseover = function(e){
	var e=e||event;
	var target = e.target || e.srcElement;
	if(target.tagName == 'INPUT'){
		target.onfocus = function(){
			console.log("点击")
			if(target.id == 'codevalue'){
				result1 = target.parentNode.nextElementSibling.nextElementSibling;
					result2 = target.parentNode.nextElementSibling.nextElementSibling.nextElementSibling;
					result3 = target.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
			}else{
				result1 = target.parentNode.nextElementSibling;
			result2 = target.parentNode.nextElementSibling.nextElementSibling;
			result3 = target.parentNode.nextElementSibling.nextElementSibling.nextElementSibling;
			}
			result1.style.display = 'block';
			result2.style.display = 'none';
			result3.style.display = 'none';
		}

		target.onblur = function(){
			if(target.id == 'codevalue'){
				result1 = target.parentNode.nextElementSibling.nextElementSibling;
					result2 = target.parentNode.nextElementSibling.nextElementSibling.nextElementSibling;
					result3 = target.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
			}else{
				result1 = target.parentNode.nextElementSibling;
			result2 = target.parentNode.nextElementSibling.nextElementSibling;
			result3 = target.parentNode.nextElementSibling.nextElementSibling.nextElementSibling;
			}
			switch(target.id){
				case 'username':
					isTrue = /^(13|18|15|17)\d{9}$/.test(target.value);
					
					break;
				case 'password':
					isTrue = (/^([a-zA-z])|(\d){6,20}$/.test(target.value))||(/^[a-zA-Z0-9]{6,20}$/.test(target.value))||/^\w{6-20}$/.test(target.value);
					break;
				case 'password1':
					isTrue = (target.value == pwd.value &&target.value !='');
					break;
				case 'email':
					isTrue = /^\w{6,18}@(\d|[a-zA-Z]){2,}\.(com|cn|net)$/.test(target.value);
					console.log(isTrue);
					break;
				case 'codevalue':
					isTrue = (target.value ==oCode.innerHTML );
					break;
			}
			
			if(isTrue == false){
				
				result1.style.display = 'none';
				result2.style.display = 'block';
				result3.style.display = 'none';
			}else{
				arr.push(1);
				result1.style.display = 'none';
				result2.style.display = 'none';
				result3.style.display = 'block';
			}
			
		}
	}
	
	if(target.tagName == 'BUTTON'){
		target.onclick = function(){
			console.log(check.checked);
			if(arr.length>=5&&check.checked){
				var nameVal = uname.value;
				
				var passVal = pwd.value
//				if(!obj[nameVal]){
//					obj[nameVal] = pwd.value;
//				}
				setCookie('username',nameVal,7);
				setCookie('pwd',passVal,7);
				location.href='login.html';
			}else{
				alert('信息不完整');
			}
		}
	}
}

//生成随机验证码


oCode.innerHTML = randomCode();
changeBtn.onclick = function(){
	oCode.innerHTML = randomCode();
}

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
