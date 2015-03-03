
var vid = document.getElementById("myVideo")

var step = 0

var slideimages = new Array() // create new array to preload images
slideimages[0] = new Image() // create new instance of image object
slideimages[0].src = "images/01.jpg" // set image src property to image path, preloading image in the process
slideimages[1] = new Image()
slideimages[1].src = "images/02.jpg"
slideimages[2] = new Image()
slideimages[2].src = "images/03.jpg"
slideimages[3] = new Image()
slideimages[3].src = "images/04.jpg"
slideimages[4] = new Image()
slideimages[4].src = "images/05.jpg"
slideimages[5] = new Image()
slideimages[5].src = "images/06.jpg"


function delVid(){
vid.parentNode.removeChild(vid);
}

function slide(){
 //If unsupported, exit 

 if (!document.images)
  return

 if (step<5)
  step++
 else
  step=0
 //Keep Slidin' every 4 seconds
 setTimeout("advance()",2000)
}

function openForm(){
    document.getElementById("form").style.display = "inline";
    document.getElementById("closeFormTop").style.display="inline";
        document.getElementById("closeFormBottom").style.display="inline";
    document.getElementById("openForm").style.display = "none";
}
function closeForm(){
    document.getElementById("form").style.display = "none";
    document.getElementById("closeFormTop").style.display="none";
        document.getElementById("closeFormBottom").style.display="none";
    document.getElementById("openForm").style.display = "inline";
}

function advance(){
    document.getElementById('slideshow').src = slideimages[step].src;
}