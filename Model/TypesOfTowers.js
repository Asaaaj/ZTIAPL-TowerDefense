class DefenseTower extends Tower{
    constructor(x, y){
        super(x, y);
        this.attackRange = 100;
        this.damage = 8;
        this.attackSpeed = 80;
        this.upgradePrice = 150;
        this.sellPrice = 50;
        this.towerAttackSound = defenseAttackSound;
        this.towerImg = document.getElementById("defensetower");
    }
}

class FireTower extends Tower{
    constructor(x, y){
        super(x, y);
        this.attackRange = 150;
        this.damage = 20;
        this.attackSpeed = 90;
        this.upgradePrice = 180;
        this.sellPrice = 125;
        this.towerAttackSound = fireAttackSound;
        this.towerImg = document.getElementById("firetower");
    }
}

class LightningTower extends Tower{
    constructor(x, y){
        super(x, y);
        this.attackRange = 300;
        this.damage = 10;
        this.attackSpeed = 100;
        this.upgradePrice = 600;
        this.sellPrice = 175;
        this.towerAttackSound = lightningAttackSound;
        this.towerImg = document.getElementById("lightningtower");
    }
}

class NatureTower extends Tower{
    constructor(x, y){
        super(x, y);
        this.attackRange = 150;
        this.damage = 1;
        this.attackSpeed = 5;
        this.upgradePrice = 50;
        this.sellPrice = 75;
        this.towerAttackSound = natureAttackSound;
        this.towerImg = document.getElementById("naturetower");
    }
}