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

function spriteSheetArray(url, height, width, numberOfRows, numberOfCols){
  const size = height/numberOfRows
  var out = []
  for (var i = 0; i < numberOfRows; i++) {
    for (var j = 0; j < numberOfCols; j++) {
      var rectangle = new PIXI.Rectangle(i*size, j*size, size, size)
      var texture = PIXI.TextureCache[url];
      texture.frame = rectangle;
      out.push( new PIXI.Sprite(texture) );
    }
  }
  return out
}
// Declare a global variable for our sprite so that the animate function can access it.
let bunnySprites = null;
PIXI.loader.add('test','images/Test.png')
.load(function(){
  bunnySprites = spriteSheetArray('images/Test.png', 64, 64, 2, 2 )
  console.log( "sprites", bunnySprites)
  // var texture = PIXI.TextureCache["images/Test.png"];
  // var rectangle = new PIXI.Rectangle(0, 0, 32, 32)
  // texture.frame = rectangle;
  // var bunny = new PIXI.Sprite(texture);
  let bunny = bunnySprites[2]
  bunny.position.x = level1.startPosition.x;
  bunny.position.y = level1.startPosition.y;
  stage.addChild(bunny);
})
// load the texture we need
// PIXI.loader.add('bunny', 'images/Test.png').load(function (loader, resources) {
//     // This creates a texture from a 'bunny.png' image.
//     bunny = new PIXI.Sprite(resources.bunny.texture);
//
//     // Setup the position and scale of the bunny
//     bunny.position.x = level1.startPosition.x;
//     bunny.position.y = level1.startPosition.y;
//
//     bunny.scale.x = 0.5;
//     bunny.scale.y = 0.5;
//
//     // Add the bunny to the scene we are building.
//     stage.addChild(bunny);
//
//     // kick off the animation loop (defined below)
//
// });
// var sprite;
// var loader = new PIXI.loaders.Loader("./images", 5);
// loader.add('example-sprites', 'example-sprite-sheet.json');
// loader.on('complete', onAssetLoad);
// loader.load();




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
        bunnySprites[3].position.x += 5;
        bunnySprites[3].position.y += 0;
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
