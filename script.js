// import quizCategory from "./data";

document.querySelector('#username').value = ""
document.querySelector("#quizTitle").innerText = ""
let user = {}
const quiz_list = quizCategory.map(quiz => quiz.quiz_name)
// console.log(quiz_list)
let current_quiz = null
// console.log(quizCategory)

const homePage = document.querySelector(".home_page")
const quizPage = document.querySelector(".quiz_page")
const resultPage = document.querySelector(".result_page")
let selectedAnswer = null
let correctAnswer = null


let countdown = 0
function startTimerAndSubmit() {
    countdown = 10; // 10 seconds timer

    // Display countdown
    // const timerElement = document.querySelector(".timer");
    // timerElement.textContent = `Time remaining: ${countdown} seconds`;

    const timer = setInterval(() => {
        countdown--; // Decrease the timer by 1 second
        // timerElement.textContent = `Time remaining: ${countdown} seconds`;
        console.log(countdown)
        // When countdown reaches 0, submit the question
        if (countdown <= 0) {
            clearInterval(timer); // Clear the interval
        }
    }, 1000); // Update every second

    // Function to simulate the question submission
    // nextQuestion()
    console.log("countdown", countdown);
}

// homePage.classList.add("hide")
// console.log(homePage, quizPage, resultPage)
document.addEventListener("DOMContentLoaded", function () {
    // homePage.classList.add("hide")
    // quizPage.classList.remove("hide")
})


function addUser() {
    let newUser = document.getElementById("username").value
    if (newUser === "") {
        alert("please enter a username")
        return
    }
    user.name = newUser.trim().toLowerCase()
    document.querySelector(".greet").innerHTML = `Welcome, ${user.name}!`
    newUser = ""
    // console.log(user)

}


// quiz selection function
function selectQuizOption(event) {
    const selected = document.querySelector(".selected")
    if (selected) {
        selected.classList.remove("selected")
    }
    event.target.classList.add("selected")
    current_quiz = event.target.innerText.toLowerCase()
    user.current_quiz = current_quiz
}


// displaying quiz catagory
const quizChoices = document.querySelector("#quizChoices")
quiz_list.forEach(quiz => {
    const li = document.createElement("li")
    li.innerText = quiz
    quizChoices.appendChild(li)
    li.addEventListener("click", (event) => selectQuizOption(event))
})

// starting quiz
let quiz = null;
let curretQuestion = null
let currentQuiz = null

function startQuiz() {
    if (!user.current_quiz || !user.name) {
        alert("Please select a quiz and username")
        return
    }
    quiz = quizCategory.find(q => q.quiz_name === user.current_quiz)
    user.quiz_total_questions = quiz.questions.length
document.querySelector("#quizTitle").innerHTML = `<span>
    ${user.current_quiz.toUpperCase()}</span>`
    
    // console.log(quizCategory)
    // console.log(quiz)
   
    homePage.classList.remove("show")
    // homePage.classList.add("hide")
    quizPage.classList.add("show")

    currentQuiz = [...quiz.questions]
    // console.log(currentQuiz)

    showQuizPage()
}
let score = 0
let correct = 0
let attempted = 0
let wrong = 0
let timer;
function nextQuestion() {
    // if(countdown<0){
    //     nextQuestion()
    // }
    clearInterval(timer)
    if (!correctAnswer || !correctAnswer) {
        alert("please select answer")

    }
    if(selectedAnswer && correctAnswer) {
        if (selectedAnswer === correctAnswer) {
            console.log("Correct!")
            score += 1
            correct += 1
            attempted += 1
        }
        else if(selectedAnswer!==correctAnswer) {
            console.log("Wrong!")
            attempted += 1
            wrong += 1
        }
        else
        {
            console.log("You havn't select answer!")
        }
    }

    console.log("Score: ", { score, correct, attempted, wrong, correctAnswer, selectedAnswer })

    correctAnswer = null
    selectedAnswer = null
    if (currentQuiz.length == 0) {
        showResultPage()
        return
    }

    showQuizPage()

}

function submitQuiz() {
    if (!selectedAnswer) {
        showResultPage()
    }
    else if (selectedAnswer === correctAnswer) {
        score += 1
        correct += 1
        attempted += 1
    }
    else {
        attempted += 1
        wrong + 1
    }
    selectedAnswer = null
    correctAnswer = null
    showResultPage()
}
let count = 0
function showQuizPage() {
    // startTimerAndSubmit()
    startTimerAndSubmit()
    const quesion = currentQuiz.shift()
    curretQuestion = quesion
    if (curretQuestion.length == 0) {
        showResultPage()
        return
    }
    count += 1
    document.querySelector(".questionNumber").innerText = count + "/" + user.quiz_total_questions
    correctAnswer = quesion.answer
    if (currentQuiz.length == 1) {
        console.log("last question")
    }
    // console.log("length" + currentQuiz.length)
    console.log(quesion.question)
    document.querySelector(".score").innerText = "Score: " + score
    document.querySelector(".result_page").classList.remove("show")
    document.querySelector(".question").innerText = quesion.question
    const amswerChoices = document.querySelector("#answerChoices").innerHTML = ""
    quesion.answers.forEach(answer => {
        const li = document.createElement("li")
        li.innerText = answer
        document.querySelector("#answerChoices").appendChild(li)
        li.addEventListener("click", function (event) {
            const selected = document.querySelector(".selected")
            if (selected) {
                selected.classList.remove("selected")
            }
            event.target.classList.add("selected")
            selectedAnswer = event.target.innerText
        })
    })


}

function showResultPage() {
    // console.log(user)
    // console.log(quiz)
    // console.log({attempted,correct,wrong,total:user.quiz_total_questions})
    homePage.classList.remove("show")
    quizPage.classList.remove("show")
    resultPage.classList.add("show")
    document.querySelector(".username").innerText = user.name
    document.querySelector(".total_questions").innerText = user.quiz_total_questions
    document.querySelector(".attempted_questions").innerText = attempted
    document.querySelector(".correct_answers").innerText = correct
    document.querySelector(".incorrect_answers").innerText = wrong
    document.querySelector(".attempted_questions").innerText = attempted
    document.querySelector(".percentage").innerText = Math.round((correct / user.quiz_total_questions) * 100) + "%"
}



function restartQuiz() {
    console.log("restarting quiz")
    selectedAnswer = null
    correctAnswer = null
    score = 0
    correct = 0
    attempted = 0
    wrong = 0
    count = 0
    // console.log(user)
    resultPage.classList.remove("show")
    // homePage.classList.remove("show")
    quizPage.classList.add("show")
    startQuiz()

}

function goHome() {
    selectedAnswer = null
    correctAnswer = null
    score = 0
    correct = 0
    attempted = 0
    wrong = 0
    count = 0
    user = {}
    document.querySelector("#username").value = ""
    document.querySelector(".greet").innerText = "Welcome!"
    resultPage.classList.remove("show")
    quizPage.classList.remove("show")
    homePage.classList.add("show")
}

// add auto submit fulctionality and shown counter for 10 seconds after


    // resultPage.classList.remove("show")


    function startTimerAndSubmit() {
        let countdown = 10; // 10 seconds timer
    
        // Display countdown
        // const timerElement = document.querySelector(".timer");

        console.log(" Countdown started: " + countdown)
        // timerElement.textContent = `Time remaining: ${countdown} seconds`;
        document.querySelector(".timer").innerText = `${countdown}S `;
        timer = setInterval(() => {
            countdown--; // Decrease the timer by 1 second
            // timerElement.textContent = `Time remaining: ${countdown} seconds`;
        document.querySelector(".timer").innerText = `${countdown}S `;
            console.log(countdown)
            // When countdown reaches 0, submit the question
            if (countdown <= 0) {
                clearInterval(timer); // Clear the interval
                nextQuestion()
                console.log("count down completed successfully")
            }
        }, 1000); // Update every second

//  clearTimeout(timer)
        console.log("countdown Completed", countdown);
    }