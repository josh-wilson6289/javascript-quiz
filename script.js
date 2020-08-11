// create needed HTML elements to variables

var highScores = document.getElementById("high-scores");
var timeLeft = document.getElementById("time-left");
var startGame = document.getElementById("start-game");
var startBtn = document.getElementById("start-btn");

var secondsLeft = 60;

// removes startGame html element, starts timer countdown, and displays first question
function start() {
  startGame.remove();
  startTimer();
  askFirstQuestion();
}

function startTimer() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeLeft.textContent = "Time left: " + secondsLeft;
  
  if(secondsLeft === 0) {
    clearInterval(timerInterval);
    alert("Time's up!");
  }
  }, 1000);
}
















// click to start game

startBtn.addEventListener("click", start);