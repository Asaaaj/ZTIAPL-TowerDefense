var gameStatus = new GameStatus();
var context;
var canvas;
var request;
var numberOfScreen;
var musicMuted = true; 
var musicButtonPosX;
var musicButtonPosY;
var musicMutedPosX;
var musicButtonRadius;
var musicMutedText = "MUTE";
var typVeze;
var screen = -1;
var hranice = [];
var border1 = new TowerBuildBorder(10, 10, 110, 280);
var border2 = new TowerBuildBorder(120, 10, 410, 80);
var border3 = new TowerBuildBorder(530, 10, 140, 340);
var border4 = new TowerBuildBorder(670, 10, 290, 60);
var border5 = new TowerBuildBorder(10, 420, 220, 170);
var border6 = new TowerBuildBorder(230, 190, 170, 400);
var border7 = new TowerBuildBorder(400, 470, 390, 120);
var border8 = new TowerBuildBorder(790, 180, 170, 410);
            
hranice.push(border1);
hranice.push(border2);
hranice.push(border3);
hranice.push(border4);
hranice.push(border5);
hranice.push(border6);
hranice.push(border7);
hranice.push(border8);

var towers = [];
var enemies = [];

const soundtrack = new Audio("Sounds/Soundtrack.mp3");
soundtrack.loop = true;
const clickSound = new Audio("Sounds/click.ogg");
const gameOverSound = new Audio("Sounds/game_over.ogg");
const prepareYourselfSound = new Audio("Sounds/prepare_yourself.ogg");
const round1Sound = new Audio("Sounds/round_1.ogg");
const round2Sound = new Audio("Sounds/round_2.ogg");
const round3Sound = new Audio("Sounds/round_3.ogg");
const round4Sound = new Audio("Sounds/round_4.ogg");
const finalRoundSound = new Audio("Sounds/final_round.ogg");
const youWinSound = new Audio("Sounds/you_win.ogg");
const buildSound = new Audio("Sounds/build_sound.ogg");
const sellSound = new Audio("Sounds/sell_sound.ogg");
const defenseAttackSound = new Audio("Sounds/defense_sound.ogg");
const fireAttackSound = new Audio("Sounds/fire_sound.ogg");
const lightningAttackSound = new Audio("Sounds/lightning_sound.ogg");
const natureAttackSound = new Audio("Sounds/nature_sound.ogg");
gameOverSound.volume = 0.3;
prepareYourselfSound.volume = 0.3;
round1Sound.volume = 0.3;
round2Sound.volume = 0.3;
round3Sound.volume = 0.3;
round4Sound.volume = 0.3;
finalRoundSound.volume = 0.3;
youWinSound.volume = 0.3;
buildSound.volume = 1;

window.onload = function(){
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d"); 
    context.lineWidth = 2;
    canvas.onclick = mouseClick;
    startScreen();
}