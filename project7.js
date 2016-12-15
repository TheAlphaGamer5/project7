var screen = document.getElementById("screen")
var namespace = "http://www.w3.org/2000/svg"
var drawing = false;
var selectColor = document.getElementById("colorSelect").value
var selectShape = document.getElementById("shapeSelect").value
var selectSize = document.getElementById("sizeSelect").value


// utility function
function transformPoint(event) {
  var pt = screen.createSVGPoint()
  pt.x = event.x
  pt.y = event.y
  var mousept =  pt.matrixTransform(screen.getScreenCTM().inverse())
  return mousept
}

// Step 2: drawSquare and drawCircle functions
function drawSquare(x, y, size, color) {
  var newRect = document.createElementNS(namespace, "rect");
 newRect.setAttribute("fill", color);
 newRect.setAttribute("x", x);
 newRect.setAttribute("y", y);
 newRect.setAttribute("width", size);
 newRect.setAttribute("height", size);
 canvas.appendChild(newRect);
}

function drawCircle(xpos, ypos, radius, color) {
  var newCircle = document.createElementNS(namespace, "circle");
  newCircle.setAttribute("fill", color);
  newCircle.setAttribute("r", radius);
  newCircle.setAttribute("cx", xpos);
  newCircle.setAttribute("cy", ypos);
  screen.appendChild(newCircle);
}



// Step 3: Event listeners
document.addEventListener("mousedown", function(e) {
  // what do you want to do when the user presses down
  // on the mouse button?
drawing = true
console.log("drawing initatated");
 var pt = transformPoint(e);
});







document.addEventListener("mousemove", function(e) {
  var pt = transformPoint(e);
  selectColor = document.getElementById("colorSelect").value
  selectShape = document.getElementById("shapeSelect").value
  selectSize = document.getElementById("sizeSelect").value

  if (selectShape=="square") {

  }
  else if (selectShape=="circle") {
    drawCircle(pt.x,pt.y, document.getElementById("sizeSelect").value,document.getElementById("colorSelect").value)
  }


});












document.addEventListener("mouseup", function(e) {
 var pt = transformPoint(e, screen);
drawing = false;
console.log("drawing terminated")

});
