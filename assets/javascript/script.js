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
let rwScreen = document.getElementById("rw-screen")
let rightWrong = document.getElementById("right-wrong")
let scoreScreen = document.getElementById("view-scores-screen")
let startButton = document.createElement("button")
let saveScoreButton = document.createElement("button")
let inputNames = document.createElement("input")
let inputDesc = document.createElement("label")
let lastSavedScore = document.createElement("p")
let viewScores = document.createElement("button")
let secondsLeft = 60
let score = 0


// start game


function startGame() {
    startEndText.textContent = "Welcome to the Code Quiz!"
    descriptionText.textContent = "You will have 60 seconds to answer 5 questions! Get a question wrong and you will get a 10 second penalty. In the end, your time remaining will be your score! Good Luck!"
    startEndScreen.appendChild(startButton)
    startButton.textContent = "Start the quiz?"
    startButton.addEventListener("click", showQ1)
}

function setTime() {
    console.log('running')
    // Sets interval in variable
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = secondsLeft
        console.log('running2')
        if (startEndText.textContent === "Thanks for Playing!") {
            clearInterval(timerInterval)
        }
        else if (secondsLeft <= 0) {
            clearInterval(timerInterval);
            showGameOver();
        }
    }, 1000);
}




// question 1

function showQ1() {
    setTime()
    console.log(score)
    // event.stopPropagation()
    // event.preventDefault()
    timer.style.display = "flex"
    startEndScreen.style.display = "none"
    questionScreen.style.display = "flex"
    questionText.textContent = "What is the most commonly used element in HTML?"
    option1.textContent = "<main>"
    option2.textContent = "<div>"
    option3.textContent = "<input>"
    option4.textContent = "<aside>"
    option1.addEventListener("click", function(event) {
        event.preventDefault()
        event.stopPropagation()
        rwScreen.style.display = "flex"
        rightWrong.textContent = "Wrong!"
        rightWrong.style.display = "block"
        showQ2()
    })
    option2.addEventListener("click", function(event) {
        event.preventDefault()
        event.stopPropagation()
        rwScreen.style.display = "flex"
        rightWrong.textContent = "Correct!"
        rightWrong.style.display = "block"
        showQ2()
    })
    option3.addEventListener("click", function(event) {
        event.preventDefault()
        event.stopPropagation()
        rwScreen.style.display = "flex"
        rightWrong.textContent = "Wrong!"
        rightWrong.style.display = "block"
        showQ2()
    })
    option4.addEventListener("click", function(event) {
        event.preventDefault()
        event.stopPropagation()
        rwScreen.style.display = "flex"
        rightWrong.textContent = "Wrong!"
        rightWrong.style.display = "block"
        showQ2()
    })
}

// question 2

function showQ2() {
    console.log(score)
    startEndScreen.style.display = "none"
    questionScreen.style.display = "flex"
    questionText.textContent = "What symbol denotes an ID in CSS?"
    option1.textContent = "The ?"
    option2.textContent = "The !"
    option3.textContent = "The ."
    option4.textContent = "The #"
    option1.addEventListener("click", function(event) {
        event.preventDefault()
        event.stopPropagation()
        rightWrong.textContent = "Wrong!"
        rightWrong.style.display = "block"
        showQ3()
    })
    option2.addEventListener("click", function(event) {
        event.preventDefault()
        event.stopPropagation()
        rightWrong.textContent = "Wrong!"
        rightWrong.style.display = "block"
        showQ3()
    })
    option3.addEventListener("click", function(event) {
        event.preventDefault()
        event.stopPropagation()
        rightWrong.textContent = "Wrong!"
        rightWrong.style.display = "block"
        showQ3()
    })
    option4.addEventListener("click", function(event) {
        event.preventDefault()
        event.stopPropagation()
        rightWrong.textContent = "Correct!"
        rightWrong.style.display = "block"
        showQ3()
    })
}

// question 3

function showQ3() {
    console.log(score)
    startEndScreen.style.display = "none"
    questionScreen.style.display = "flex"
    questionText.textContent = "In Java-script, what keyword ends a function?"
    option1.textContent = "Return"
    option2.textContent = "End"
    option3.textContent = "Escape"
    option4.textContent = "Forward"
    option1.addEventListener("click", function(event) {
        event.preventDefault()
        event.stopPropagation()
        rightWrong.textContent = "Correct!"
        rightWrong.style.display = "block"
        showQ4()
    })
    option2.addEventListener("click", function(event) {
        event.preventDefault()
        event.stopPropagation()
        rightWrong.textContent = "Wrong!"
        rightWrong.style.display = "block"
        showQ4()
    })
    option3.addEventListener("click", function(event) {
        event.preventDefault()
        event.stopPropagation()
        rightWrong.textContent = "Wrong!"
        rightWrong.style.display = "block"
        showQ4()
    })
    option4.addEventListener("click", function(event) {
        event.preventDefault()
        event.stopPropagation()
        rightWrong.textContent = "Wrong!"
        rightWrong.style.display = "block"
        showQ4()
    })
}

// question 4

function showQ4() {
    console.log(score)
    startEndScreen.style.display = "none"
    questionScreen.style.display = "flex"
    questionText.textContent = "The * symbol is used to denote what? (In CSS)"
    option1.textContent = "Multiplication"
    option2.textContent = "A universal selector"
    option3.textContent = "A class selector"
    option4.textContent = "The start of a comment"
    option1.addEventListener("click", function(event) {
        event.preventDefault()
        event.stopPropagation()
        rightWrong.textContent = "Wrong!"
        rightWrong.style.display = "block"
        showQ5()
    })
    option2.addEventListener("click", function(event) {
        event.preventDefault()
        event.stopPropagation()
        rightWrong.textContent = "Correct!"
        rightWrong.style.display = "block"
        showQ5()
    })
    option3.addEventListener("click", function(event) {
        event.preventDefault()
        event.stopPropagation()
        rightWrong.textContent = "Wrong!"
        rightWrong.style.display = "block"
        showQ5()
    })
    option4.addEventListener("click", function(event) {
        event.preventDefault()
        event.stopPropagation()
        rightWrong.textContent = "Wrong!"
        rightWrong.style.display = "block"
        showQ5()
    })
}

// question 5

function showQ5() {
    console.log(score)
    startEndScreen.style.display = "none"
    questionScreen.style.display = "flex"
    questionText.textContent = "Which is the correct syntax to link an external style-sheet?"
    option1.textContent = '<link rel="stylesheet" src="assets/css/style.css" />'
    option2.textContent = '<link id="stylesheet" href="assets/css/style.css" />'
    option3.textContent = '<link ref="stylesheet" hrel="assets/css/style.css" />'
    option4.textContent = '<link rel="stylesheet" href="assets/css/style.css" />'
    option1.addEventListener("click", function(event) {
        event.preventDefault()
        event.stopPropagation()
        rightWrong.textContent = "Wrong!"
        rightWrong.style.display = "block"
        showGameOver()
    })
    option2.addEventListener("click", function(event) {
        event.preventDefault()
        event.stopPropagation()
        rightWrong.textContent = "Wrong!"
        rightWrong.style.display = "block"
        showGameOver()
    })
    option3.addEventListener("click", function(event) {
        event.preventDefault()
        event.stopPropagation()
        rightWrong.textContent = "Wrong!"
        rightWrong.style.display = "block"
        showGameOver()
    })
    option4.addEventListener("click", function(event) {
        event.preventDefault()
        event.stopPropagation()
        rightWrong.textContent = "Correct!"
        rightWrong.style.display = "block"
        showGameOver()
    })

}

// game over

function showGameOver() {
    startEndScreen.style.display = "flex"
    questionScreen.style.display = "none"
    startButton.style.display = "none"
    startEndText.textContent = "Thanks for Playing!"
    let score = secondsLeft
    descriptionText.textContent = `You got a score of ${score}`
    startEndScreen.appendChild(inputDesc)
    inputDesc.textContent = "Input your name below!"
    startEndScreen.appendChild(inputNames)
    saveScoreButton.textContent = "Save your Score"
    startEndScreen.appendChild(saveScoreButton)
    lastSavedScore.textContent = `Last saved score: ${localStorage.getItem('name')} with ${localStorage.getItem('score')} points!`
    startEndScreen.appendChild(lastSavedScore)
    saveScoreButton.addEventListener("click", function saveScore(event) {
        event.preventDefault()
        event.stopPropagation()
        localStorage.setItem('score', score)
        localStorage.setItem('name', `${inputNames.value}`)
        lastSavedScore.textContent = `Last saved score: ${localStorage.getItem('name')} with ${localStorage.getItem('score')} points!`
        console.log(inputNames.value)
    })
}

startGame()