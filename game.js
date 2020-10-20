const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const size = 4;
const scale = 4;
const resolution = size / scale;

let cells;

canv();

function canv() {
  canvas.width = window.innerWidth-25;
  canvas.height = window.innerHeight-65;
  context.scale(scale, scale);
  context.fillStyle = 'black';
}
function draw_on_position(canvas, event){
    var rect = canvas.getBoundingClientRect();
    var x = event.clientX - rect.left - 25;
    var y = event.clientY - rect.top - 65;
    console.log("Coordinate x: " + x,  
                        "Coordinate y: " + y);
    context.fillStyle = 'black';
    context.fillRect(x, y, 2, 2);    
}

canvas.addEventListener("mousedown", function(e) 
        { 
            draw_on_position(canvas, e); 
        }); 
















function reloadPage(){
    location.reload(true);
}