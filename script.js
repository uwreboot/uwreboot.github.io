	function openMenu(){

		var x = document.getElementsByClassName("mbtn");
		for (i = 0; i < x.length; i++){

			x[i].className = x[i].className.replace("collapsed","expanded");
		}
	}
	function closeMenu(){
		var x = document.getElementsByClassName("mbtn");
		for (i = 0; i < x.length; i++){
			x[i].className = x[i].className.replace("expanded","collapsed");
		}
	}
						function cycle(){

						var end = "h1";
						var it = document.getElementsByClassName("on")[0];
						var beginning = String.fromCharCode(it.id.charCodeAt(0)+1);
						if (beginning == "6"){
							beginning = "1"
						}
						var next = document.getElementById(beginning.concat(end));
						if (Math.random()>0.99){		//One in a hundred chance...
							next = document.getElementById("secret");
						}
						it.style.display="none";
						next.style.display="inline-block";
						it.className="off";
						next.className="on";
						setTimeout(function(){cycle();},4000);
					}

						function activate(ele,parid){
							var x =document.getElementsByClassName("active");
							var i;

							for (i = 0; i < x.length; i++) {
    							x[i].className = "inactive";	
    						}
    						document.getElementById("one").className="inactive";
    						document.getElementById("two").className="inactive";
    						document.getElementById("three").className="inactive";
    						var y =document.getElementById(parid);
							y.className="active";
							ele.className = "active"; 
						}
