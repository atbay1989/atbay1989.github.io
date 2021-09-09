let draw = true;
let x = 0;
let y = 0;

const myPics = document.getElementById('canvas');
const context = canvas.getContext('2d');

myPics.addEventListener('mousedown', e => {
  x = e.offsetX;
  y = e.offsetY;
  draw = true;
});

myPics.addEventListener('mousemove', e => {
  if (draw === true) {
    drawLine(context, x, y, e.offsetX, e.offsetY);
    x = e.offsetX;
    y = e.offsetY;
  }
});

window.addEventListener('mouseup', e => {
  if (draw === true) {
    drawLine(context, x, y, e.offsetX, e.offsetY);
    x = 0;
    y = 0;
    draw = false;
  }
});

function drawLine(context, x1, y1, x2, y2) {
  context.beginPath();
  context.strokeStyle = 'black';
  context.lineWidth = 2;
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();
}