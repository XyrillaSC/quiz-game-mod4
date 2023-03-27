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
let startButton = document.createElement("button")


// start game



function startGame() {
    startEndText.textContent = "Welcome to the Code Quiz!"
    descriptionText.textContent = "You will have 60 seconds to answer 5 questions! Get a question wrong and you will get a 10 second penalty. In the end, your time remaining will be your score! Good Luck!"
    startEndScreen.appendChild(startButton)
    startButton.textContent = "Start the quiz?"
    
}
// event listener to spawn q1

startButton.addEventListener("click", showQ1)

// question 1

function showQ1(event) {
    event.stopPropagation()
    event.preventDefault()
    startEndScreen.style.display = "none"
    questionScreen.style.display = "flex"
    questionText.textContent = "This is sample question number 1"
    option1.textContent = "Sample Number 1"
    option2.textContent = "Sample Number 2"
    option3.textContent = "Sample Number 3"
    option4.textContent = "Sample Number 4"
    option1.addEventListener("click", showQ2)
    option2.addEventListener("click", showQ2)
    option3.addEventListener("click", showQ2)
    option4.addEventListener("click", showQ2)
}

// question 2

function showQ2(event) {
    event.stopPropagation()
    event.preventDefault()
    startEndScreen.style.display = "none"
    questionScreen.style.display = "flex"
    questionText.textContent = "This is sample question number 2"
    option1.textContent = "Sample Number 1"
    option2.textContent = "Sample Number 2"
    option3.textContent = "Sample Number 3"
    option4.textContent = "Sample Number 4"
    option1.addEventListener("click", showQ3)
    option2.addEventListener("click", showQ3)
    option3.addEventListener("click", showQ3)
    option4.addEventListener("click", showQ3)
}

// question 3

function showQ3(event) {
    event.stopPropagation()
    event.preventDefault()
    startEndScreen.style.display = "none"
    questionScreen.style.display = "flex"
    questionText.textContent = "This is sample question number 3"
    option1.textContent = "Sample Number 1"
    option2.textContent = "Sample Number 2"
    option3.textContent = "Sample Number 3"
    option4.textContent = "Sample Number 4"
    option1.addEventListener("click", showQ4)
    option2.addEventListener("click", showQ4)
    option3.addEventListener("click", showQ4)
    option4.addEventListener("click", showQ4)
}

// question 4

function showQ4(event) {
    event.stopPropagation()
    event.preventDefault()
    startEndScreen.style.display = "none"
    questionScreen.style.display = "flex"
    questionText.textContent = "This is sample question number 4"
    option1.textContent = "Sample Number 1"
    option2.textContent = "Sample Number 2"
    option3.textContent = "Sample Number 3"
    option4.textContent = "Sample Number 4"
    option1.addEventListener("click", showQ5)
    option2.addEventListener("click", showQ5)
    option3.addEventListener("click", showQ5)
    option4.addEventListener("click", showQ5)
}

// question 5

function showQ5(event) {
    event.stopPropagation()
    event.preventDefault()
    startEndScreen.style.display = "none"
    questionScreen.style.display = "flex"
    questionText.textContent = "This is sample question number 5"
    option1.textContent = "Sample Number 1"
    option2.textContent = "Sample Number 2"
    option3.textContent = "Sample Number 3"
    option4.textContent = "Sample Number 4"
    option1.addEventListener("click", showQ5)
    option2.addEventListener("click", showQ5)
    option3.addEventListener("click", showQ5)
    option4.addEventListener("click", showQ5)
}

// game over

// save score

// view high score






startGame()