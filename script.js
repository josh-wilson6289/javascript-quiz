// create needed HTML elements to variables
var highScores = document.getElementById("high-scores");
var timeLeft = document.getElementById("time-left");
var startGame = document.getElementById("start-game");
var startBtn = document.getElementById("start-btn");

var body = document.body

var secondsLeft = 30;

// creates an object for all questions
var listOfquestions = [{
  question: "Question 1", 
  choice1: "Choice 1A",                   
  choice2: "Choice 2A",                 
  choice3: "Choice 3A",                  
  choice4: "Choice 4A",
  correctAnswer: "Choice 1A"
},
  {question: "Question 2",
  choice1: "Choice 2A",
  choice2: "Choice 2B",
  choice3: "Choice 2C",
  choice4: "Choice 2D",
  correctAnswer: "Choice 2B"
}];

questionNumber = 0;



// removes startGame html element, starts timer countdown, and displays first question
function startQuiz() {
  startGame.remove();
  startTimer();
  nextQuestion();
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
  secondsLeft = 30;
  renderTime();
}

// create html elements for first question
function nextQuestion() {
  var container = document.createElement("div");
  var row = document.createElement("div");
  var questionP = document.createElement("p");
  var choiceDiv = document.createElement("div");
  var choice1 = document.createElement("button");
  var choice2 = document.createElement("button");
  var choice3 = document.createElement("button");
  var choice4 = document.createElement("button");
  var currentQuestion = listOfquestions[questionNumber];

  // set text for elements
  questionP.textContent = currentQuestion.question;
  choice1.textContent = currentQuestion.choice1;
  choice2.textContent = currentQuestion.choice2;
  choice3.textContent = currentQuestion.choice3;
  choice4.textContent = currentQuestion.choice4;

  // Append elements
  body.appendChild(container);
  container.appendChild(row);
  container.appendChild(questionP);
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