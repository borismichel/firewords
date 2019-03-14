class Particle {
    constructor(initialPos, intialVel, rocket){
        this.pos = initialPos; //createVector(width/2, height-3)
        this.acc = createVector(0, 0);
        this.vel = intialVel; //createVector(0, -8);
        this.color= random(255);
        this.rocket = rocket;
        this.boom = false;
    }

    show() {
        fill(color(this.color, 200, 255));
        stroke(color(this.color, 200, 255));
        noStroke();
        if(this.rocket&&!this.boom) {
            ellipse(this.pos.x, this.pos.y, 5);
        } else {
            this.boom.show();
        }
        
    }

    update() {
        this.applyForce(grvt);
        this.vel.add(this.acc);
        if (this.vel.y >=0&&this.rocket&&!this.boom) {
            this.boom = new NamesPlosion(this.pos.x, this.pos.y, boomName, this.color);
        }
        this.pos.add(this.vel);
        this.acc.setMag(0);
        if (this.boom) {
            this.boom.update();
        }
    }

    applyForce(vF) {
        this.acc.add(vF);
    }


}

class NamesPlosion {
    constructor(x, y, name, color){
        this.pos = createVector(x, y);
        this.acc = createVector(0, 0);
        this.pV = [];
        this.vV = [];
        this.maxX = 0;
        this.maxY = 0;
        this.lifespan = 255;
        this.particles = [];
        this.color = color;
        
        var pts = font.textToPoints(name, 0, 0, 200);
        
        for (var i=0; i < pts.length; i++) {
            this.maxX = (this.maxX > pts[i].x) ? this.maxX : pts[i].x;
            this.maxY = (this.maxY > pts[i].y) ? this.maxY : pts[i].y;
        }
        for (var i=0; i < pts.length; i++) {
            this.vV.push(createVector((pts[i].x-(this.maxX/2))/20, (pts[i].y-(this.maxY/2))/20))
            this.pV.push(createVector(x, y));
        }
        
        console.log(this.maxX);
        console.log(this.maxY);
    }

    show() {
        if (this.lifespan>-20) {
            this.lifespan -= 3.5;
            for(let i=0; i < this.pV.length; i++) {
                // ellipse(this.pV[i].x, this.pV[i].y, this.lifespan/5)
                strokeWeight(5);
                stroke(this.color, 255, 255, this.lifespan)
                point(this.pV[i].x, this.pV[i].y);
            }
        }
    }

    update() {
        for(let i=0; i < this.pV.length; i++) {
            this.applyForce(grvt);
            this.vV[i].add(this.acc);
            this.pV[i].add(this.vV[i].mult(random(0.9, 0.95)));        
            this.acc.setMag(0);
        }

    }
    
    applyForce(vF) {
        this.acc.add(vF);
    }
}