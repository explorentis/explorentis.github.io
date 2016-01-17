/**
 * Created by explorentis on 07.04.15.
 */

canvas = document.getElementById('screen');
context = canvas.getContext('2d');

function clearScreen(){
    context.fillStyle = 'Black';
    context.fillRect(0, 0, canvas.width, canvas.height);
}

/*
function drawCircle(centerX, centerY, radius, color){
    context.fillStyle = color;
    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    context.fill();
}
*/

function drawBorderedCircle(centerX, centerY, radius, color, border_width, border_color){
    context.beginPath();
    context.fillStyle = color;
    context.arc(centerX, centerY, radius + border_width / 2 /* поправка, чтобы за счет бордюра не уменьшался радиус */,
        0, 2 * Math.PI);
    context.fill();
    context.lineWidth = border_width;
    context.strokeStyle = border_color;
    context.stroke();
}

function drawCross(X, Y, size, color){
    context.beginPath();
    context.strokeStyle = color;
    context.moveTo(X, Y - size);
    context.lineTo(X, Y + size);
    context.moveTo(X - size, Y);
    context.lineTo(X + size, Y);
    context.stroke();
}

function mkTextCanvas(text, color, size){
    var _canvas = document.createElement('canvas');
    var _context = _canvas.getContext('2d');
    _context.font = "bold " + size + "pt sans-serif";
    _canvas.width = _context.measureText(text).width;
    _canvas.height = size * 2;
    _context.fillStyle = color;
    _context.font = "bold " + size + "pt sans-serif";
    _context.fillText(text, 0, 1.5 * size);
    return _canvas;
}

function drawText(X, Y, text, color, size){
    context.fillStyle = color;
    context.font = "bold " + size + "pt sans-serif";
    context.fillText(text, X, Y);
}

function drawLine(X0, Y0, X1, Y1, color){
    context.beginPath();
    context.strokeStyle = color;
    context.moveTo(X0, Y0);
    context.lineTo(X1, Y1);
    context.stroke();
}