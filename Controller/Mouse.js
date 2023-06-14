function mouseClick(event){
    let canvas = document.getElementById("canvas");
    let poziciaX = event.pageX - canvas.offsetLeft;
    let poziciaY = event.pageY - canvas.offsetTop;
    
    if(numberOfScreen != 30 && numberOfScreen != 300){
        clickSound.play();
    }
    if(numberOfScreen == 1 || numberOfScreen == 2 ||numberOfScreen == 3){
        if (poziciaX >= musicButtonPosX && poziciaX <= musicButtonPosX + musicButtonRadius  && poziciaY >= musicButtonPosY && poziciaY <= musicButtonPosY + musicButtonRadius){
            if(musicMuted == true){
                musicMuted = false;
                soundtrack.play();
                soundtrack.volume = 0.1;
            }
            else{
                musicMuted = true;
                soundtrack.pause();
                soundtrack.currentTime = 0;
            }
            switch(numberOfScreen){
                case 1:
                    startScreen(canvas);
                    break;
                case 2:
                    startScreen(canvas);
                    instructionsScreen();
                    break;
                case 3:
                    gameScreen();
                    break;
            }
        }

        if(numberOfScreen == 1){
            if(poziciaX >= 450 && poziciaX <= 750 && poziciaY >= 380 && poziciaY <= 440){
                instructionsScreen();
            }
            if(poziciaX >= 450 && poziciaX <= 750 && poziciaY >= 260 && poziciaY <= 320){
                request = requestAnimationFrame(mainLoop); 
            }
        }
        else if(numberOfScreen == 2){
            if(poziciaX >= 450 && poziciaX <= 750 && poziciaY >= 470 && poziciaY <= 530){
                startScreen(canvas);
            }
        }
        else if(numberOfScreen == 3){
            if(poziciaX >= 1100 && poziciaX <= 1160 && poziciaY >= 515 && poziciaY <= 575){
                cancelAnimationFrame(request);
                pauseScreen();
            }
            else if(poziciaX >= 1000 && poziciaX <= 1050 && poziciaY >= 150 && poziciaY <= 200 && gameStatus.getMoney() >= 100){
                numberOfScreen = 30;
                typVeze = "defense";
            }
            else if(poziciaX >= 1000 && poziciaX <= 1050 && poziciaY >= 220 && poziciaY <= 270 && gameStatus.getMoney() >= 250){
                numberOfScreen = 30;
                typVeze = "fire";
            }
            else if(poziciaX >= 1000 && poziciaX <= 1050 && poziciaY >= 290 && poziciaY <= 340 && gameStatus.getMoney() >= 350){
                numberOfScreen = 30;
                typVeze = "lightning";
            }
            else if(poziciaX >= 1000 && poziciaX <= 1050 && poziciaY >= 360 && poziciaY <= 410 && gameStatus.getMoney() >= 150){
                numberOfScreen = 30;
                typVeze = "nature";
            }
            for(let x = 0; x < towers.length; x++){
                if(poziciaX >= towers[x].x + 63 && poziciaX <= towers[x].x + 106 && poziciaY >= towers[x].y + 62 && poziciaY <= towers[x].y + 110){
                    numberOfScreen = 300;
                    gameStatus.setIndexOfTower(x);
                }
            }
        }
    }
    else if(numberOfScreen == 4){
        if(poziciaX >= 450 && poziciaX <= 750 && poziciaY >= 200 && poziciaY <= 250){
            request = requestAnimationFrame(mainLoop); 
        }
        else if(poziciaX >= 450 && poziciaX <= 750 && poziciaY >= 320 && poziciaY <= 370){
            cancelAnimationFrame(request);
            sureToExit();
        }
    }
    else if(numberOfScreen == 5){
        if(poziciaX >= 490 && poziciaX <= 550 && poziciaY >= 300 && poziciaY <= 360){
            gameOverStats();
        }
        else if(poziciaX >= 650 && poziciaX <= 710 && poziciaY >= 300 && poziciaY <= 360){
            pauseScreen();
        }
    }
    else if(numberOfScreen == 6 || numberOfScreen == 7){
        if(poziciaX >= 500 && poziciaX <= 670 && poziciaY >= 400 && poziciaY <= 460){
            startScreen(canvas);
        }
    }
    else if(numberOfScreen == 30){
        for(let i = 0; i < hranice.length; i++){
            if(poziciaX >= hranice[i].x && poziciaX <= hranice[i].x + hranice[i].width && poziciaY >= hranice[i].y && poziciaY <= hranice[i].y + hranice[i].height){
                addNewTower(poziciaX, poziciaY, typVeze);
            }
        }
    }
    else if(numberOfScreen == 300){
        if(poziciaX >= 1100 && poziciaX <= 1160 && poziciaY >= 425 && poziciaY <= 485){
            sellSound.play();
            gameStatus.setEarnedBySell(towers[gameStatus.getIndexOfTower()].getSellPrice());
            gameStatus.setMoney(towers[gameStatus.getIndexOfTower()].getSellPrice());
            towers.splice(gameStatus.getIndexOfTower(), 1);
            numberOfScreen = 3;
        }
        else if(towers[gameStatus.getIndexOfTower()].getIsUpgraded() == 'false' && poziciaX >= 985 && poziciaX <= 1070 && poziciaY >= 425 && poziciaY <= 485 && towers[gameStatus.getIndexOfTower()].getIsUpgraded() == 'false' && gameStatus.getMoney() >= towers[gameStatus.getIndexOfTower()].getUpgradePrice()){
            buildSound.play();
            towers[gameStatus.getIndexOfTower()].setIsUpgraded();
            gameStatus.setMoney(-towers[gameStatus.getIndexOfTower()].getUpgradePrice());
        }
        else{
            numberOfScreen = 3;
            clickSound.play();
        }
    }
}