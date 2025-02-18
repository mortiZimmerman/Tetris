const canvas = document.getElementById("tetris");
const ctx = canvas.getContext("2d");
const puaseBtn = document.getElementById("pauseButton");
const scoreElement = document.getElementById("score");
const highScoreElement = document.getElementById("highScore");

const ROW = 20, COL = 10, SIZE = 30;
let board = Array.from({ length: ROW }, () => Array(COL).fill(0));

let isPaused = false;
let gameInterval;
let score = 0;
let highScore = localStorage.getItem("highScore") || 0;
highScoreElement.textContent = highScore;

const SHAPES = [
    [[1, 1, 1, 1]], //palo horizontal
    [[1,1],[1,1]], //cuadrado
    [[0,1,0],[1,1,1]], //T
    [[1,1,0],[0,1,1]], //Z
    [[0,1,1],[1,1,0]], //S
]

let currentPiece ={
    shape: SHAPES[Math.floor(Math.random() * SHAPES.length)],
    x:3,
    y:0
};


function drawBoard(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    board.forEach((row,y) =>{
        row.forEach((value,x) =>{
            if(value){
                drawBlock(x,y,"cyan");
            }
        });
    });
}





function drawBlock(x,y,color){
    ctx.fillStyle = color;
    ctx.fillRect(x * SIZE, y * SIZE, SIZE, SIZE);
    ctx.strokeStyle = "black";
    ctx.strokeRect(x * SIZE, y * SIZE, SIZE, SIZE);

}