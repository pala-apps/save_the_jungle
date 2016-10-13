import PIXI from 'pixi.js'
console.log('started', PIXI)
var renderer = PIXI.autoDetectRenderer(800, 600,{backgroundColor : 0x1099bb});

const level1 = {
  startPosition:{x:400, y:300},
  targetPosition:{x:450, y:300}
}


// The renderer will create a canvas element for you that you can then insert into the DOM.
document.getElementById('canvas').appendChild(renderer.view);

// You need to create a root container that will hold the scene you want to draw.
var stage = new PIXI.Container();

// Declare a global variable for our sprite so that the animate function can access it.
var bunny = null;

// load the texture we need
PIXI.loader.add('bunny', 'images/Test.png').load(function (loader, resources) {
    // This creates a texture from a 'bunny.png' image.
    bunny = new PIXI.Sprite(resources.bunny.texture);

    // Setup the position and scale of the bunny
    bunny.position.x = level1.startPosition.x;
    bunny.position.y = level1.startPosition.y;

    bunny.scale.x = 0.5;
    bunny.scale.y = 0.5;

    // Add the bunny to the scene we are building.
    stage.addChild(bunny);

    // kick off the animation loop (defined below)

});


const stepInput = document.getElementById( "steps");
let steps = 0
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

animate();

// renderer.render(stage);

function animate() {
    console.log('animate')
    // start the timer for the next animation loop
    requestAnimationFrame(animate);

    // each frame we spin the bunny around a bit
    // bunny.rotation += 0.01;
    if(isRunning){
      if( steps > 0){
        bunny.position.x += 5;
        bunny.position.y += 0;
        steps--;
        if(steps === 0){
          isRunning = false;
          const hasWon = bunny.position.x === level1.targetPosition.x && bunny.position.y === level1.targetPosition.y
          if(hasWon){
            alert("Winner")
          }else{
            alert("Try Again")
          }
        }
      }

    }

    // this is the main render call that makes pixi draw your container and its children.
    renderer.render(stage);
}
