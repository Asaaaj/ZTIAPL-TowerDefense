class Tower{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.towerImg;
        this.towerAttackSound;
        this.attackRange = 150;
        this.middleOfTower = {
            x: this.x + 85,
            y: this.y + 50
        }
        this.damage = 2;
        this.attackSpeed = 200;
        this.attackSpeedCounter = 0;
        this.isUpgraded = 'false';
        this.upgradePrice = 200;
        this.sellPrice = 75;
        this.timeUntilNextShot = 0;
    }

    draw(){
        context.drawImage(this.towerImg, this.x, this.y, 150, 150);
        if(numberOfScreen == 30 || numberOfScreen == 300){
            context.beginPath();
            context.arc(this.middleOfTower.x, this.middleOfTower.y, this.attackRange, 0, 2 * Math.PI);
            context.stroke();
        }
    }

    attacking(){
        this.towerAttackSound.play();
    }

    notifyObservers(j){
        for(let i = 0; i < enemies.length; i++){
            let Observer = enemies[i];
            Observer.notifyCollision(j, this.middleOfTower.x, this.middleOfTower.y, this.attackRange, this.attackSpeed, this.damage);
        }
    }

    getIsUpgraded(){
        return this.isUpgraded;
    }
    setIsUpgraded(){
        this.isUpgraded = 'true';
        this.attackRange += 50;
        this.damage *= 1.5;
        this.sellPrice += this.upgradePrice / 2;
    }

    getUpgradePrice(){
        return this.upgradePrice;
    }
    getSellPrice(){
        return this.sellPrice;
    }

    getTimeUntilNextShot(){
        return this.timeUntilNextShot;
    }
    setTimeUntilNextShot(){
        this.timeUntilNextShot += 1;
    }
    resetTimeUntilNextShot(){
        this.timeUntilNextShot = 0;
    }

    getDamage(){
        return this.damage;
    }
    getAttackSpeed(){
        return this.attackSpeed;
    }
}