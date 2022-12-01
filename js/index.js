// const myObstacles = [];
// const ctx = canvas.getContext('2d');
// const myGameArea = {
//   frames: 0,
//   start: function(){
//   this.canvas = document.getElementById('canvas');
//   this.interval = setInterval(upgradedArea, 20);
//   },
//   stop: function () {
//     clearInterval(this.interval);
//   },
//   clear: function () {
//     ctx.clearRect(0, 0, 500, 700);
//   },
//   score: function () {
//     const points = Math.floor(this.frames / 5);
//     this.context.font = '18px serif';
//     this.context.fillStyle = 'black';
//     this.context.fillText(`Score: ${points}`, 250, 50);
//   },
// };
// const img = new Image();
//  img.src = "../images/road.png"
// const imgCar = new Image();
//  imgCar.src = "../images/car.png"
// window.onload = () => {
//   document.getElementById('start-button').onclick = () => {
//     startGame();
//   };
//   function startGame() {
//       ctx.drawImage(img, 0, 0, 500, 700);
//       ctx.drawImage(imgCar, 225,600, 50, 100);
//     }
//   }
// class Car {
//   constructor(x,y){
//     this.x = x;
//     this.y = y;
//     this.speedX = 0;
//   }
//   left(){
//     return this.x;
//   }
//   right(){
//     return this.x + this.width;
//   }
//   top(){
//     return this.y
//   }
//   crashWith(obstacle) {
//    return !(this.top() > obstacle.bottom() || this.right() < obstacle.left() || this.left() > obstacle.right());
//   }
  
//   newPos(){
//     this.x += this.speedX;
//   }
// }
// function updateObstacles(){
//   for (i = 0; i < myObstacles.length; i++) {
//       myObstacles[i].y += -1; 
//       myObstacles[i].update();
//   }
//   myGameArea.frames += 1;
//   if (myGameArea.frames % 120 === 0) {
//     let x = myGameArea.canvas.width; 
//       let minWidth = 20;
//       let maxWidth = 200;
//       let width = Math.floor(Math.random() * (maxWidth - minWidth + 1) + minWidth); 
//       let minGap = 50;
//       let maxGap = 200;
//       let gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
//       myObstacles.push(new Component(width, 10, 'red', 0, y)); 
//       myObstacles.push(new Component(y, 10 - width - gap, 'red', width, y + gap)); 
//     }
// }
// function checkGameOver() {
//   const crashed = myObstacles.some(function (obstacle) {
//     return player.crashWith(obstacle);
//   });
//   if (crashed) { 
//     myGameArea.stop();
//   }
// }
// function updateGameArea(){
//   myGameArea.clear();
//   player.newPos(); 
//   player.update(); 
//   updateObstacles() 
//   checkGameOver() 
//   myGameArea.score()
// }
// const player = new Car()
// myGameArea.start();
// document.addEventListener('keydown', (e) => {
//   switch (e.keyCode) {
//     case 37: 
//       player.speedX -= 1;
//       break;
//     case 39: 
//       player.speedX += 1;
//       break;
//   }
// });
// document.addEventListener('keyup', (e) => {
//   player.speedX = 0;
// });


const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const imgCar = new Image();
imgCar.src = "../images/car.png"
class Car {
  constructor() {
    this.x = 25;
    this.y = 25;
  }
}
window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

function bla(){
ctx.clearRect(0, 0, 500, 700);
ctx.drawImage(imgCar, 225,600, 50, 100);
}
}