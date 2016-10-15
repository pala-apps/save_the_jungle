// global.PIXI = require('pixi.js');
// global.p2 = require('p2');
// global.Phaser = require('phaser');
import React from 'react';
import ReactDOM from 'react-dom';
import Editor from './components/Editor.jsx'

var dude;
let steps = 0;
let isRunning = false;

function runGame(numSteps){
  isRunning = true
  steps = numSteps
}

ReactDOM.render(
  <Editor runGame={runGame} />,
  document.getElementById('editor')
)

var game = new Phaser.Game(400, 800, Phaser.AUTO, 'canvas', { preload: preload, create: create, update: update });



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
        const hasWon = dude.x === 50
        console.log('dudex', dude.x)
        if(hasWon){
          alert("Winner")
        }else{
          alert("Try Again")
        }
      }
    }
  }
}
