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

class NamesPlosion {
    constructor(x, y, name){
        this.pos = createVector(x, y);
        this.pV = [];
        this.vV = [];
        this.log=true;
        var pts = font.textToPoints(name, x, y, 200);
        console.log(pts);
        for (var i=0; i < pts.length; i++) {
            this.vV.push(createVector((pts[i].x-600)/100, (pts[i].y-200)/100))
        }
        for (var i=0; i < pts.length; i++) {
            push()
            this.pV.push(createVector(x, y));
            pop()
        }
        console.log(this.pV);
        console.log(this.vV);
    }

    show() {
        fill(color(this.color, 200, 255));
        for(let i=0; i < this.pV.length; i++) {
            ellipse(this.pV[i].x, this.pV[i].y, 10)
        }

    }

    update() {
        for(let i=0; i < this.pV.length; i++) {
            this.pV[i].add(this.vV[i]);
            this.pV[i].add(this.vV[i]);
        }

    }
}