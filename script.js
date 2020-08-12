// create needed HTML elements to variables
var highScores = document.getElementById("high-scores");
var timeLeft = document.getElementById("time-left");
var startGame = document.getElementById("start-game");
var startBtn = document.getElementById("start-btn");

var body = document.body

var secondsLeft = 30;

// creates a variable for all questions
var firstQuestion = {
  question:"Question 1", 
  choice1:"Choice 1",                   
  choice2:"Choice 2",                 
  choice3:"Choice 3",                  
  choice4:"Choice 4"
}


// set the questions object


// removes startGame html element, starts timer countdown, and displays first question
function startQuiz() {
  startGame.remove();
  startTimer();
  askFirstQuestion();
}

// displays timer on screen.  will add more if statements to decrement/clear depending on answers
function startTimer() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeLeft.textContent = "Time left: " + secondsLeft;
  
  renderTime();
  }, 1000);
}

function renderTime() {
  timeLeft.textContent = "Time left: " + secondsLeft;
  if (secondsLeft === 0) {
    stopTimer();
  }
}
function stopTimer() {
  alert("Time's up!");
  clearInterval(timerInterval);
}

// create html elements for first question
function askFirstQuestion() {
  var container = document.createElement("div");
  var row = document.createElement("div");
  var questionNumber = document.createElement("h1");
  var question = document.createElement("p");
  var choiceDiv = document.createElement("div");
  var choice1 = document.createElement("button");
  var choice2 = document.createElement("button");
  var choice3 = document.createElement("button");
  var choice4 = document.createElement("button");

  // set text for elements
  questionNumber.textContent = "Question 1";
  question.textContent = firstQuestion.question;
  choice1.textContent = firstQuestion.choice1;
  choice2.textContent = firstQuestion.choice2;
  choice3.textContent = firstQuestion.choice3;
  choice4.textContent = firstQuestion.choice4;

  // Append elements
  body.appendChild(container);
  container.appendChild(row);
  container.appendChild(questionNumber);
  container.appendChild(question);
  container.appendChild(choiceDiv);
  choiceDiv.appendChild(choice1);
  choiceDiv.appendChild(choice2);
  choiceDiv.appendChild(choice3);
  choiceDiv.appendChild(choice4);

  // make buttons btn-primary bootstrap buttons
  container.className = "container-fluid";
  row.className = "row";
  row.className = "justify-content-center";
  choiceDiv.className = "choice-btns";
  choice1.className = "btn btn-primary";
  choice2.className = "btn btn-primary";
  choice3.className = "btn btn-primary";
  choice4.className = " btn btn-primary";
}



// click to start game
startBtn.addEventListener("click", startQuiz);