var img;  // Declare variable 'img'.
var pk1;
var pk2;
const pk = require('./src/pkjson');
const Player = require('./src/player');
const Pk = require('./src/pk');

var player = new Player('Bob', 'male');
player.party.push(new Pk(pk["CHARMANDER"],5,false,false));
player.party.push(new Pk(pk["BULBASAUR"],5,false,false));

let magnification = 4;

function setup() {
  createCanvas(164*magnification, 149*magnification);
  img = loadImage("./assets/ui/battle.png");  // Load the image
  pk1 = loadImage("./assets/pksprites/back/" + player.party[0].num + ".png");
  pk2 = loadImage("./assets/pksprites/" + player.party[1].num + ".png");
}

function draw() {
  // Displays the image at its actual size at point (0,0)
  noSmooth()
  image(img, 0, 0, img.width * magnification, img.height * magnification);
  image(pk1, 75, 255, img.width, img.height);
  image(pk2, 420, 75, img.width, img.height);
}

function run() {
    setup();
    draw();
}