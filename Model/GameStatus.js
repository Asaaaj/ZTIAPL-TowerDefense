class GameStatus{
    constructor() {
        this.life;
        this.money;
        this.round = 1;
        this.enemiesKilled;
        this.moneySpent;
        this.earnedBySell;
        this.roundSpawnEnemies = [];
        this.numberOfEnemiesSpawned = 0;
        this.numberOfEnemiesInRound = 0;
        this.indexOfTower;
        this.enemyIndex = 0;
        this.numberOfEnemiesInIndex = 0;
        this.timeUntilNextRound = 0;
    }

    resetStats(){
        this.money = 250;
        this.life = 20;
        this.round = 1;
        this.roundSpawnEnemies = [8, 0, 0, 0];
        this.enemiesKilled = 0;
        this.moneySpent = 0;
        this.earnedBySell = 0;
        this.enemyIndex = 0;
        this.numberOfEnemiesInIndex = 0;
        this.numberOfEnemiesInRound = 0;
        this.numberOfEnemiesSpawned = 0;
        this.timeUntilNextRound = 0; 
        towers = [];
        enemies = [];
        screen = -1;
    }

    nextRound(){
        this.numberOfEnemiesInIndex = 0;
        this.enemyIndex = 0;
        this.numberOfEnemiesInRound = 0;
        this.numberOfEnemiesSpawned = 0; 
        this.round += 1;
        this.timeUntilNextRound = 0;
        screen = -1;
        switch(this.round){
            case 2:
                round2Sound.play();
                this.roundSpawnEnemies = [3, 8, 10, 0];
                break;
            case 3:
                round3Sound.play();
                this.roundSpawnEnemies = [2, 25, 10, 1];
                break;
            case 4:
                round4Sound.play();
                this.roundSpawnEnemies = [5, 10, 30, 2];
                break;
            case 5:
                finalRoundSound.play();
                this.roundSpawnEnemies = [5, 15, 35, 8];
                break;
        }
    }

    notifyObservers(){
        for(let j = 0; j < enemies.length; j++){
            let Observer = enemies[j];
            Observer.notify(j);
        }
    }

    getLife() {
        return this.life;
    }
    setLife(value){
        this.life = this.life + value;
    }

    getMoney() {
        return this.money;
    }
    setMoney(value) {
        this.money = this.money + value;
        if(value < 0){
            this.setMoneySpent(-value);
        }
    }

    getRound(){
        return this.round;
    }
    setRound() {
        this.round++;
    }

    getMoneySpent(){
        return this.moneySpent;
    }
    setMoneySpent(value) {
        this.moneySpent = this.moneySpent + value;
    }
    getEarnedBySell(){
        return this.earnedBySell;
    }
    setEarnedBySell(value){
        this.earnedBySell +=value;
    }

    getEnemiesKilled() {
        return this.enemiesKilled;
    }
    setEnemiesKilled(){
        this.enemiesKilled += 1;
    }

    getIndexOfTower(){
        return this.indexOfTower;
    }
    setIndexOfTower(value){
        this.indexOfTower = value;
    }

    getNumberOfEnemiesInRound(){
        return this.numberOfEnemiesInRound;
    }
    setNumberOfEnemiesInRound(value){
        this.numberOfEnemiesInRound += value;
    }
    resetNumberOfEnemiesInRound(){
        this.numberOfEnemiesInRound = 0;
    }

    getNumberOfEnemiesSpawned(){
        return this.numberOfEnemiesSpawned;
    }
    setNumberOfEnemiesSpawned(){
        this.numberOfEnemiesSpawned++;
    }

    getEnemyIndex(){
        return this.enemyIndex;
    }
    setEnemyIndex(){
        this.enemyIndex += 1;
    }
    
    getNumberOfEnemiesInIndex(){
        return this.numberOfEnemiesInIndex;
    }
    setNumberOfEnemiesInIndex(value){
        if(value == 1){
            this.numberOfEnemiesInIndex += 1;
        }
        else if(value == 0){
            this.numberOfEnemiesInIndex = 0;
        }
    }

    getTimeUntilNextRound(){
        return this.timeUntilNextRound;
    }
    setTimeUntilNextRound(){
        this.timeUntilNextRound += 1;
    }
    resetTimeUntilNextRound(){
        this.timeUntilNextRound = 0;
    }
}
