class PinkEnemy extends Enemy{
    constructor(){
        super();
        this.health = 120;
        this.rychlost = 1;
        this.moneyForKill = 40;
    }
    draw(){
        context.drawImage(document.getElementById("pinkenemy"), this.pozicia.x - 75, this.pozicia.y - 145, 170, 170);
        this.updateCirclePositions();
        this.move();
    }
}

class PurpleEnemy extends Enemy{
    constructor(){
        super();
        this.health = 400;
        this.rychlost = 0.5;
        this.moneyForKill = 20;
    }
    draw(){
        context.drawImage(document.getElementById("purpleenemy"), this.pozicia.x - 75, this.pozicia.y - 145, 170, 170);
        this.updateCirclePositions();
        this.move();
    }
}
class YellowEnemy extends Enemy{
    constructor(){
        super();
        this.health = 300;
        this.rychlost = 1;
        this.moneyForKill = 30;
    }
    draw(){
        context.drawImage(document.getElementById("yellowenemy"), this.pozicia.x - 75, this.pozicia.y - 145, 170, 170);
        this.updateCirclePositions();
        this.move();
    }
}
class GiantEnemy extends Enemy{
    constructor(){
        super();
        this.health = 2300;
        this.rychlost = 0.5;
        this.moneyForKill = 300;
        this.lifeMinus = 6;
    }
    draw(){
        context.drawImage(document.getElementById("giantenemy"), this.pozicia.x - 75, this.pozicia.y - 145, 170, 170);
        this.updateCirclePositions();
        this.move();
    }
}