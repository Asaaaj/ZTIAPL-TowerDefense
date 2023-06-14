class Enemy{
    constructor(){
        this.health = 100;
        this.pozicia = {
            x: -30,
            y: 400
        }
        this.bodyPohybu = {
            x: [175, 175, 470, 470, 730, 730, 960],
            y: [400, 185, 185, 460, 460, 180, 180]
        }
        this.indexBodu = 0;
        this.rychlost = 1;
        this.circleDetection = {
            x: this.pozicia.x + 10,
            y: this.pozicia.y - 45
        }
        this.circleRadius = 40;
        this.moneyForKill = 20;
        this.lifeMinus = 1;
    }
        
    move(){
        if(this.pozicia.x < this.bodyPohybu.x[this.indexBodu]){
            this.pozicia.x += this.rychlost;
        }
        else if(this.pozicia.y < this.bodyPohybu.y[this.indexBodu]){
            this.pozicia.y += this.rychlost;
        }
        else if(this.pozicia.y > this.bodyPohybu.y[this.indexBodu]){
            this.pozicia.y -= this.rychlost;
        }
        else {
            this.indexBodu++;
        }
    }

    updateCirclePositions(){
        this.circleDetection.x = this.pozicia.x + 10;
        this.circleDetection.y = this.pozicia.y - 45;
    }

    notify(j){
        if(enemies[j].pozicia.x == 960){
            gameStatus.setLife(enemies[j].getLifeMinus());
            enemies.splice(j, 1);
        }    
    }

   notifyCollision(j){
        let rozdielX = this.circleDetection.x - towers[j].middleOfTower.x;
        let rozdielY = this.circleDetection.y - towers[j].middleOfTower.y;
        
        let vzdialenost = Math.sqrt(Math.pow(rozdielX, 2) + Math.pow(rozdielY, 2));
        let radius = towers[j].attackRange + this.circleRadius;

        if(vzdialenost <= radius){
            towers[j].setTimeUntilNextShot();
            if(towers[j].getTimeUntilNextShot() == towers[j].getAttackSpeed()){
                towers[j].attacking();
                this.setZivot(-towers[j].getDamage());
            }
            if(towers[j].getTimeUntilNextShot() > towers[j].getAttackSpeed()){
                towers[j].resetTimeUntilNextShot();
            }
        }
   }

    getRychlost(){
        return this.rychlost;
    }
    setRychlost(value){
        this.rychlost = value;
    }

    getPozicia(){
        return this.pozicia;
    }

    getZivot(){
        return this.health;
    }
    setZivot(value){
        this.health += value;
    }

    getMoneyForKill(){
        return this.moneyForKill;
    }
    getLifeMinus(){
        return -this.lifeMinus;
    }
}