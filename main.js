canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

fC = "a.jpeg";

function add(){
    ni= new Image();
    ni.onload = ufc;
    ni.src = fC;
}

function ufc(){
    ctx.drawImage(ni,0,0, canvas.width, canvas.height);
}

function function1() {
    document.getElementById("audio1").play();
}