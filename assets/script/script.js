

/* Here I will make an array containing 
quiz questions and possible answers */

let questions = [
    {
        question: "Which statement does NOT guarantee that the number will be non-negative?",
        choice1: "number = Math.max (1, highScore);",
        // \n\ allows us to make strings with multiple lines
        choice2: "if (number < 0) { \n\
                number = 1; \n\
            }",
        choice3: "number = Math.random ();",
        choice4: "number = Math.min(10, highScore);",
        correct: "number = Math.min(10, highScore);",
        
    },
    {
        question: "Which of these is NOT considered false?",
        choice1: "0",
        choice2: "'0'",
        correct: "'0'",
        choice3: "null",
        choice4: "''",
    },
    {
        question: "Which is NOT the proper way to iterate through this cars array to display each element?",
        choice1: "for (var i=0; i<cars.Length; i++) { \n\
            console.log(cars[i]); \n\
            }",
        choice2: "for (var i=0; i < cars.Length; i++) { \n\
            console.log(i, cars[i]); \n\
            }",
        choice3: "for (var i=0; i>cars.Length; i++) { \n\
            console.log(cars[i]); \n\
            }",
        correct: "for (var i=0; i>cars.Length; i++) { \n\
            console.log(cars[i]); \n\
            }",
        choice4: "var i = cars.length - 1; \n\
            while (i >= 0) { \n\
                console.log (cars[i]); \n\
                i--; \n\
            }",
    },
    {
        question: "Will the following code ever display the 'Stop' message? \n\
                    \n\ for (var i=0; i<cars.Length; i++) { \n\
                    \n\ if (cars [i]) { \n\
                            console.log('Vroom'); \n\
                        } \n\
                        \n\ else { \n\
                            console.log('Stop'); \n\
                        } \n\
                    \n\ }",
        choice1: "Yes, at least once.",
        choice2: "No, never.",
        choice3: "It depends.",
        correct: "It depends.",
    },
    {
        question: "Which statement correctly stores data in the Web Storage API?",
        choice1: "localStorage.getItem('lunch', 'sandwich');",
        choice2: "localStorage.setItem('lunch', 'sandwich');",
        correct: "localStorage.setItem('lunch', 'sandwich');",
        choice3: "getItem.localStorage('lunch', 'sandwich');",
        choice4: "setItem.localStorage('lunch', 'sandwich');",
    },
    {
        question: "Which of the following is NOT a reason to validate a user's responses?",
        choice1: "Offers the user an opportunity to enter a correct response.",
        choice2: "Reduces bogus answers getting stored in the database.",
        choice3: "Improves the user experience.",
        correct: "Improves the user experience.",
        choice4: "Increases overall quality of user data",
    },
];

////////////////////////////////////////////////

// I will define some variables we will use
let currentQuestion = 0;
// selects for our start button
let startQuiz = document.querySelector(".start-btn");
// selects for section containing quiz info
let quiz = document.querySelector(".questions");
// selects for option A
let answerA = document.querySelector("#a");
// selects for option B
let answerB = document.querySelector("#b");
// selects for option C
let answerC = document.querySelector("#c");
// selects for option D
let answerD = document.querySelector("#d");
//
let answers = document.querySelector(".questions");

// selects for info at beginning of quiz
let startScreen = document.querySelector(".start-screen");
// we will make the quiz 60 seconds long
let time = 60;
// starting score at 0
let score = 0;
// question part of question
let questionEl = document.querySelector("#question");

////////////////////////////////////////////////////
// this will be a function to make question appear
function createQuestion() {
    q = questions[currentQuestion];
    questionEl.innerText = q.question;
    answerA.textContent = q.choice1;
    answerB.textContent = q.choice2;
    answerC.textContent = q.choice3;
    answerD.textContent = q.choice4;
};

// this function increases the index counter, then generates new question
function nextQuestion() {
    currentQuestion++;
    createQuestion();
};

////////////////////////////////////////////
function removeStartScreen() {
    // in-line styling to remove start screen data
    startScreen.style.display = "none";
};
///////////////////////////////////////////////

function endGame () {
    clearInterval(interval);
    score = time + score;
    document.querySelector("#initials").setAttribute("style", "display:block");
    document.querySelector(".quiz").setAttribute("style", "display: none");
    document.querySelector("#highscore").textContent = "Your final score is " + score;



////////////////////////////////////////////////////
// event listener for start button
/* clicking start button will remove startScreen info
start the timer, and generate quiz question */
startQuiz.addEventListener("click", function() {
    // removes start screen info, we're calling the function
    removeStartScreen();

    // create timer that counts down
    quizTimer = setInterval(function() {
        // time will count down
        time--;
        // timer will start at time we defined earlier (60)
        document.querySelector(".timer").innerHTML = time;
        // when time runs out we will notify user, offer retry
        if (time === 0) {
            clearInterval(quizTimer);
            quiz.innerHTML = "<h3>Your time has run out!</h3>";
            // creates new button to allow restart
            let button = document.createElement("button");
            // reloads browser 
            button.innerHTML = "Restart?";
            button.addEventListener("click", function() {
                highScore();
            });
            // adds new button for restart to quiz
            quiz.appendChild(button);
        }
        // now if time drops below 0 
        if (time < 0) {
            clearInterval(quizTimer);
            time = "0";
            document.querySelector(".timer").innerHTML = time;
            quiz.innerHTML = "<h3>You Lose!</h3>";
            let button = document.createElement("button");
            button.innerHTML = "Restart?";
            button.addEventListener("click", function() {
                highScore();
            });
            quiz.appendChild(button);
        }
        if (questions[currentQuestion] > questions[currentQuestion].length) {
            highScore();
        }
    // the interval is 1000 milliseconds, this means 1 second
    
    }, 1000);


    createQuestion();

});
//////////////////////////////////////////////
var incorrect = function() {
    window.alert("Incorrect. 10 second time penalty applied.");
    time = time - 10;
};

var rightAnswer = function() {
    score = score + 10;
    window.alert("Correct!");
};
//////////////////////////////////////////////////////

// event listeners for each answer choice
answerA.addEventListener("click", function(event) {
    event.preventDefault();
    if (questions[currentQuestion].choice1 === questions[currentQuestion].correct) {
        rightAnswer();
        nextQuestion();
    }
    else {
        incorrect();
    }
});
answerB.addEventListener("click", function(event) {
    event.preventDefault();
    if (questions[currentQuestion].choice2 === questions[currentQuestion].correct) {
        rightAnswer();
        nextQuestion();
    }
    else {
        incorrect();
    }
});
answerC.addEventListener("click", function(event) {
    event.preventDefault();
    if (questions[currentQuestion].choice3 === questions[currentQuestion].correct) {
        rightAnswer();
        nextQuestion();
    }
    else {
        incorrect();
    }
});
answerD.addEventListener("click", function(event) {
    event.preventDefault();
    if (questions[currentQuestion].choice4 === questions[currentQuestion].correct) {
        rightAnswer();
        nextQuestion();
    }
    else {
        incorrect();
    }
});

////////////////////////////////////////////////



////////////////////////////////////////////////////
