window.addEventListener("load", inicio, false);

function inicio() {
        var img = document.getElementById("kayak");
       // img.addEventListener("click",seleccionar,false);
        pasarMeta();

	var result = document.getElementById("result");
	var selectionPath = document.getElementById("Selection");
	selectionPath.addEventListener("mouseover", () => result.innerText = "En el path");
	selectionPath.addEventListener("mouseout", () => result.innerText = "la cagaste");
	$('body').mousemove(function(e){
	    $("#kayak").css({left:e.pageX - 75, top:e.pageY - 75});
	});
}
function seleccionar (){
    //document.addEventListener("mousemove", printMousePos, false)
    //document.addEventListener("mousemove", pasarMeta, false)

    $(document).mousemove((e) =>  $('#kayak').css({left: e.pageX, top: e.payeY}));

}

function printMousePos(event) {
    var x = event.pageX;
    var y = event.pageY;
    var kayak = document.getElementById("kayak");

    //document.getElementById("x").innerHTML = x;
    //document.getElementById("y").innerHTML = y;
    kayak.style.left = x + 75 +"px";
    kayak.style.top = y -75 +"px";
    


}



function pasarMeta(){
    var x = document.getElementById("kayak").offsetLeft;
    var y = document.getElementById("kayak").offsetTop;

    document.getElementById("x2").innerHTML = x;
    document.getElementById("y2").innerHTML = y;

    if(x >735 && y<506){
       // alert("Te has salido");
    }

}

