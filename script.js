
window.onload = alert('PRANGES');document.getElementById("myVideo").onended=alert('Oranges');


/*function myFunction() {
    var nav = document.getElementById("navback");
    var main = document.body;
    var scroll = main.scrollTop*0.001;
    if (scroll<1){
    nav.style.opacity = scroll;
	}
	else{
	nav.style.opacity =1;
	}

}*/
function delVid(){
vid.parentNode.removeChild(vid);
}
/*
function playVid() { 
    vid = document.getElementById("myVideo")
    vid.play(); 
    vid.onended=delVid;
} 

function delVid(){
vid.parentNode.removeChild(vid);
}