// create needed HTML elements to variables
var highScores = document.getElementById("high-scores");
var timeLeft = document.getElementById("time-left");
var startGame = document.getElementById("start-game");
var startBtn = document.getElementById("start-btn");

var body = document.body

var secondsLeft = 60;

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
  
  if(secondsLeft === 0) {
    stopTimer();
  }
  }, 1000);
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
  container.classList.add("container-fluid");
  row.classList.add("row");
  row.classList.add("justify-content-center");
  choiceDiv.classList.add("choice-btns");
  choice1.classList.add("btn");
  choice1.classList.add("btn-primary");
  choice2.classList.add("btn");
  choice2.classList.add("btn-primary");
  choice3.classList.add("btn");
  choice3.classList.add("btn-primary");
  choice4.classList.add("btn");
  choice4.classList.add("btn-primary");
}



// click to start game
startBtn.addEventListener("click", startQuiz);