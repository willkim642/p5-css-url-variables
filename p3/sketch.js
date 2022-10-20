let clr;
let img;

function preload() {
    img = loadImage("image3.jpg");
}

function setup() {
  let canvas = createCanvas(800, 800); //create canvas half screen width
  canvas.addClass('positioned'); //add positioned class to canvas (see style.css)
  let params = getParams(); //get values from URL
  clr = params.color; 
  background('yellow');
}

function draw() {
    image(img, mouseX, mouseY);
    img.resize(100, 100);
    //fill(clr);
    
  //ellipse(random(800), random(800), 20);
}
