
let clr = 'red';
let input;
function setup() {
  createCanvas(windowWidth, windowHeight);
  //add input to set color
  input = createInput();
  input.position(0, 150);
  input.attribute('placeholder', 'type a color');

  //add sumit button
  button = createButton('submit');
  button.position(input.x + input.width, input.y);
}

function draw() {
  background(0);
  fill('blue')
  ellipse(200, 200, 20);
  //on button press
  button.mousePressed(function(){
    clr = input.value(); //get value from input field
    var href = setParams('./p2', clr); //set URL navigation to include clr value
    window.location.href = href; //navigate to URL set above
  });

}

