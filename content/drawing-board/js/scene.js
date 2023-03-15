/**
 * 
 *  Document     : scene.js
 *  Created on   : 20 Jun, 2016, 4:47:25 PM
 *  Author       : Pabitra K Jana
 *  Organization : IIT Kharagpur
 *  
 */
var pos1, pos2;

var DBScene = {
    container: null,
    canvas: null,
    context: null,
    CONTAINER_WIDTH: null,
    CONTAINER_HEIGHT: null,
    init: function () {
        this.container = document.getElementById("canvas2d-view");
        this.CONTAINER_WIDTH = this.container.offsetWidth;
        this.CONTAINER_HEIGHT = this.container.offsetHeight;

        this.canvas = document.createElement("canvas");
        this.context = this.canvas.getContext("2d");

        this.canvas.setAttribute('width', this.CONTAINER_WIDTH);
        this.canvas.setAttribute('height', this.CONTAINER_HEIGHT);
//        this.canvas.setAttribute('id', 'canvas');
        this.container.appendChild(this.canvas);

        this.canvas.onmouseup = onCanvasMouseUp;
        this.canvas.onmousedown = onCanvasMouseDown;
        this.canvas.onmousemove = onCanvasMouseMove;

        this.canvas.oncontextmenu = function (e) {
            e.preventDefault();
            return false;
        }

//        this.container.addEventListener('mouseover', onContainerMouseOver, false);
//        this.container.addEventListener('mouseout', onContainerMouseOut, false);

//        document.addEventListener('mousemove', onContainerMouseMove, false);
//        document.addEventListener('mousedown', onContainerMouseDown, false);
//        document.addEventListener('keydown', onContainerKeyDown, false);
//        document.addEventListener('keyup', onContainerKeyUp, false);
//        document.addEventListener('touchstart', onDocumentTouchStart, false);
//        document.addEventListener('touchmove', onDocumentTouchMove, false);
    }
};

var onCanvasMouseOver = function () {

}
var onCanvasMouseOut = function () {

}
var onCanvasMouseUp = function (evt) {
    var pos = getMousePos(this, evt)
    pos2 = pos;
    var color = document.getElementById("html5colorpicker").value;
    drawLine(pos1, pos2, color);
}
var onCanvasMouseDown = function (evt) {
    var pos = getMousePos(this, evt);
    pos1 = pos;
    var color = document.getElementById("html5colorpicker").value;
    drawPoint(pos, color);
}

var onCanvasMouseMove = function (evt) {
    var mousePos = getMousePos(this, evt);
    document.getElementById("mouse-pos").innerHTML = "[ " + mousePos.x + ',' + mousePos.y + " ]";
//    var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;    
//    writeMessage(this, message);
}


var writeMessage = function (canvas, message) {
    var context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.font = '18pt Calibri';
    context.fillStyle = 'black';
    context.fillText(message, 10, 25);
}
var getMousePos = function (canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}
var drawPoint = function (pos, color) {
    var radius = 3;
    DBScene.context.fillStyle = color;
    DBScene.context.strokeStyle = color;
    DBScene.context.beginPath();
    DBScene.context.arc(pos.x, pos.y, radius, 0, 2 * Math.PI);
    DBScene.context.closePath();
    DBScene.context.fill();
    DBScene.context.stroke();
}
var drawLine = function (pos1, pos2, color) {
    DBScene.context.strokeStyle = color;
    DBScene.context.beginPath();
    DBScene.context.moveTo(pos1.x, pos1.y);
    DBScene.context.lineTo(pos2.x, pos2.y);
    DBScene.context.stroke();
}
var clearCanvas = function (canvas) {
    DBScene.context.clearRect(0, 0, canvas.width, canvas.height);
}



