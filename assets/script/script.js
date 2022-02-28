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

////////////////////////////////////////////////////

// this will be a function to make question appear
function createQuestion() {
    questionEl.innerHTML = ""
};

function removeStartScreen() {
    // in-line styling to remove start screen data
    document.getElementById(".start-screen").style.display = "none";
}

