const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const pauseButton = document.getElementById('pauseButton');
const restartButton = document.getElementById('restartButton');
restartButton.addEventListener('click', function() {
  location.reload();
}); 

// var audio = new Audio('Techno_Syndrome.mp3');
// audio.play();

//Variables 
let isMainMenu = true;
let isPaused = false;
let lifes = 5;
let left = false
let right = false
let immune = false;
let immuneDuration = 3000;
let speed = 5
let score = 0;

setInterval(function () {
  speed ++; // Speed
  score ++; // Score
}, 5000);

const line = new Image()
line.src = './line.png'
line.X = 180
line.Y = -140

const line2 = new Image()
line2.src = './line.png'
line2.X = 180
line2.Y = 160

const myCar = new Image()
myCar.src = './car-1.png'
myCar.X = 160
myCar.Y = 395

const enemyCar1 = new Image()
enemyCar1.src = './car-2.png'
enemyCar1.X = 50
enemyCar1.Y = -150

const enemyCar2 = new Image()
enemyCar2.src = './car-3.png'
enemyCar2.X = 250
enemyCar2.Y = -450

function coloringRectangle() {
  ctx.fillStyle = 'Gray'
  ctx.fillRect(0, 0, 400, 500)
}

function drawMainMenu() {
  // audio.pause();
  ctx.fillStyle = 'Black';
  ctx.font = '30px Arial';
  ctx.fillStyle = 'White';
  ctx.fillText('Car Race Game', 0 , 200);
  ctx.fillText('Press any key to start', 0 , 300);
}
function handleMainMenuInput() {
  isMainMenu = false; // Exit the main menu state
  removeEventListener('keydown', handleMainMenuInput); // Remove the event listener
  initializeGame(); // Initialize the game
}
function initializeGame() {
  isPaused = false;
  lifes = 5;
  speed = 5;
  score = 0;
  requestAnimationFrame(render);
}

function drawLifes() {
  ctx.font = '30px Serif'
  ctx.fillStyle = 'White'
  ctx.fillText('Lifes : ' + lifes, 275, 40)
}

function stop() {
  cancelAnimationFrame(myReq)
  ctx.font = '60px Times New Roman'
  ctx.fillStyle = 'Red'
  ctx.fillText('Game Over', 50, 200)
  ctx.font = '40px Times New Roman'
  ctx.fillStyle = 'Blue'
  ctx.fillText(`Your scores: ${score}`, 80, 300)
  stop = true
}

function resetSpeed() {
    if (lifes - 1) {
      speed = 5;
    }
}
// road
function drawLines() {
  ctx.drawImage(line, line.X, line.Y)
  line.Y += 3
  if(line.Y > 500) {
    line.Y = -140
  }
  ctx.drawImage(line2, line2.X, line2.Y)
  line2.Y += 3
  if(line2.Y > 500) {
    line2.Y = -140
  }
}
// cars
function drawMyCar() {
  const carSpeed = 12;
  if (!immune || (immune && Math.floor(Date.now() / 100) % 2 === 0)) { // Draw the car only if not immune or if immune, alternate drawing every 500 milliseconds
    if (left === true && myCar.X > 0) {
      myCar.X -= carSpeed;
    }
    if (right === true && myCar.X < 335) {
      myCar.X += carSpeed;
    }
    ctx.drawImage(myCar, myCar.X, myCar.Y);
  }
}

function drawEnemyCar1() {
  if (!immune && enemyCar1.Y + 100 > myCar.Y && enemyCar1.Y < myCar.Y + 100 && enemyCar1.X + 65 > myCar.X && enemyCar1.X < myCar.X + 65) {
    crash = true;
    enemyCar1.Y = enemyCar2.Y - 300;
    lifes--;
    if (lifes < 1) {
      stop()
    } else {
      immune = true; // Set immune to true upon collision
      resetSpeed(); // Reset speed back to 5 if a life is lost
      setTimeout(() => {
        immune = false; // Reset the immune state after the immune duration
      }, immuneDuration);
    }
  } else {
    crash = false;
  }
  if (!crash) {
    ctx.drawImage(enemyCar1, enemyCar1.X, enemyCar1.Y);
    enemyCar1.Y += speed;
    if (enemyCar1.Y > 500) {
      enemyCar1.Y = -100;
      enemyCar1.X = Math.floor(Math.random() * 335);
      score++;
    }
  }
}

function drawEnemyCar2() {
  if (!immune && enemyCar2.Y + 100 > myCar.Y && enemyCar2.Y < myCar.Y + 100 && enemyCar2.X + 65 > myCar.X && enemyCar2.X < myCar.X + 65) {
    crash = true;
    enemyCar2.Y = enemyCar1.Y - 300;
    lifes--;
    if (lifes < 1) {
      stop();
    } else {
      immune = true; // Set immune to true upon collision
      resetSpeed(); // Reset speed back to 5 if a life is lost
      setTimeout(() => {
        immune = false; // Reset the immune state after the immune duration
      }, immuneDuration);
    }
  } else {
    crash = false;
  }
  if (!crash) {
    ctx.drawImage(enemyCar2, enemyCar2.X, enemyCar2.Y);
    enemyCar2.Y += speed;
    if (enemyCar2.Y > 500) {
      enemyCar2.Y = -100;
      enemyCar2.X = Math.floor(Math.random() * 335);
      score++;
    }
  }
}


function render() {
  if (isMainMenu) {
    drawMainMenu();
    return;
  }

  if (isPaused) {
    return;
  }

  if (stop === true) {
    return
  }
  coloringRectangle()
  drawLines()
  drawEnemyCar1()
  drawEnemyCar2()
  drawMyCar()
  drawLifes()
  myReq = requestAnimationFrame(render)
}
render()

addEventListener('keydown', function(event) {
  const key = event.keyCode;
  if (key === 37 || key === 65) { // Left arrow or A key
    left = true;
  } else if (key === 39 || key === 68) { // Right arrow or D key
    right = true; }
});

addEventListener('keyup', function(event) {
  const key = event.keyCode;
  if (key === 37 || key === 65) {
    left = false;
  } else if (key === 39 || key === 68) {
    right = false;
  }
  });

addEventListener('keydown', function(event) {
  if (isMainMenu) {
    // audio.play();
    handleMainMenuInput();
    return;
  }
  const key = event.keyCode;
  if (key === 27) { // Escape key
    isPaused = !isPaused; // Toggle the pause state
    if (isPaused) {
      ctx.font = '50px Times New Roman';
          ctx.fillStyle = "Red";
          ctx.fillText('PAUSE', 120, 250);
          audio.pause();
      cancelAnimationFrame(myReq); // Pause the game loop
      pauseButton.textContent = "Resume"; // Change button text to "Resume"
    } else {
      audio.play();
      myReq = requestAnimationFrame(render); // Resume the game loop
      pauseButton.textContent = "Pause"; // Change button text to "Pause"
    }
  }
});

