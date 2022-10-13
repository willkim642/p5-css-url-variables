function setup() {
  createCanvas(windowWidth, windowHeight);
  background('white');
  noStroke();
}

function draw() {
  fill('yellow');
  ellipse(random(200), random(200), 20);
}
