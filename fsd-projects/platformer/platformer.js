$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
  createPlatform(250, 350, 200, 25, "red");
  createPlatform(450, 550, 200, 25, "blue");
  createPlatform(350, 250, 200, 25, "green"); 
  createPlatform(750, 350, 200, 25, "red"); 
  createPlatform(450, 650, 200, 25, "red");

    // TODO 3 - Create Collectables
  createCollectable("database", 700, 500);
  createCollectable("database", 1050, 500);
  createCollectable("database", 550, 700);

    
    // TODO 4 - Create Cannons
    createCannon("top", 350, 1500);
    createCannon("left", 500, 1500);
    createCannon("right", 200, 1500);
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
