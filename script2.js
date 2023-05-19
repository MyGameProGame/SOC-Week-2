document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("gameCanvas");
  const context = canvas.getContext("2d");

  // Ball variables
  let x = canvas.width / 2;
  let y = canvas.height / 2;
  let dx = 2;
  let dy = -2;
  let ballRadius = 10;

  // Movement variables
  let rightPressed = false;
  let leftPressed = false;
  let upPressed = false;
  let downPressed = false;

  function drawBall() {
    context.beginPath();
    context.arc(x, y, ballRadius, 0, Math.PI * 2);
    context.fillStyle = "#0095DD";
    context.fill();
    context.closePath();
  }

  function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();

    // Move the ball
    if (rightPressed && x + dx < canvas.width - ballRadius) {
      x += dx;
    }
    if (leftPressed && x - dx > ballRadius) {
      x -= dx;
    }
    if (upPressed && y + dy > ballRadius) {
      y += dy;
    }
    if (downPressed && y - dy < canvas.height - ballRadius) {
      y -= dy;
    }
  }

  function keyDownHandler(event) {
    if (event.key === "Right" || event.key === "ArrowRight") {
      rightPressed = true;
    }
    if (event.key === "Left" || event.key === "ArrowLeft") {
      leftPressed = true;
    }
    if (event.key === "Down" || event.key === "ArrowDown") {
      downPressed = true;
    }
    if (event.key === "Up" || event.key === "ArrowUp") {
      upPressed = true;
    }
  }

  function keyUpHandler(event) {
    if (event.key === "Right" || event.key === "ArrowRight") {
      rightPressed = false;
    }
    if (event.key === "Left" || event.key === "ArrowLeft") {
      leftPressed = false;
    }
    if (event.key === "Down" || event.key === "ArrowDown") {
      downPressed = false;
    }
    if (event.key === "Up" || event.key === "ArrowUp") {
      upPressed = false;
    }
  }

  document.addEventListener("keydown", keyDownHandler);
  document.addEventListener("keyup", keyUpHandler);

  setInterval(draw, 10);
});
