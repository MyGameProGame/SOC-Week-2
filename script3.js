// Constants
const canvas = document.getElementById("gameCanvas");
const context = canvas.getContext("2d");

// Character properties
const character = {
  x: canvas.width / 2,
  y: canvas.height - 30,
  width: 30,
  height: 30,
  color: "#0095DD",
};

// Input control
let rightPressed = false;
let leftPressed = false;

document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

function keyDownHandler(event) {
  if (event.key === "Right" || event.key === "ArrowRight") {
    rightPressed = true;
  } else if (event.key === "Left" || event.key === "ArrowLeft") {
    leftPressed = true;
  }
}

function keyUpHandler(event) {
  if (event.key === "Right" || event.key === "ArrowRight") {
    rightPressed = false;
  } else if (event.key === "Left" || event.key === "ArrowLeft") {
    leftPressed = false;
  }
}

// Falling objects properties
const object = {
  x: 0,
  y: 0,
  width: 10,
  height: 10,
  color: "#FF0000",
  speed: 2,
};

// Score
let score = 0;

// Update character position
function moveCharacter() {
  if (rightPressed && character.x < canvas.width - character.width) {
    character.x += 5;
  } else if (leftPressed && character.x > 0) {
    character.x -= 5;
  }
}

// Detect collision
function detectCollision() {
  if (
    object.x < character.x + character.width &&
    object.x + object.width > character.x &&
    object.y < character.y + character.height &&
    object.y + object.height > character.y
  ) {
    score++;
    resetObject();
  }
}

// Update falling object position
function moveObject() {
  object.y += object.speed;

  if (object.y > canvas.height) {
    resetObject();
  }
}

// Reset object position
function resetObject() {
  object.x = Math.random() * (canvas.width - object.width);
  object.y = 0;
}

// Draw the game elements
function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  // Draw character
  context.beginPath();
  context.rect(character.x, character.y, character.width, character.height);
  context.fillStyle = character.color;
  context.fill();
  context.closePath();

  // Draw falling object
  context.beginPath();
  context.rect(object.x, object.y, object.width, object.height);
  context.fillStyle = object.color;
  context.fill();
  context.closePath();

  // Draw score
  context.font = "16px Arial";
  context.fillStyle = "#000000";
  context.fillText("Score: " + score, 10, 20);

  // Move character and object
  moveCharacter();
  moveObject();

  // Detect collision
  detectCollision();

  requestAnimationFrame(draw);
}

draw();
