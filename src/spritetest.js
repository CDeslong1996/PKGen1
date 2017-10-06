var img;  // Declare variable 'img'.
const pk = require('./src/pkjson');
const Player = require('./src/player');
const Pk = require('./src/pk');

var player = new Player('Bob', 'male');
player.party.push(new Pk(pk["CHARMANDER"],100,'male'));
player.party.push(new Pk(pk["BULBASAUR"],100,'female'));

let magnification = 4;

function setup() {
  createCanvas(164*magnification, 149*magnification);
  img = loadImage("./assets/ui/battle.png");  // Load the image
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