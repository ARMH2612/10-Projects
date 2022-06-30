const quizData = [
    {
        question:'How old is houssame?',
        a: '10',
        b: '17',
        c: '26',
        d: '30',
        correct :'c' 
    },
    {
        question:'What is the most used programing language in 2019?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'JavaScript',
        correct :'d' 
    },
    {
        question:'What is my cat\'s name?',
        a: 'Simba',
        b: 'Houssame',
        c: 'Sissan',
        d: 'Bibich',
        correct :'a' 
    },
    {
        question:'What does HTML stand for?',
        a: 'Cascading style sheet',
        b: 'Helicopter Terminals Motorboats Lamborginis',
        c: 'Hyper Text Markup Language',
        d: 'Jason Object Notation',
        correct :'c' 
    }
]

let currentQuiz = 0;
let score = 0
const question = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submit = document.getElementById('submit')

function getSelected(){
    const answers = document.getElementsByClassName('answer')
    for (let i = 0; i < answers.length; i++) {
        if(answers[i].checked){
            console.log(answers[i].id,quizData[currentQuiz].correct);
            if(answers[i].id == quizData[currentQuiz].correct){
                return 1
            }
        }
    }
    return 0
}

function loadQuiz(){
    const currentQuizData =  quizData[currentQuiz]
    question.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function clearSelection(){
    const answers = document.getElementsByClassName('answer')
    for (let i = 0; i < answers.length; i++) {
        answers[i].checked = false 
    }
}

loadQuiz();
submit.addEventListener('click',()=>{
    score += getSelected();

    currentQuiz++;
    if(currentQuiz<quizData.length){
        loadQuiz();
        clearSelection()
        console.log(score);
    }else{
        const end = document.getElementsByClassName('quiz-header')
        end[0].innerHTML = `<h1>You reached the end of the Quiz</h1>
        <p>your score is ${score}</p>`
    }
})