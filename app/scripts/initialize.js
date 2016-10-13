// global.PIXI = require('pixi.js');
// global.p2 = require('p2');
// global.Phaser = require('phaser');

var game = new Phaser.Game(800, 600, Phaser.AUTO, 'canvas', { preload: preload, create: create, update: update });

var dude;
let steps = 0

const stepInput = document.getElementById( "steps");
stepInput.onchange = (e)=>{
  console.log("input changed", e.target.value);
  steps = e.target.value;
}


const runButton = document.getElementById( "run");
let isRunning = false
runButton.onclick = (e)=>{
  console.log('but clicked')
  isRunning = true
}





function preload() {
  game.load.spritesheet('dude', 'images/Test.png', 32, 32, 4)
}

function create() {
  game.stage.backgroundColor = "#4488AA";
  dude = game.add.sprite(0, 0, 'dude');
  var walk = dude.animations.add('walk');
}

function update() {
  if(isRunning){
    if( steps > 0){
      dude.animations.play('walk', 5, true)
      dude.x += 5;
      steps--;
      if(steps === 0){
        dude.animations.stop('walk')
        isRunning = false;
        const hasWon = dude.x === 40
        if(hasWon){
          alert("Winner")
        }else{
          alert("Try Again")
        }
      }
    }
  }
}
