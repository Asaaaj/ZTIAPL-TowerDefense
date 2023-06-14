function startScreen(){
    var logo = document.getElementById("logo");
    musicMutedPosX = 28;
    musicButtonPosX = 20;
    musicButtonPosY = 25;
    musicButtonRadius = 60;
    numberOfScreen = 1;
    gameStatus.resetStats();
    refreshCanvas();

    context.fillStyle = "#E5B37B";
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.drawImage(logo, 200, 25, 800, 200);
    
    var playButton = new Button("PLAY", "white", "25px", 570, 300, "#BD8F5B", 450, 260, 300, 60);
    playButton.create(canvas);

    var howToButton = new Button("HOW TO PLAY", "white", "25px", 520, 420, "#BD8F5B", 450, 380, 300, 60);
    howToButton.create();

    if(musicMuted == false){
        context.fillStyle = "#BD8F5B";  
        musicMutedText = "MUTE";
        musicMutedPosX = 28;
    }
    else {
        context.fillStyle = "#E84815";
        musicMutedText = "MUTED";
        musicMutedPosX = 23;
    }
    context.fillRect(musicButtonPosX, musicButtonPosY, musicButtonRadius, musicButtonRadius);
    context.font = "bold 15px Times New Roman";
    context.fillStyle = "white";
    context.fillText(musicMutedText, musicMutedPosX, 58);
}

function instructionsScreen(){
    numberOfScreen = 2;
    context.fillStyle = "#BD8F5B";
    context.fillRect(100, 50, 1000, 500);

    context.font = "bold 25px Times New Roman";
    context.fillStyle = "white";
    context.fillText("HOW TO PLAY", 520, 90);

    context.font = "bold 25px Times New Roman";
    context.fillStyle = "white";
    context.fillText("As the player you have to build up Towers to defense yourself", 220, 200);
    context.fillText("from the waves of enemies that are attacking you.", 220, 240);
    context.fillText("You can build 4 types of towers, every single one is slightly different,", 220, 290);
    context.fillText("and you can meet 4 types of different enemies.", 220, 330);
    context.fillText("If you can't kill the enemy and he will run, you lost life.", 220, 370);

    var backButton = new Button("BACK", "white", "25px", 570, 510, "#E5B37B", 450, 470, 300, 60);
    backButton.create();
}

function gameScreen(){
    if(numberOfScreen != 30 && numberOfScreen != 300){numberOfScreen = 3;}
    musicMutedPosX = 970;
    musicButtonPosX = 990;
    musicButtonPosY = 515;
    musicButtonRadius = 60;

    context.fillStyle = "#E5B37B";
    context.fillRect(0, 0, 960, 10);
    context.fillRect(0, 9, 10, 590);
    context.fillRect(0, canvas.height - 10, 960, 10);
    context.fillRect(960, 0, canvas.width - 960, canvas.height);

    sideBar();

    if(musicMuted == false){
        context.fillStyle = "#BD8F5B";  
        musicMutedText = "MUTE";
        musicMutedPosX = 996;
    }
    else {
        context.fillStyle = "#E84815";
        musicMutedText = "MUTED";
        musicMutedPosX = 993;
    }
    context.fillRect(musicButtonPosX, musicButtonPosY, musicButtonRadius, musicButtonRadius);
    context.font = "bold 15px Times New Roman";
    context.fillStyle = "white";
    context.fillText(musicMutedText, musicMutedPosX, 550);

    var menuButton = new Button("MENU", "white", "15px", 1107, 550, "#BD8F5B", 1100, 515, 60, 60);
    menuButton.create();
}

function pauseScreen(){
    numberOfScreen = 4;

    context.fillStyle = "#BD8F5B";
    context.fillRect(400, 100, 400, 400);

    context.font = "bold 25px Times New Roman";
    context.fillStyle = "white";
    context.fillText("PAUSED", 550, 140);

    var continueButton = new Button("Continue", "white", "25px", 545, 235, "#E5B37B", 450, 200, 300, 50);
    continueButton.create();

    var exitButton = new Button("Exit Game", "white", "25px", 545, 350, "#E5B37B", 450 , 320, 300, 50);
    exitButton.create();
}
function sureToExit(){
    numberOfScreen = 5;

    context.fillStyle = "#BD8F5B";
    context.fillRect(400, 100, 400, 400);

    context.font = "bold 25px Times New Roman";
    context.fillStyle = "white";
    context.fillText("ARE YOU SURE?", 500, 140);

    var yesExit = new Button("Yes", "white", "25px", 500, 335, "#E5B37B", 490, 300, 60, 60);
    yesExit.create();

    var noExit = new Button("No", "white", "25px", 665, 335, "#E5B37B", 650, 300, 60, 60);
    noExit.create();
}
function gameOverStats(){
    numberOfScreen = 6;
    gameOverSound.volume = 0.3;
    gameOverSound.play();

    context.fillStyle = "#BD8F5B";
    context.fillRect(300, 100, 600, 400);

    context.font = "bold 25px Times New Roman";
    context.fillStyle = "white";
    context.fillText("YOU LOST",540, 140);

    context.font = "bold 25px Times New Roman";
    context.fillStyle = "white";
    context.fillText("Rounds alived: " + (gameStatus.getRound() - 1), 450, 200);
    
    context.font = "bold 25px Times New Roman";
    context.fillStyle = "white";
    context.fillText("Enemies killed: " + gameStatus.getEnemiesKilled(), 450, 250);

    context.font = "bold 25px Times New Roman";
    context.fillStyle = "white";
    context.fillText("Money spent: " + (gameStatus.getMoneySpent() - gameStatus.getEarnedBySell()), 450, 300);

    var backToMenu = new Button("Back to menu", "white", "25px", 510, 435, "#E5B37B", 500, 400, 170, 60);
    backToMenu.create();
}

function winScreen(){
    numberOfScreen = 7;
    youWinSound.play();

    context.fillStyle = "#BD8F5B";
    context.fillRect(300, 100, 600, 400);

    context.font = "bold 25px Times New Roman";
    context.fillStyle = "white";
    context.fillText("CONGRATULATIONS! YOU WIN!", 400, 140);

    context.font = "bold 25px Times New Roman";
    context.fillStyle = "white";
    context.fillText("Rounds alived: " + gameStatus.getRound(), 450, 200);
    
    context.font = "bold 25px Times New Roman";
    context.fillStyle = "white";
    context.fillText("Enemies killed: " + gameStatus.getEnemiesKilled(), 450, 250);

    context.font = "bold 25px Times New Roman";
    context.fillStyle = "white";
    context.fillText("Money spent: " + (gameStatus.getMoneySpent() - gameStatus.getEarnedBySell()), 450, 300);

    var backToMenu = new Button("Back to menu", "white", "25px", 510, 435, "#E5B37B", 500, 400, 170, 60);
    backToMenu.create();
}