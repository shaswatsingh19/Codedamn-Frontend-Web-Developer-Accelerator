const questions = [
  {
    questionText: "Commonly used data types DO NOT include:",
    options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    answer: "3. alerts",
  },
  {
    questionText: "Arrays in JavaScript can be used to store ______.",
    options: [
      "1. numbers and strings",
      "2. other arrays",
      "3. booleans",
      "4. all of the above",
    ],
    answer: "4. all of the above",
  },
  {
    questionText:
      "String values must be enclosed within _____ when being assigned to variables.",
    options: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
    answer: "3. quotes",
  },
  {
    questionText:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    options: [
      "1. JavaScript",
      "2. terminal/bash",
      "3. for loops",
      "4. console.log",
    ],
    answer: "4. console.log",
  },
  {
    questionText:
      "Which of the following is a statement that can be used to terminate a loop, switch or label statement?",
    options: ["1. break", "2. stop", "3. halt", "4. exit"],
    answer: "1. break",
  },
];

const startQuizBtn = document.querySelector('.start-quiz-btn')
const startCard = document.querySelector('main')
const questionContainer = document.querySelector('.question-container')
const mcqOptions = document.getElementsByClassName('option')


startQuizBtn.addEventListener('click',() => {
  setTimeout( () => {
    startCard.hidden = true
    startQuiz()
  },400)
})

let questionNo = 0

function startQuiz(){
  
  questionContainer.hidden = false

  if (questionNo < questions.length){
    generateQuestion()
  }else{
    // finishExam()
    console.log('end exam')
  }             

}


function generateQuestion(){

  questionContainer.innerHTML =`
    <h2 class="question">${questions[questionNo].questionText}<span id="blank"></span>.</h2>
    <div class="options">
      <button  class='option'>${questions[questionNo].options[0]}</button>
      <button class='option'>${questions[questionNo].options[1]}</button>
      <button class='option'>${questions[questionNo].options[2]}</button>
      <button class='option'>${questions[questionNo].options[3]}</button>
    </div>
    <hr>
    <div class="footer">
      <p class="result">Correct/incorrect</p>
    </div>
  `

console.log(mcqOptions)


  questionNo += 1
  startQuiz()

}
