// create needed HTML elements to variables

//containers
var startContainer = document.getElementById("start-container");
var quizContainer = document.getElementById("quiz-container");
var endQuizContainer = document.getElementById("end-quiz-container");
var highScoreContainer = document.getElementById("high-score-container");

//buttons
var startBtn = document.getElementById("start-btn");
var highScores = document.getElementById("high-scores");
var submitScoreBtn = document.getElementById("submit-score-btn");
var playAgainBtn = document.getElementById("play-again");
var clearScoresBtn = document.getElementById("clear-scores");

//display HTML elements
var timeLeft = document.getElementById("time-left");
var finalScore = document.getElementById("final-score");
var firstHighScore = document.getElementById("first-score");
var secondHighScore = document.getElementById("second-score");
var thirdHighScore = document.getElementById("third-score");
var scoresList = document.getElementById("scores-list");

//input HTML elements
var initialsInput = document.getElementById("initialsInput");

// needed variables for later
var body = document.body;  
var secondsLeft = 30;
var score = 0;

// creates an object for all questions
var listOfQuestions = [{
  header: "Question 1",
  question: "Commonly used data types DO NOT include:", 
  choice1: "Strings",                   
  choice2: "Booleans",                 
  choice3: "Alerts",                  
  choice4: "Numbers",
  correctAnswer: "Alerts"
},
  {header: "Question 2",
  question: "The condition in an if / else statement is enclosed within ____",
  choice1: "Quotes",
  choice2: "Curly Brackets",
  choice3: "Parentheses",
  choice4: "Square Brackets",
  correctAnswer: "Parentheses"
},
  {header: "Question 3",
  question: "Arrays in JavaScript can be used to store _____",
  choice1: "Numbers and Strings",
  choice2: "Other Arrays",
  choice3: "Booleans",
  choice4: "All of the Above",
  correctAnswer: "All of the Above"
}];

// sets question number to 0, which will be the index for listOfQuestions later
questionNumber = 0;

// hides start and end quiz containers, starts timer countdown, and displays first question
function startQuiz() {
  startContainer.style.display = "none";
  highScoreContainer.style.display = "none";
  quizContainer.style.display = "block";
  startTimer();
  nextQuestion();
}

// initiates the timer to decrement every second
function startTimer() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    
// if else statements to determine if the quiz should end
    if (secondsLeft <= 0) {  
      endQuiz();
      clearInterval(timerInterval);
    }
    else if (questionNumber > 2) {
      clearInterval(timerInterval);
    }
    else {
      renderTime();
   }
  }, 1000);
}

// displays time left.  calls stopTimer when time is up.
function renderTime() {
  timeLeft.textContent = "Time left: " + secondsLeft;
}

// function nextQuestion creates HTML for the given question number
// stops game if there are no more questions
function nextQuestion() {
  if (questionNumber > 2) {
    endQuiz();
  }
  else {

  //creates variables for all created html elements
  // var container = document.createElement("div");
    var row = document.createElement("div");
    var header = document.createElement("h1")
    var question = document.createElement("p");
    var choiceDiv = document.createElement("div");
    var choice1 = document.createElement("button");
    var choice2 = document.createElement("button");
    var choice3 = document.createElement("button");
    var choice4 = document.createElement("button");

    // variables for the current question object
    var currentQuestion = listOfQuestions[questionNumber];
    var currentAnswer = currentQuestion.correctAnswer;

    // set text for html elements
    header.textContent = currentQuestion.header;
    question.textContent = currentQuestion.question;
    choice1.textContent = currentQuestion.choice1;
    choice2.textContent = currentQuestion.choice2;
    choice3.textContent = currentQuestion.choice3;
    choice4.textContent = currentQuestion.choice4;

    // Append elements
    quizContainer.appendChild(header);
    quizContainer.appendChild(row);
    quizContainer.appendChild(question);
    quizContainer.appendChild(choiceDiv);
    choiceDiv.appendChild(choice1);
    choiceDiv.appendChild(choice2);
    choiceDiv.appendChild(choice3);
    choiceDiv.appendChild(choice4);

    // style buttons btn-primary bootstrap buttons
    quizContainer.className = "container-fluid";
    row.className = "row justify-content-center";
    choiceDiv.className = "choice-btns";
    choice1.className = "btn btn-primary";
    choice2.className = "btn btn-primary";
    choice3.className = "btn btn-primary";
    choice4.className = "btn btn-primary";
    
    // add event listeners for each button to check answer
    choice1.addEventListener("click", checkAnswer);
    choice2.addEventListener("click", checkAnswer);
    choice3.addEventListener("click", checkAnswer);
    choice4.addEventListener("click", checkAnswer);
    }
    //checks if the button clicked is the correct answer
    function checkAnswer() {
    // removes html, and moves on to next question.  need to add score
      if (this.textContent === currentAnswer) {
        questionNumber++;
        score += 10;
      }
    // decrements seconds by 10, takes 10 points off score
      else {
        secondsLeft -= 10;
        score -= 10;
      }
    // clears all html and moves to the next question
      quizContainer.innerHTML="";
      nextQuestion()
    }
  }

// ends game and displays user's score
function endQuiz() {
// clears start and quiz containers, and shows the user's final score
  quizContainer.style.display = "none";
  timeLeft.style.display = "none";
  endQuizContainer.style.display = "block";
  finalScore.textContent = "Your score is: " + score;
}

// grabs high scores from local storage and displays them
function viewHighScores() {
  event.preventDefault();
  highScoreContainer.style.display = "block";
  startContainer.innerHTML="";
  quizContainer.innerHTML="";
  endQuizContainer.innerHTML="";

  var user = JSON.parse(localStorage.getItem("user"));
  // sort high scores?

 
  // high scores go here
  
  firstHighScore.textContent = user[0].initials + ": " + user[0].score;
  secondHighScore.textContent = user[1].initials + ": " + user[1].score;
  thirdHighScore.textContent = user[2].initials + ": " + user[2].score;
}

// adds person object (initials and score) to local storage, then triggers view scores function
function submitScore() {
  event.preventDefault();
  
  var user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    user = [];
  }

  var person = {initials: initialsInput.value, score: score};
  user.push(person);

  localStorage.setItem("user", JSON.stringify(user));
  viewHighScores();
}

//clears local storage
function clearHighScores() {
  localStorage.clear();
  scoresList.style.display = "none"

}

function resetQuiz() {
  highScoreContainer.style.display = "none";
  quizContainer.style.display = "block";
  timeLeft.left = 30;
  timeLeft.style.display = "block";
  startQuiz();
}

// click to start game
startBtn.addEventListener("click", startQuiz);

// view high scores
highScores.addEventListener("click", viewHighScores);

// submit user score
submitScoreBtn.addEventListener("click", submitScore);

clearScoresBtn.addEventListener("click", clearHighScores);

playAgainBtn.addEventListener("click", resetQuiz);