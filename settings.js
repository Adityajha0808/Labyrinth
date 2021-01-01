let form = document.querySelector("#settings");
let size = document.querySelector("#size");
let rowsCols = document.querySelector("#number");
let complete = document.querySelector(".complete");
let replay = document.querySelector(".replay");

let newMaze;
let count = 0;

form.addEventListener("submit", generateMaze);
document.addEventListener("keydown", move);
replay.addEventListener("click", () => {
  location.reload();
});

// Maze settings
function generateMaze(e) {
  e.preventDefault();

  if (rowsCols.value == "" || size.value == "") {
    return alert("Please enter all fields!");
  }

  let mazeSize = size.value;
  let number = rowsCols.value;
  if (mazeSize > 600 || number > 30) {
    alert("Maze too large! Maze size: 300-600 & Rows/columns: 5-30.");
    return;
  }
  if (mazeSize < 300 || number < 5 ) {
    alert("Maze too small! Maze size: 300-600 & Rows/columns: 5-30.");
    return;
  }

  form.style.display = "none";

  newMaze = new Maze(mazeSize, number, number);
  newMaze.setup();
  newMaze.draw();
}

// Plays desired sounds
function playSound() {
  var audio = new Audio("sounds/move.mp3");
  audio.play();
}

function victorySound() {
   var audio = new Audio("sounds/victory.wav");
   audio.play();
 }

// JS for movement and arrow key presses
function move(e) {
  if (!generationComplete)
     return;

  let key = e.key;
  let row = current.rowNum;
  let col = current.colNum;

// Creating a timer to record time

//   setInterval(add, 1000);
//   let time = document.querySelector("#timer"),
//        seconds = 0, minutes = 0;
//
//   function add() {
//       seconds++;
//         if (seconds == 60) {
//             minutes++;
//             seconds = 0;
//           }
//
//         time.textContent = (minutes < 10 ? "0" + minutes : minutes) + ":" +
//                            (seconds < 10 ? "0" + seconds : seconds);
// }
//
//   document.getElementById("timer").style.display = "block";
//
//   // Displaying time taken by the user
//
//   var displaytime = document.querySelector("#timer").textContent;
//   document.querySelector(".display-timer").innerHTML = displaytime;
  document.querySelector(".count-steps").innerHTML = count+1;


  switch (key) {

    case "ArrowUp":
      if (!current.walls.topWall) {
        let next = newMaze.grid[row - 1][col];
        current = next;
        count++;
        newMaze.draw();
        playSound();
        current.highlight(newMaze.columns);
        // not required if goal is in bottom right
        if (current.goal) {
          victorySound();
          timer.style.display = "none";
          complete.style.display = "block";
        }
      }
      break;

    case "ArrowRight":
      if (!current.walls.rightWall) {
        let next = newMaze.grid[row][col + 1];
        current = next;
        count++;
        newMaze.draw();
        playSound();
        current.highlight(newMaze.columns);
        if (current.goal) {
          victorySound();
          timer.style.display = "none";
          complete.style.display = "block";
        }
      }
      break;

    case "ArrowDown":
      if (!current.walls.bottomWall) {
        let next = newMaze.grid[row + 1][col];
        current = next;
        count++;
        newMaze.draw();
        playSound();
        current.highlight(newMaze.columns);
        if (current.goal) {
          victorySound();
          timer.style.display = "none";
          complete.style.display = "block";
        }
      }
      break;

    case "ArrowLeft":
      if (!current.walls.leftWall) {
        let next = newMaze.grid[row][col - 1];
        current = next;
        count++;
        newMaze.draw();
        playSound();
        current.highlight(newMaze.columns);
        // not required if goal is in bottom right
        if (current.goal) {
          victorySound();
          timer.style.display = "none";
          complete.style.display = "block";
        }
      }
      break;
  }
}
