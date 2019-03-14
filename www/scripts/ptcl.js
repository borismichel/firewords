class Particle {
    constructor(){
        this.pos = createVector(width/2, height-3)
        this.acc = createVector(0, 0);
        this.vel = createVector(0, -20);
        this.color= random(255);
    }

    show() {
        fill(color(this.color, 200, 255));
        noStroke();
        ellipse(this.pos.x, this.pos.y, 5);
    }

    update() {
        this.applyForce(grvt);
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.setMag(0);
    }

    applyForce(vF) {
        this.acc.add(vF);
    }
}