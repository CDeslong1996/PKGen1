var img;  // Declare variable 'img'.

function setup() {
  createCanvas(320, 288);
  img = loadImage("./assets/18.png");  // Load the image
  img2 = loadImage("./assets/back/10.png");
}

function draw() {
  // Displays the image at its actual size at point (0,0)
  image(img, 200, 0, img.width*2, img.height*2);
  image(img2, 0, 200, img2.width*3, img2.height*3);
  textSize(20);
  text("I sexually Identify as \nan \Apache Helicopter. Ever \nsince I was a boy I \ndreamed of soaring over the oilfields dropping hot sticky loads on disgusting foreigners. People say to me that a person being a helicopter is Impossible and I’m fucking retarded but I don’t care, I’m beautiful. I’m having a plastic surgeon install rotary blades, 30 mm cannons and AMG-114 Hellfire missiles on my body. From now on I want you guys to call me “Apache” and respect my right to kill from above and kill needlessly. If you can’t accept me you’re a heliphobe and need to check your vehicle privilege. Thank you for being so understanding.", 10, 30);
  text("WORLDSTAR", 100, 200);
}

function run() {
    setup();
    draw();
}