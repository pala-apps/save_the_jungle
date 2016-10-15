// global.PIXI = require('pixi.js');
// global.p2 = require('p2');
// global.Phaser = require('phaser');
import React from 'react';
import ReactDOM from 'react-dom';
import Editor from './components/Editor.jsx'

var dude;

let isRunning = false;

let instructions = null;

// function runGame(numSteps){
//   isRunning = true
//   steps = numSteps
// }

function runGame( givenInstructions ){
  isRunning = true
  instructions = givenInstructions
}


// let setupInstructions = [ 'walkRight', 'walkRight', 'walkRight', 'walkRight' ]

ReactDOM.render(
  <Editor runGame={runGame} />,
  document.getElementById('editor')
)

var game = new Phaser.Game(400, 800, Phaser.AUTO, 'canvas', { preload: preload, create: create, update: update });



function preload() {
  // game.load.spritesheet('dude', 'images/spritesheet_dude.png', 50, 50, 16)

  game.load.spritesheet('dude', 'images/snow_leapord_walking.png', 64, 64, 4)

}

function create() {
  game.stage.backgroundColor = "#000000";
  dude = game.add.sprite(0, 0, 'dude');
  dude.anchor.setTo(0.5, 0.5);
  dude.angle += 90;
  dude.x = 50;
  dude.y = 50;
  var walk = dude.animations.add('walk');
}

const runParams = {
  stepsPerInstruction: 50
}

let instructionIndex = -1;
let iteration = 0;
let instruction = null;
function update(){
  if(isRunning){
    if( iteration % runParams.stepsPerInstruction === 0 ){
      instructionIndex++
      instruction = instructions[instructionIndex]
    }

    switch (instruction) {
      case "walkRight":
        dude.animations.play('walk', 2, true)
        dude.angle = 90;
        dude.x += 1;

        break;
      case "walkDown":
        dude.animations.play('walk', 2, true)
        dude.angle = 180;
        dude.y += 1;
        break;
      default:
        dude.animations.stop('walk')
        console.log("Doing nothing")
    }

    iteration++
  }
}
