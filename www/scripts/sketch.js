var p;
var grvt;
var font;
var path;

function preload() {
    font = loadFont('../assets/Sniglet-ExtraBold.ttf');
}

function setup() {
    colorMode(HSB, 255);
    createCanvas(800, 600)
    grvt = createVector(0, 0.5);
    p = new Particle();
    path = font.textToPoints('Hello', 0, height/2, 190);
    console.log(path);
}

function draw() {
    background(0);
    p.update();
    p.show();
}

