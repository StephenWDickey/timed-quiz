/* Here I will make an array containing 
quiz questions and possible answers */

let questions = [
    {
        question: "Which statement does NOT guarantee that number will be non-negative?",
        a: "number = Math.max (1, highScore);",
        // \n\ allows us to make strings with multiple lines
        b: "if (number < 0) { \n\
                number = 1; \n\
            }",
        c: "number = Math.random ();",
        d: "number = Math.min(10, highScore);",
    },
    {
        question: "Which of these is NOT considered false?",
        a: "0",
        b: "'0'",
        c: "null",
        d: "''",
    },
    {
        question: "Which is NOT the proper way to iterate through this cars array to display each element?",
        a: "for (var i=0; i<cars.Length; i++) { \n\
            console.log(cars[i]); \n\
            }",
        b: "for (var i=0; i < cars.Length; i++) { \n\
            console.log(i, cars[i]); \n\
            }",
        c: "for (var i=0; i>cars.Length; i++) { \n\
            console.log(cars[i]); \n\
            }",
        d: "var i = cars.length - 1; \n\
            while (i >= 0) { \n\
                console.log (cars[i]); \n\
                i--; \n\
            }",
    },
    {
        question: "Will the following code ever display the 'Stop' message? \n\
                for (var i=0; i<cars.Length; i++) { \n\
                    if (cars [i]) { \n\
                        console.log('Vroom'); \n\
                    } \n\
                    else { \n\
                        console.log('Stop'); \n\
                    } \n\
                }",
        a: "Yes, at least once.",
        b: "No, never.",
        c: "It depends.",
    },
    {
        question: "Which statement correctly stores data in the Web Storage API?",
        a: "localStorage.getItem('lunch', 'sandwich');",
        b: "localStorage.setItem('lunch', 'sandwich');",
        c: "getItem.localStorage('lunch', 'sandwich');",
        d: "setItem.localStorage('lunch', 'sandwich');",
    },
    {
        question: "Which of the following is NOT a reason to validate a user's responses?",
        a: "Offers the user an opportunity to enter a correct response.",
        b: "Reduces bogus answers getting stored in the database.",
        c: "Improves the user experience.",
        d: "Increases overall quality of user data",
    },
];

////////////////////////////////////////////////

// I will define some variables we will use

// selects for our start button
let startQuiz = document.querySelector(".start-btn");
// selects for section containing quiz info
let quiz = document.querySelector(".quiz-content");
// selects for option A
let answerA = document.querySelector("#a");
// selects for option B
let answerB = document.querySelector("#b");
// selects for option C
let answerC = document.querySelector("#c");
// selects for option D
let answerD = document.querySelector("#d");
// selects for all answers
let answers = document.querySelector(".answer-btn");
// selects for info at beginning of quiz
let startScreen = document.querySelector(".start-screen");
// we will make the quiz 60 seconds long
let time = 60;
// we should be able to target question data with his
let questionEl = document.querySelector("#quiz-questions");
// stores high score
let highScoreStorage = JSON.parse(localStorage.getItem("quiz")) || [];
// start score at 0
let score = 0;
////////////////////////////////////////////////////
let questionsI = 0;
// this will be a function to make question appear
function createQuestion() {
    
};

function removeStartScreen() {
    // in-line styling to remove start screen data
    startScreen.style.display = "none";
};

//////////////////////////////////////////////////////

// event listener for start button
/* clicking start button will remove startScreen info
start the timer, and generate quiz questions */
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
                location.reload();
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
                location.reload();
            });
            quiz.appendChild(button);
        }
    // the interval is 1000 milliseconds, this means 1 second
    }, 1000);
});
