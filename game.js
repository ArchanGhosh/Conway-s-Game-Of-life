const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const size = 1;
const scale = 1;
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
    var x = Math.floor(event.clientX - rect.left);
    var y = Math.floor(event.clientY - rect.top);
    console.log("Coordinate x: " + x,  
                        "Coordinate y: " + y);
    context.fillStyle = 'black';
    context.fillRect(x, y, 8, 8);    
}

canvas.addEventListener("mousedown", function(e) 
        { 
            draw_on_position(canvas, e); 
        }); 

function draw_cells(){

}














function reloadPage(){
    location.reload(true);
}