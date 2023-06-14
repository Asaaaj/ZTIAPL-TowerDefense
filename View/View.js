function refreshCanvas(){
    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);
}

function drawBackground(){
    context.drawImage(document.getElementById("background"), 10, 10, 950, 580);
}

function checkLife(){
    gameStatus.notifyObservers();
    if(gameStatus.getLife() <= 0){
        cancelAnimationFrame(request);
        gameOverStats();
    }
}

function checkRound(){
    if(gameStatus.getLife() > 0 && gameStatus.getNumberOfEnemiesSpawned() == gameStatus.getNumberOfEnemiesInRound() && enemies.length == 0){
        if(gameStatus.getRound() + 1 == 6){
            youWinSound.play();
            cancelAnimationFrame(request);
            winScreen();
        }
        else if(gameStatus.getTimeUntilNextRound() == 0){ 
            prepareYourselfSound.play();
        }
        gameStatus.setTimeUntilNextRound();    
    }
    if(gameStatus.getLife() > 0 && gameStatus.getTimeUntilNextRound() >= 200){
        gameStatus.nextRound();
    }
}
function isRound1(){
    if(screen == -1 && gameStatus.getRound() == 1 && gameStatus.getTimeUntilNextRound() < 200){
        if(gameStatus.getTimeUntilNextRound() == 0){ 
            prepareYourselfSound.play();
        }
        gameStatus.setTimeUntilNextRound(); 
        screen = -2;
    }
    if(gameStatus.getTimeUntilNextRound() >= 200){
        round1Sound.play();
        screen = 0;
        gameStatus.resetTimeUntilNextRound();
        gameStatus.resetNumberOfEnemiesInRound();
        for(let i = 0; i < 4; i++){
            gameStatus.setNumberOfEnemiesInRound(gameStatus.roundSpawnEnemies[i]);
        }
    }
}


function addNewTower(poziciaX, poziciaY, typVeze){
    buildSound.play();
    switch(typVeze){
        case 'defense':
            towers.push(new DefenseTower(poziciaX - 85, poziciaY - 75));
            gameStatus.setMoney(-100);
            break;
        case 'fire':
            towers.push(new FireTower(poziciaX - 85, poziciaY - 75));
            gameStatus.setMoney(-250);
            break;
        case 'lightning':
            towers.push(new LightningTower(poziciaX - 85, poziciaY - 75));
            gameStatus.setMoney(-350);
            break;
        case 'nature':
            towers.push(new NatureTower(poziciaX - 85, poziciaY - 75));
            gameStatus.setMoney(-150);
            break;
    }
    numberOfScreen = 3;
}

function isCollision(){
    for(let i = 0; i < towers.length; i++){
        towers[i].notifyObservers(i);
    }
    for(let j = 0; j < enemies.length; j++){
        if(enemies[j].getZivot() <= 0){
            gameStatus.setMoney(enemies[j].getMoneyForKill());
            enemies.splice(j, 1);
            gameStatus.setEnemiesKilled();
            
            j--;
        }
    }
}

function refreshTowers(){
    for(let i = 0; i < towers.length; i++){
        towers[i].draw();
    }
}

function addEnemies(){
    if(screen == -1){
        for(let i = 0; i < 4; i++){
            gameStatus.setNumberOfEnemiesInRound(gameStatus.roundSpawnEnemies[i]);
        }
    }
    if(gameStatus.getNumberOfEnemiesSpawned() < gameStatus.getNumberOfEnemiesInRound()){
        if(gameStatus.getEnemyIndex() == 0 && screen == 50 && gameStatus.getNumberOfEnemiesInIndex() < gameStatus.roundSpawnEnemies[0]){
            enemies.push(new PinkEnemy());
            gameStatus.setNumberOfEnemiesSpawned();
            gameStatus.setNumberOfEnemiesInIndex(1);
            screen = 0;
        }
        else if(gameStatus.getEnemyIndex() == 1 && screen == 100 && gameStatus.getNumberOfEnemiesInIndex() < gameStatus.roundSpawnEnemies[1]){
            enemies.push(new PurpleEnemy());
            gameStatus.setNumberOfEnemiesSpawned();
            gameStatus.setNumberOfEnemiesInIndex(1);
            screen = 0;
        }
        else if(gameStatus.getEnemyIndex() == 2 && screen == 25 && gameStatus.getNumberOfEnemiesInIndex() < gameStatus.roundSpawnEnemies[2]){
            enemies.push(new YellowEnemy());
            gameStatus.setNumberOfEnemiesSpawned();
            gameStatus.setNumberOfEnemiesInIndex(1);
            screen = 0;
        }
        else if(gameStatus.getEnemyIndex() == 3 && screen == 200 && gameStatus.getNumberOfEnemiesInIndex() < gameStatus.roundSpawnEnemies[3]){
            enemies.push(new GiantEnemy());
            gameStatus.setNumberOfEnemiesSpawned();
            gameStatus.setNumberOfEnemiesInIndex(1);
            screen = 0;
        }
        else if(gameStatus.getNumberOfEnemiesInIndex() + 1 > gameStatus.roundSpawnEnemies[gameStatus.getEnemyIndex()]){
            gameStatus.setNumberOfEnemiesInIndex(0);
            gameStatus.setEnemyIndex();
        }
    }
}

function refreshEnemies(){  
    addEnemies();
    for(let j = 0; j < enemies.length; j++){
        enemies[j].draw();
    }
}
    
function mainLoop(){
    refreshCanvas();
    drawBackground();
    refreshTowers();
    isCollision();
    refreshEnemies();
    gameScreen();
    isRound1();
    screen++;
    request = requestAnimationFrame(mainLoop); 
    checkLife();
    checkRound();
}

