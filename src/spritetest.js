var img;  // Declare variable 'img'.
const pk = require('./src/pkjson');
const Player = require('./src/player');
const Pk = require('./src/pk');

<<<<<<< HEAD
var img;
=======
var player = new Player('Bob', 'male');
player.party.push(new Pk(pk["CHARMANDER"],100,'male'));
player.party.push(new Pk(pk["BULBASAUR"],100,'female'));
>>>>>>> 1c6ffaf3e25eaff05558dc5f3576298b3d0fe9cf

let magnification = 4;

function setup() {
<<<<<<< HEAD
  createCanvas(164*magnification, 149*magnification);
  img = loadImage("./assets/ui/battle.png");  // Load the image
=======
  createCanvas(320, 288);
  img = loadImage("./assets/" + player.party[0].num + ".png");  // Load the image
  img2 = loadImage("./assets/back/" + player.party[1].num + ".png");
>>>>>>> 1c6ffaf3e25eaff05558dc5f3576298b3d0fe9cf
}

function draw() {
  // Displays the image at its actual size at point (0,0)
  noSmooth()
  image(img, 0, 0, img.width * magnification, img.height * magnification);
}

function run() {
    setup();
    draw();
}