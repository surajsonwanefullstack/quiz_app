
let user = {}
const quiz_list = quizCategory.map(quiz => quiz.quiz_name)
console.log(quiz_list)
let current_quiz = null
console.log(quizCategory)

const homePage = document.querySelector(".home_page")
const quizPage = document.querySelector(".quiz_page")
const resultPage = document.querySelector(".result_page")
let selectedAnswer = null
let correctAnswer = null

// homePage.classList.add("hide")
console.log(homePage, quizPage, resultPage)
document.addEventListener("DOMContentLoaded", function () {
    // homePage.classList.add("hide")
    // quizPage.classList.remove("hide")
})


function addUser() {
    const newUser = document.getElementById("username")
    if (newUser.value == "") {
        alert("please enter a username")
        return
    }
    user.name = newUser.value.trim().toLowerCase()
    document.querySelector(".greet").innerHTML = `Welcome, ${user.name}!`
    newUser.value = ""
    console.log(user)

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
    if (!user.current_quiz) {
        alert("Please select a quiz")
        return
    }
    quiz = quizCategory.find(q => q.quiz_name === current_quiz)
    user.quiz_total_questions = quiz.questions.length
    console.log(quiz)
    // document.querySelector(".quiz_page").classList.add("show")
    // document.querySelector(".home_page").classList.add("hide")
    // resultPage.classList.add("hide")
    // homePage.classList.add("hide")
    homePage.classList.remove("show")
    resultPage.classList.remove("show")
    quizPage.classList.add("show")

    currentQuiz = quiz.questions

    showQuizPage()
}
let score = 0
let correct = 0
let attempted = 0
let wrong = 0
function nextQuestion() {
    
    if (!correctAnswer) {
        alert("please select annswer")
        return
    }
    if (selectedAnswer === correctAnswer) {
        console.log("Correct!")
        score += 1
        correct += 1
        attempted += 1
    }
    else {
        console.log("Wrong!")
        attempted += 1
        wrong += 1
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

    const quesion = currentQuiz.shift()
    curretQuestion = quesion
    if (curretQuestion == undefined) {
        showResultPage()
        return
    }
    count += 1
    document.querySelector(".questionNumber").innerText = count + "/" + user.quiz_total_questions
    correctAnswer = quesion.answer
    if (currentQuiz.length == 1) {
        console.log("last question")
    }
    console.log("length" + currentQuiz.length)
    console.log(quesion.question)
    document.querySelector(".score").innerText = "Score: " + score

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
    console.log(user)
    console.log(quiz)
    console.log({attempted,correct,wrong,attempted})
 
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
    selectedAnswer = null
    correctAnswer = null
    score = 0
    correct = 0
    attempted = 0
    wrong = 0
    count = 0
    resultPage.classList.remove("show")
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
    resultPage.classList.remove("show")
    quizPage.classList.remove("show")
}