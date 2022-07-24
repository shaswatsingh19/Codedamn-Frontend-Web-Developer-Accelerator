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
      "Which of the following is a statement that can be used to terminate a loop, switch or button statement?",
    options: ["1. break", "2. stop", "3. halt", "4. exit"],
    answer: "1. break",
  },
];

const container = document.querySelector('.container')
const startQuizBtn = document.querySelector('.start-quiz-btn')
const startCard = document.querySelector('main')
const questionContainer = document.querySelector('.question-container')
const mcqAnswers = document.querySelectorAll('.answer')
const endQuizContainer = document.querySelector('.end-quiz-card')

const highScoreContainer = document.querySelector('.highscore-card')
const leaderboard = document.querySelector('#leaderboard')


let timer = document.querySelector('#timer')
let result = document.getElementById('result')
let storeScore = []

let currQue = 0
let score = 0
let playerCount = 0
const a = document.getElementById('a_text')
const b = document.getElementById('b_text')
const c = document.getElementById('c_text')
const d = document.getElementById('d_text')



leaderboard.addEventListener('click', function (){
  if (questionContainer.hidden == true) {
    showHighScoreViaLeaderboard()
  }
})


startQuizBtn.addEventListener('click',() => {
  setTimeout( () => {
    startCard.hidden = true
    questionContainer.hidden = false
    startQuiz()
  },400)

  
  console.log(timer)
  
})

function startQuiz(){

  setInterval(() =>{
    timer.textContent = parseInt(timer.textContent)-1
  },1000)
  
  const currQuestionData = questions[currQue]
  console.log(currQuestionData)
  if(currQue < questions.length  && parseInt(timer.textContent) >0){
    questionContainer.innerHTML = `
    <h2 class="question"> ${currQuestionData.questionText }</h2>
    <div class="mcq-options">
      <button class= 'answer' id="a_text">${currQuestionData.options[0]}</button>
      <button class= 'answer' id="b_text">${currQuestionData.options[1]}</button>
      <button class= 'answer' id="c_text">${currQuestionData.options[2]}</button>
      <button class= 'answer' id="d_text">${currQuestionData.options[3]}</button>
    </div>
    <hr>
    <div class="footer">
    
    </div>
    `
    // console.log(questionContainer.children[1])
    let mcqOptions = questionContainer.children[1]
    mcqOptions.addEventListener('click', verifyAnswer)

  }else{
    
    console.log('end quiz')
    questionContainer.hidden = true
    endQuizContainer.hidden = false
    let totalScore = (score*(parseInt(timer.textContent)))/questions.length
    endQuizContainer.innerHTML = `
    <h1>All Done!</h1>
    <p>Your Final Score is <span class='total-score'>${totalScore}</span></p>
    <div class="initial">
        <label for ='initials'>Enter initials: </label>
        <input type="text" id="initials" name="initials" required>
        <button class="submit-btn">Submit</button>
    </div>
    `
    let input = document.querySelector('input')
    const submitBtn = document.querySelector('.submit-btn')
    
    submitBtn.addEventListener('click', function a(){
      let playerName = input.value
      console.log(input.value.trim().length)
      if (input.value.trim().length === 0){
        playerName = 'guest'
      }
      let playerDetail = String(playerCount+1) +". "+ playerName+' - '+totalScore+'<br>'
      endQuizContainer.hidden = true
      showHighScoreViaEndGame(playerDetail)

    })
  }
  
}


function verifyAnswer(event){

  let parent = event.target.parentElement.children
  
  // Disabling all the button are 1 button is pressed
  for(let child of parent){
    child.disabled = true
  }

  let correctAns = questions[currQue].answer
  let userClicked = event.target
  let isCorrect = false
  let result  = document.createElement('p')

  if(userClicked.textContent == correctAns){
    
    isCorrect = true
    userClicked.classList.add('correct')
    result.textContent = 'CORRECT HE BHAI'
    score += 1
  }else{
    
    result.textContent = 'INCORRECT HE BHAI'
    userClicked.classList.add('incorrect')
    timer.textContent = parseInt(timer.textContent)-5
  }
  
  result.setAttribute('class','footer')
  questionContainer.append(result)


  setTimeout( () => {
    
    currQue+=1
    startQuiz()
  },800)

}

function showHighScore(allScore){
  
  startCard.hidden = true
  highScoreContainer.hidden = false

  const reset = document.querySelector('.go-back')

  reset.addEventListener('click', function(){
    GameReseted()
    highScoreContainer.hidden = true
  })
  
  const clearHS = document.querySelector('.clear-highscore')

  clearHS.addEventListener('click', function(){
    localStorage.clear()
    allScore.innerHTML = ''
    playerCount = 1
  })
}

function showHighScoreViaLeaderboard(){

  const allScore = document.querySelector('.all-scores')
  allScore.innerHTML += ''
  showHighScore(allScore)


}

function showHighScoreViaEndGame(playerDetail){
  
  storeScore[playerCount] = playerDetail
  playerCount+=1
  localStorage.setItem("storeScore", JSON.stringify(storeScore));
  const allScore = document.querySelector('.all-scores')
  allScore.innerHTML += playerDetail
  showHighScore(allScore)


}


function GameReseted(){
  currQue = 0
  score = 0
  timer.textContent = '60'
  
  startCard.hidden = false
  
}