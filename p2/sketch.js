function setup() {
  let canvas = createCanvas(0.5*windowWidth, 0.5*windowWidth); //create canvas half screen width
  canvas.addClass('centered'); //add centered class to canvas (see style.css)
  let clr = getParams(); //get color value from URL

  //add color values in link to next page
  var a = document.getElementsByTagName('a')[0];
  var href = setParams(a.href, clr);
  a.href = href;

  background(clr);
  noStroke();
}

function draw() {

  fill('yellow');
  ellipse(width/2, height/2, 20);
}
