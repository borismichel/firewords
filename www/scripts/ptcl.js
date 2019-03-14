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
        this.acc = createVector(0, 0);
        this.pV = [];
        this.vV = [];
        this.maxX = 0;
        this.maxY = 0;
        
        var pts = font.textToPoints(name, 0, 0, 200);
        
        for (var i=0; i < pts.length; i++) {
            this.maxX = (this.maxX > pts[i].x) ? this.maxX : pts[i].x;
            this.maxY = (this.maxY > pts[i].y) ? this.maxY : pts[i].y;
        }
        for (var i=0; i < pts.length; i++) {
            this.vV.push(createVector((pts[i].x-(this.maxX/2))/100, (pts[i].y-(this.maxY/2))/100))
            this.pV.push(createVector(x, y));
        }
        
        console.log(this.maxX);
        console.log(this.maxY);
    }

    show() {
        for(let i=0; i < this.pV.length; i++) {
            ellipse(this.pV[i].x, this.pV[i].y, 5)
        }

    }

    update() {
        for(let i=0; i < this.pV.length; i++) {
            this.applyForce(grvt);
            this.pV[i].add(this.vV[i]);
            this.pV[i].add(this.acc);
            this.acc.setMag(0);
        }

    }
    
    applyForce(vF) {
        this.acc.add(vF);
    }
}