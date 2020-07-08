window.onload = function(){
	document.getElementById('menu3').style.display = 'none';
	document.getElementById('b2').style.color = 'silver';
	document.getElementById('b1').onclick = function(){
		document.getElementById('b2').style.color = 'silver';
		document.getElementById('b1').style.color = 'black';

		document.getElementById('menu1').style.display = 'flex';
		document.getElementById('menu3').style.display = 'none';
	}
	document.getElementById('b2').onclick = function(){
		document.getElementById('b1').style.color = 'silver';
		document.getElementById('b2').style.color = 'black';

		document.getElementById('menu1').style.display = 'none';
		document.getElementById('menu3').style.display = 'flex';
	}
}