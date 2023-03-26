let timer = document.getElementById("timer")
let startEndScreen = document.getElementById("start-over-screen")
let startEndText = document.getElementById("start-or-end-text")
let descriptionText = document.getElementById("description")
let questionScreen = document.getElementById("question-screen")
let questionText = document.getElementById("question")
let option1 = document.getElementById("option-1")
let option2 = document.getElementById("option-2")
let option3 = document.getElementById("option-3")
let option4 = document.getElementById("option-4")


// start game



function startGame() {
    startEndText.textContent = "Welcome to the Code Quiz!"
    descriptionText.textContent = "You will have 60 seconds to answer 5 questions! Get a question wrong and you will get a 10 second penalty. In the end, your time remaining and your accuracy percentage will be your score! Good Luck!"
    let startButton = document.createElement("button")
    startEndScreen.appendChild(startButton)
    startButton.textContent = "Start the quiz?"


}


// question 1

function showQ1() {

}

// question 2

function showQ2() {

}

// question 3

function showQ3() {

}

// question 4

// question 5

// game over

// save score

// view high score


document.addEventListener("load", startGame())