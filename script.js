let draw = true;
let x = 0;
let y = 0;

//const myPics = document.getElementById('canvas');
//const canvas = canvas.getContext('2d');

var canvas = document.createElement('canvas');
canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.position = 'fixed';
canvas.style.top = 0;
canvas.style.left = 0;
canvas.style.zIndex = -10;
canvas.style.backgroundColor = 'transparent';


canvas.addEventListener('mousedown', e => {
  x = e.offsetX;
  y = e.offsetY;
  draw = true;
});

canvas.addEventListener('mousemove', e => {
  if (draw === true) {
    drawLine(canvas, x, y, e.offsetX, e.offsetY);
    x = e.offsetX;
    y = e.offsetY;
  }
});

window.addEventListener('mouseup', e => {
  if (draw === true) {
    drawLine(canvas, x, y, e.offsetX, e.offsetY);
    x = 0;
    y = 0;
    draw = false;
  }
});

function drawLine(canvas, x1, y1, x2, y2) {
  canvas.beginPath();
  canvas.strokeStyle = 'black';
  canvas.lineWidth = 2;
  canvas.moveTo(x1, y1);
  canvas.lineTo(x2, y2);
  canvas.stroke();
  canvas.closePath();
}