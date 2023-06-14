function sideBar(){
    context.font = "bold 15px Times New Roman";
    context.fillStyle = "white";
    context.fillText("LIFE: " + gameStatus.getLife(), 1000, 50);
    context.fillText("MONEY: " + gameStatus.getMoney() , 1000, 90);
    context.fillText("ROUND: " + gameStatus.getRound() + " / 5", 1000, 130);

    context.drawImage(document.getElementById("defensetowerlogo"), 1000, 150, 50, 50);
    context.drawImage(document.getElementById("firetowerlogo"), 1000, 220, 50, 50);
    context.drawImage(document.getElementById("lightningtowerlogo"), 1000, 290, 50, 50);
    context.drawImage(document.getElementById("naturetowerlogo"), 1000, 360, 50, 50);

    context.font = "bold 15px Times New Roman";
    context.fillStyle = "white";
    context.fillText("Defense Tower", 1070, 170);
    context.fillText("Price: 100", 1080, 190);
    context.fillText("Fire Tower", 1080, 240);
    context.fillText("Price: 250", 1080, 260);
    context.fillText("Lightning Tower", 1070, 310);
    context.fillText("Price: 350", 1080, 330);
    context.fillText("Nature Tower", 1070, 380);
    context.fillText("Price: 150", 1080, 400);

    if(numberOfScreen == 300){
        let sellButton = new Button("SELL", "white", "15px", 1109, 448, "#BD8F5B", 1100, 425, 60, 60, "+" + towers[gameStatus.getIndexOfTower()].getSellPrice(), 1115, 470);
        let upgradeButton = new Button("UPGRADE", "white", "15px", 990, 448, "#BD8F5B", 985, 425, 85, 60, "-" + towers[gameStatus.getIndexOfTower()].getUpgradePrice(), 1012, 470);
        sellButton.create();
        if(towers[gameStatus.getIndexOfTower()].getIsUpgraded() == 'false'){
            upgradeButton.create();
        }
    }
}