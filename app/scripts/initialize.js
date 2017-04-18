// global.PIXI = require('pixi.js');
// global.p2 = require('p2');
// global.Phaser = require('phaser');
import React from 'react';
import ReactDOM from 'react-dom';
import Editor from './components/Editor.jsx'

var animal;
var human;

let isRunning = false;

let instructionsAnimal = null;
let instructionsHuman = null;


// function runGame(numSteps){
//   isRunning = true
//   steps = numSteps
// }

function runGame( givenInstructions ){
  isRunning = true
  instructionsAnimal = givenInstructions.instructionsAnimal
  instructionsHuman = givenInstructions.instructionsHuman
}


// let setupInstructions = [ 'walkRight', 'walkRight', 'walkRight', 'walkRight' ]

ReactDOM.render(
  <Editor runGame={runGame} />,
  document.getElementById('editor')
)

// ReactDOM.render(
//   <Editor runGame={runGame} />,
//   document.getElementById('editor-left')
// )

var game = new Phaser.Game(400, 800, Phaser.AUTO, 'canvas', { preload: preload, create: create, update: update });



function preload() {
  game.load.spritesheet('human', 'images/spritesheet_dude.png', 50, 50, 16)

  game.load.spritesheet('animal', 'images/snow_leapord_walking.png', 64, 64, 4)

}

function create() {
  game.stage.backgroundColor = "#000000";

  animal = game.add.sprite(0, 0, 'animal');
  animal.anchor.setTo(0.5, 0.5);
  animal.angle += 90;
  animal.x = 50;
  animal.y = 50;
  var walk = animal.animations.add('walk');

  human = game.add.sprite(0, 0, 'human');
  human.anchor.setTo(0.5, 0.5);
  human.angle += 90;
  human.x = 50;
  human.y = 350;
  var walk = human.animations.add('walk');


}

const runParams = {
  stepsPerInstruction: 50
}

let instructionIndex = -1;
let iteration = 0;
let instructionAnimal = null;
let instructionHuman = null;


function update(){
  if(isRunning){
    if( iteration % runParams.stepsPerInstruction === 0 ){
      instructionIndex++
      instructionAnimal = instructionsAnimal[instructionIndex]
      instructionHuman = instructionsHuman[instructionIndex]
    }

    switch (instructionAnimal) {
      case "walkRight":
        animal.animations.play('walk', 2, true)
        animal.angle = 90;
        animal.x += 1;
        break;
      case "walkDown":
        animal.animations.play('walk', 2, true)
        animal.angle = 180;
        animal.y += 1;
        break;
      default:
        animal.animations.stop('walk')
        console.log("Doing nothing")
    }

    switch (instructionHuman) {
      case "walkRight":
        human.animations.play('walk', 15, true)
        human.angle = 90;
        human.x += 1;
        break;
      case "walkDown":
        human.animations.play('walk', 15, true)
        human.angle = 180;
        human.y += 1;
        break;
      default:
        human.animations.stop('walk')
        console.log("Doing nothing")
    }

    iteration++
  }
}
