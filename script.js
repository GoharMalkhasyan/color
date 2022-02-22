let div1 = document.getElementsByClassName('div1');
let div = document.getElementById('div');
let text = document.getElementById('text');
let g = "";
function color(e = null, check = true){
	for(let i = 0; i < div.children.length; i ++){
		let a = Math.floor(Math.random() * 255);
		let b = Math.floor(Math.random() * 255);
		let c = Math.floor(Math.random() * 255);
		div.children[i].style.backgroundColor = "rgb(" + a + "," + b + "," + c + ")";	
	}
	g = Math.floor(Math.random() * 3);
	text.innerHTML = div.children[g].style.backgroundColor;
	if(check){
		if(e == g){
		document.body.style.backgroundColor = "Green";
		}
		else{
			document.body.style.backgroundColor = "Red";
		}
	}
}
color(null,false);



