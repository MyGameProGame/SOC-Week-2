// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Get references to HTML elements
const guessInput = document.getElementById('guessInput');
const message = document.getElementById('message');
const answer = document.getElementById('answer');

// Function to check the user's guess
function checkGuess() {
  const userGuess = parseInt(guessInput.value);

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    message.textContent = 'Please enter a valid number between 1 and 100.';
    message.style.color = 'red';
  } else if (userGuess === randomNumber) {
    message.textContent = 'Congratulations! You guessed the correct number.';
    message.style.color = 'green';
    guessInput.disabled = true;
  } else if (userGuess < randomNumber) {
    message.textContent = 'Too low! Try again.';
    message.style.color = 'red';
  } else {
    message.textContent = 'Too high! Try again.';
    message.style.color = 'red';
  }
  guessInput.value = '';
}
