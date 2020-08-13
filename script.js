// create needed HTML elements to variables
var highScores = document.getElementById("high-scores");
var timeLeft = document.getElementById("time-left");
var startContainer = document.getElementById("start-container");
var quizContainer = document.getElementById("quiz-container");
var endQuizContainer = document.getElementById("end-quiz-container");
var highScoreContainer = document.getElementById("high-score-container");
var startBtn = document.getElementById("start-btn");
var highScores = document.getElementById("high-scores");
var finalScore = document.getElementById("final-score");
var submitScoreBtn = document.getElementById("submit-score-btn");
var initialsInput = document.getElementById("initialsInput");
var firstHighScore = document.getElementById("first-score");
var secondHighScore = document.getElementById("second-score");
var thirdHighScore = document.getElementById("third-score");
var playAgainBtn = document.getElementById("play-again-button");
var clearScoresBtn = document.getElementById("clear-scores");

//clear all containers except start
endQuizContainer.style.display = "none";
highScoreContainer.style.display = "none";

// needed variables for later
var body = document.body;  
var secondsLeft = 30;
var score = 0;

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

// sets question number to 0, which will be the index for listOfQuestions later
questionNumber = 0;

// hides start and end quiz containers, starts timer countdown, and displays first question
function startQuiz() {
  startContainer.style.display = "none";
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
  timeLeft.innerHTML ="";
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
  // sort high scores
  // var sorted = Object.keys(user).sort(function(a,b) {return list[a]-list[b]})
 
  // high scores go here

 
  //create ol and li for high scores plus a button to play again
}

// adds person object (initials and score) to local storage, then triggers view scores function
function submitScore() {
  event.preventDefault();
  var user = [];
  var person = {initials: initialsInput.value, score: score};
  user.push(person);
  console.log(user);

  localStorage.setItem("user", JSON.stringify(user));
  viewHighScores();
}

// click to start game
startBtn.addEventListener("click", startQuiz);

// view high scores
highScores.addEventListener("click", viewHighScores);

// submit user score
submitScoreBtn.addEventListener("click", submitScore);