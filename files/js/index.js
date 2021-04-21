function jump(){
	if(document.getElementById("character").getAttribute("src").split('.')[1] == "gif"){
		document.getElementById("character").setAttribute("src", "files/images/cartoon-man-jumping.jpg");
		document.getElementById("character").style.paddingTop = "0";
		let timer = setTimeout(land, 250);
	}
}

function land(){
	document.getElementById("character").style.paddingTop = "20vh";
	document.getElementById("character").setAttribute("src","files/images/cartoon-man-running.gif");
}

function resetPage(){
	document.getElementById("character").setAttribute("src", "files/images/cartoon-man-standing.jpg");
}

function run(){
	document.getElementById("character").setAttribute("src","files/images/cartoon-man-running.gif");
}

function stop(){
	document.getElementById("character").setAttribute("src", "files/images/cartoon-man-standing.jpg");
}