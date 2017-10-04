var img;  // Declare variable 'img'.

function setup() {
  createCanvas(720, 400);
  img = loadImage("./assets/10.png");  // Load the image
}

function draw() {
  // Displays the image at its actual size at point (0,0)
  image(img, 0, 0, img.width*5, img.height*5);
  textSize(32);
  text("when u nut", 10, 30);
}

function run() {
    setup();
    draw();
}