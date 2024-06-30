const questions = [
    {quwstion: "What is the capital of France?",
    Options:[{
        text: "New York",
        correct: false
    },
    {
        text: "London",
        correct: false
    },
    {
        text: "Paris",
        correct: true
    },
    {
        text: "Dublin",
        correct: false
    }]
    },
    {quwstion: "What is the capital of Ireland?",
    Options:[{
        text: "New York",
        correct: false
    },
    {
        text: "London",
        correct: false
    },
    {
        text: "Paris",
        correct: false
    },
    {
        text: "Dublin",
        correct: true
    }]
    },
    {quwstion: "What is the capital of England?",
    Options:[{
        text: "New York",
        correct: false
    },
    {
        text: "London",
        correct: true
    },
    {
        text: "Paris",
        correct: false
    },
    {
        text: "Dublin",
        correct: false
    }]
    },
    {quwstion: "What is the capital of USA?",
    Options:[{
        text: "New York",
        correct: false
    },
    {
        text: "London",
        correct: false
    },
    {
        text: "Washington DC",
        correct: true
    },
    {
        text: "Dublin",
        correct: false
    }]
    },

    {quwstion: "What is the capital of Germany?",
    Options:[{
        text: "New York",
        correct: false
    },
    {
        text: "Berlin",
        correct: true
    },
    {
        text: "Paris",
        correct: false
    },
    {
        text: "Dublin",
        correct: false
    }]

    },
    {quwstion: "What is the capital of Spain?",
    Options:[{
        text: "New York",
        correct: false
    },
    {
        text: "London",
        correct: false
    },
    {
        text: "Madrid",
        correct: true
    },
    {
        text: "Dublin",
        correct: false
    }]
    },
    {quwstion: "What is the capital of Italy?",
    Options:[{
        text: "New York",
        correct: false
    },
    {
        text: "London",
        correct: false
    },
    {
        text: "Paris",
        correct: false
    },
    {
        text: "Rome",
        correct: true
    }]
    },
    {quwstion: "What is the capital of Japan?",
    Options:[{
        text: "New York",
        correct: false
    },
    {
        text: "London",
        correct: false
    },
    {
        text: "Tokyo",
        correct: true
    },
    {
        text: "Dublin",
        correct: false
    }]
    },
    {quwstion: "What is the capital of China?",
    Options:[{
        text: "New York",
        correct: false
    },
    {
        text: "London",
        correct: false
    },
    {
        text: "Beijing",
        correct: true
    },
    {
        text: "Dublin",
        correct: false
    }]
    },
    {quwstion: "What is the capital of India?",
    Options:[{
        text: "New York",
        correct: false
    },
    {
        text: "London",
        correct: false
    },
    {
        text: "Paris",
        correct: false
    },
    {
        text: "New Delhi",
        correct: true
    }]
    },
    
]
let Question_container = document.querySelector('.Question')
let button_container = document.querySelector('.button_container')
let next_button = document.querySelector('.next')
let questionCounter = 0;
let score = 0;
function startQuiz(){
    questionCounter = 0
    score = 0
    getNewQuestion()
}
function getNewQuestion(){
    resetState();
    const question = questions[questionCounter]
    const question_number = questionCounter + 1
    Question_container.innerHTML = question_number + ". " + question.quwstion
    question.Options.forEach(option => {
        const button = document.createElement('button')
        button.innerText = option.text
        button.classList.add("btn")
        button_container.appendChild(button)
            if(option.correct){
                button.dataset.correct = option.correct;
                score=score+1;
            }
            button.addEventListener('click', selectOption)
      
    })
}
startQuiz()
function resetState(){
    next_button.style.display = "none";
    next_button.innerHTML = "Next"
    while(button_container.firstChild){
        button_container.removeChild(button_container.firstChild)
    }
}
function selectOption(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct === "true"
    if(correct){
        selectedButton.classList.add("correct");
        score++
    }
    else{
        selectedButton.classList.add("wrong");
    }
    Array.from(button_container.children).forEach(button => {
       if(button.dataset.correct === "true"){
           button.classList.add("correct");
       }
        button.disabled = true;
        button.style.cursor = "not-allowed";
        button.style.pointerEvents = "none";
        
    })
    next_button.style.display = "block";
   
}

next_button.addEventListener('click', () => {
    
    if(questionCounter < questions.length){
        next_question()
    }
    else{
        startQuiz()
    }
})

function next_question(){
    questionCounter++
    if(questionCounter < questions.length){
        getNewQuestion()
        next_button.innerHTML = "Next"
    }else{
       showscore()
    }
}
function showscore(){
    resetState()
    Question_container.innerText = "You have completed the quiz. Your score is: " + `${score-10}` + "/" + questions.length
    next_button.innerHTML = "Restart"
    next_button.style.display = "block";
}