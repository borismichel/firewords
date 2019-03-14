var p;
var grvt;
var font;
var path;
var boomName = 'BJÖRN';

function preload() {
    font = loadFont('../assets/Sniglet-ExtraBold.ttf');
}

function setup() {
    colorMode(HSB, 255);
    createCanvas(800, 600)
    grvt = createVector(0, 0.2);
    rocket = new Particle(createVector(width/2, height-3), createVector(0, -12), true);
}

function draw() {
    background(0, 15);
    rocket.update();
    rocket.show();
}

