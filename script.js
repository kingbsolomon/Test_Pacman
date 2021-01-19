var world = [
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 1, 1, 1, 2, 2, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 2, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 2, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 2, 1, 1, 2],
    [2, 1, 2, 1, 1, 1, 1, 2, 1, 2],
    [2, 1, 2, 1, 1, 1, 1, 1, 2, 2],
    [2, 1, 2, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 2, 1, 1, 1, 1, 1, 1, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  ];

  var pacman = {
    x: 1,
    y: 1,
    score:0,
  };

  function displayWorld() {
    var output = "";
    for (var i = 0; i < world.length; i++) {
      output += "<div class='row'>";
      for (var j = 0; j < world[i].length; j++) {
        if (world[i][j] == 2) output += "<div class='brick'></div>";
        if (world[i][j] == 1) output += "<div class='coin'></div>";
        if (world[i][j] == 0) output += "<div class='empty'></div>";
      }
      output += "</div>";
    }
    document.getElementById("world").innerHTML = output;
  }

  function displayPacman() {
    document.getElementById("pacman").style.top = pacman.y * 20 + "px";
    document.getElementById("pacman").style.left = pacman.x * 20 + "px";
  }

  function displayScore() {
    document.getElementById("score").innerHTML = pacman.score;
  }

  displayWorld();
  displayPacman();

  document.onkeydown = function (event) {
    console.log(event.key);
    var previousPos = {
      x: pacman.x,
      y: pacman.y,
    };
    if (event.key === "ArrowDown") {
      pacman.y += 1;
    }
    if (event.key === "ArrowUp") {
      pacman.y -= 1;
    }
    if (event.key === "ArrowLeft") {
      pacman.x -= 1;
    }
    if (event.key === "ArrowRight") {
      pacman.x += 1;
    }
    if (world[pacman.y][pacman.x] == 1) {
      world[pacman.y][pacman.x] = 0;
      pacman.score+=10;
      displayWorld();
      displayScore();
    }

    if(world[pacman.y][pacman.x] == 2) {
    pacman.x = previousPos.x;
    pacman.y = previousPos.y;
}
    displayPacman();
  };