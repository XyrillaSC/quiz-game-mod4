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

// event listener to spawn q1

function setTime() {
    console.log('running')
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timer.textContent = secondsLeft
      console.log('running2')
  

      if (startEndText.textContent === "Thanks for Playing!") {
        clearInterval(timerInterval)
      }
      else if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        
        showGameOver();
      }
  
    }, 1000);
}

// question 1

function showQ1() {
    setTime()
    // event.stopPropagation()
    // event.preventDefault()
    startEndScreen.style.display = "none"
    questionScreen.style.display = "flex"
    questionText.textContent = "This is sample question number 1"
    option1.textContent = "Sample Number 1"
    option2.textContent = "Sample Number 2"
    option3.textContent = "Sample Number 3"
    option4.textContent = "Sample Number 4"
    option1.addEventListener("click", function() {
        rwScreen.style.display = "flex"
        rightWrong.textContent = "Wrong!"
        rightWrong.style.display = "block"
        showQ2()
    })
    option2.addEventListener("click", function() {
        rwScreen.style.display = "flex"
        rightWrong.textContent = "Correct!"
        rightWrong.style.display = "block"
        showQ2()
    })
    option3.addEventListener("click", function() {
        rwScreen.style.display = "flex"
        rightWrong.textContent = "Wrong!"
        rightWrong.style.display = "block"
        showQ2()
    })
    option4.addEventListener("click", function() {
        rwScreen.style.display = "flex"
        rightWrong.textContent = "Wrong!"
        rightWrong.style.display = "block"
        showQ2()
    })
}

// question 2

function showQ2() {
    startEndScreen.style.display = "none"
    questionScreen.style.display = "flex"
    questionText.textContent = "This is sample question number 2"
    option1.textContent = "Sample Number 1"
    option2.textContent = "Sample Number 2"
    option3.textContent = "Sample Number 3"
    option4.textContent = "Sample Number 4"
    option1.addEventListener("click", function() {
        rightWrong.textContent = "Wrong!"
        rightWrong.style.display = "block"
        showQ3()
    })
    option2.addEventListener("click", function() {
        rightWrong.textContent = "Wrong!"
        rightWrong.style.display = "block"
        showQ3()
    })
    option3.addEventListener("click", function() {
        rightWrong.textContent = "Wrong!"
        rightWrong.style.display = "block"
        showQ3()
    })
    option4.addEventListener("click", function() {
        rightWrong.textContent = "Correct!"
        rightWrong.style.display = "block"
        showQ3()
    })
}

// question 3

function showQ3() {
    startEndScreen.style.display = "none"
    questionScreen.style.display = "flex"
    questionText.textContent = "This is sample question number 3"
    option1.textContent = "Sample Number 1"
    option2.textContent = "Sample Number 2"
    option3.textContent = "Sample Number 3"
    option4.textContent = "Sample Number 4"
    option1.addEventListener("click", function() {
        rightWrong.textContent = "Correct!"
        rightWrong.style.display = "block"
        showQ4()
    })
    option2.addEventListener("click", function() {
        rightWrong.textContent = "Wrong!"
        rightWrong.style.display = "block"
        showQ4()
    })
    option3.addEventListener("click", function() {
        rightWrong.textContent = "Wrong!"
        rightWrong.style.display = "block"
        showQ4()
    })
    option4.addEventListener("click", function() {
        rightWrong.textContent = "Wrong!"
        rightWrong.style.display = "block"
        showQ4()
    })
}

// question 4

function showQ4() {
    startEndScreen.style.display = "none"
    questionScreen.style.display = "flex"
    questionText.textContent = "This is sample question number 4"
    option1.textContent = "Sample Number 1"
    option2.textContent = "Sample Number 2"
    option3.textContent = "Sample Number 3"
    option4.textContent = "Sample Number 4"
    option1.addEventListener("click", function() {
        rightWrong.textContent = "Wrong!"
        rightWrong.style.display = "block"
        showQ5()
    })
    option2.addEventListener("click", function() {
        rightWrong.textContent = "Correct!"
        rightWrong.style.display = "block"
        showQ5()
    })
    option3.addEventListener("click", function() {
        rightWrong.textContent = "Wrong!"
        rightWrong.style.display = "block"
        showQ5()
    })
    option4.addEventListener("click", function() {
        rightWrong.textContent = "Wrong!"
        rightWrong.style.display = "block"
        showQ5()
    })
}

// question 5

function showQ5() {
    startEndScreen.style.display = "none"
    questionScreen.style.display = "flex"
    questionText.textContent = "This is sample question number 5"
    option1.textContent = "Sample Number 1"
    option2.textContent = "Sample Number 2"
    option3.textContent = "Sample Number 3"
    option4.textContent = "Sample Number 4"
    option1.addEventListener("click", function() {
        rightWrong.textContent = "Wrong!"
        rightWrong.style.display = "block"
        showGameOver()
    })
    option2.addEventListener("click", function() {
        rightWrong.textContent = "Wrong!"
        rightWrong.style.display = "block"
        showGameOver()
    })
    option3.addEventListener("click", function() {
        rightWrong.textContent = "Wrong!"
        rightWrong.style.display = "block"
        showGameOver()
    })
    option4.addEventListener("click", function() {
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
    saveScoreButton.addEventListener("click", function saveScore(event) {
        event.preventDefault()
        event.stopPropagation()
        localStorage.setItem(`${inputNames.value}`, score)
        console.log(inputNames.value)
    })
    viewScores.textContent = "View last 10 scores?"
    startEndScreen.appendChild(viewScores)
    viewScores.addEventListener("click", function() {
        startEndScreen.style.display = "none"
        rwScreen.style.display = "none"
        scoreScreen.style.display = "flex"
    })
    
}

// save score




// view high score






startGame()