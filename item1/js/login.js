
var register = document.querySelector('.register');//立即注册
var loginBox = document.querySelector('.loginbox');

var aP = loginBox.getElementsByTagName('p');//切换登录方式
var userLogin = document.getElementById('userLogin');
var phoneLogin = document.getElementById('phoneLogin');

var loginBtn = document.getElementById('loginBtn');

aP[0].onclick = function(){
	console.log(this);
	aP[1].className ='';
	this.className = 'active';
	userLogin.style.display = 'block';
	phoneLogin.style.display ='none';
}
aP[1].onclick = function(){
	console.log(this );
	aP[0].className ='';
	this.className = 'active';
	userLogin.style.display = 'none';
	phoneLogin.style.display ='block';
}

register.onclick = function(){
	location.href='regist.html';
}

var check = document.getElementById('check');//自动登录选择框
console.log(check);
var phonenum = document.getElementById('phonenum');//用户名手机号
var pwd = document.getElementById('password');//密码
loginBtn.onclick = function(){
	if(phonenum.value=='13612345678'&& pwd.value=='123456'){
		if(check.checked){
			console.log("选了自动登录");
			setCookie('user',phonenum.value,7);
			setCookie('password',pwd.value,7);
		}
		location.href='index.html?'+phonenum.value;
	}else{
		alert('账号或密码错误');
	}
}
if(getCookie('user')){
	var name = getCookie('user');
	var psd = getCookie('password');
	console.log(psd);
	phonenum.value = name;
	pwd.value = psd;
	check.checked = 'checked';
}