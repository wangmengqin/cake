var dian = document.querySelector('.dian');
var a = dian.querySelector('a');
var menu = document.querySelector('.menu');
var aP = menu.querySelectorAll('p');
dian.onmouseover = function(){
	menu.style.display = 'block';
}
dian.onmouseout = function(){
	for(var j=0;j<aP.length;j++){
		aP[j].style.color = '#6d4d3f'
	}
	menu.style.display = 'none';
}
for(var i=0;i<aP.length;i++){
	aP[i].onmouseover = function(){
		for(var j=0;j<aP.length;j++){
			aP[j].style.color = '#6d4d3f'
		}
		this.style.color = '#fe5722';
		a.style.color = '#fff';
	}
}
