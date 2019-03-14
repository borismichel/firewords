var p;
var grvt;
var font;
var path;
var boomName = 'P5.js';
var rockets = [];

function preload() {
    font = loadFont('../assets/Sniglet-ExtraBold.ttf');
}

function setup() {
    colorMode(HSB, 255);
    createCanvas(800, 600)
    grvt = createVector(0, 0.2);
}

function draw() {
    background(0, 15);
    if (random(1) < 0.03) {
        rockets.push(new Particle(createVector(width/2, height-3), createVector(0, -12).rotate(random(-PI/8, PI/8)), true));
    }
    for (i=0; i<rockets.length; i++) {
        rockets[i].update();
        rockets[i].show();
    }
}

