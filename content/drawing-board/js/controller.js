/**
 * 
 *  Document     : controller.js
 *  Created on   : 20 Jun, 2016, 4:45:25 PM
 *  Author       : Pabitra K Jana
 *  Organization : IIT Kharagpur
 *  
 */

// Initialize Simulation on page load
function initializeDrawingBoard() {
    DBScene.init();
    document.getElementById("axis").onchange = function () {
        if (document.getElementById("axis").checked) {
            drawAxis();
        } else {
            clearCanvas(DBScene.canvas);
        }
    };
    document.getElementById("grid").onchange = function () {
        if (document.getElementById("grid").checked) {
            drawGrid();
        } else {
            clearCanvas(DBScene.canvas);
        }
    };
}
//  action will take place when windo resize
function onWindowResize() {
    console.log(Date() + " resize")
}
if (window.addEventListener) {
    window.addEventListener('load', initializeDrawingBoard, false);
    //    window.addEventListener('resize', onWindowResize, false);
} else if (window.attachEvent) {
    window.attachEvent('onload', initializeDrawingBoard);
} else {
    window.onload = initializeDrawingBoard;
}

function sliderChange() {
    var sliderVal = document.getElementById("slider1").value;
    document.getElementById("rangeValue1").value = sliderVal;
}

function reDraw() {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas

    context.strokeStyle = "#df4b26";
    context.lineJoin = "round";
    context.lineWidth = 5;

    for (var i = 0; i < clickX.length; i++) {
        context.beginPath();
        if (clickDrag[i] && i) {
            context.moveTo(clickX[i - 1], clickY[i - 1]);
        } else {
            context.moveTo(clickX[i] - 1, clickY[i]);
        }
        context.lineTo(clickX[i], clickY[i]);
        context.closePath();
        context.stroke();
    }
}
