// create needed HTML elements to variables
var highScores = document.getElementById("high-scores");
var timeLeft = document.getElementById("time-left");
var startGame = document.getElementById("start-game");
var startBtn = document.getElementById("start-btn");

var body = document.body;  

var secondsLeft = 30;

// creates an object for all questions
var listOfQuestions = [{
  header: "Question 1",
  question: "Here is question 1", 
  choice1: "Choice 1A",                   
  choice2: "Choice 2A",                 
  choice3: "Choice 3A",                  
  choice4: "Choice 4A",
  correctAnswer: "Choice 1A"
},
  {header: "Question 2",
  question: "Here is question 2",
  choice1: "Choice 2A",
  choice2: "Choice 2B",
  choice3: "Choice 2C",
  choice4: "Choice 2D",
  correctAnswer: "Choice 2B"
},
  {header: "Question 3",
  question: "Here is question 3",
  choice1: "Choice 3A",
  choice2: "Choice 3B",
  choice3: "Choice 3C",
  choice4: "Choice 3D",
  correctAnswer: "Choice 3C"
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

// create html elements for each question
function nextQuestion() {
  if (questionNumber > 2) {
    console.log("quiz over");
  }
  else {

  var container = document.createElement("div");
  var row = document.createElement("div");
  var header = document.createElement("h1")
  var question = document.createElement("p");
  var choiceDiv = document.createElement("div");
  var choice1 = document.createElement("button");
  var choice2 = document.createElement("button");
  var choice3 = document.createElement("button");
  var choice4 = document.createElement("button");

  // takes the current question object
  var currentQuestion = listOfQuestions[questionNumber];
  var currentAnswer = currentQuestion.correctAnswer;

  // set text for elements
  header.textContent = currentQuestion.header;
  question.textContent = currentQuestion.question;
  choice1.textContent = currentQuestion.choice1;
  choice2.textContent = currentQuestion.choice2;
  choice3.textContent = currentQuestion.choice3;
  choice4.textContent = currentQuestion.choice4;

  // Append elements
  body.appendChild(container);
  container.appendChild(header);
  container.appendChild(row);
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
  choice4.className = "btn btn-primary";
  
  choice1.addEventListener("click", checkAnswer);
  choice2.addEventListener("click", checkAnswer);
  choice3.addEventListener("click", checkAnswer);
  choice4.addEventListener("click", checkAnswer);

  }
    //checks if the button clicked is the correct answer
    function checkAnswer() {
      console.log(this.textContent);
      console.log(currentAnswer);
      if (this.textContent === currentAnswer) {
        questionNumber++;
        container.remove();
        nextQuestion();
      }
      else {
        console.log("incorrect answer")
      }

      
    }
}



// click to start game
startBtn.addEventListener("click", startQuiz);
