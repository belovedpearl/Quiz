let start = document.getElementById('start');
let quest = document.getElementById('question-cont');
let shuffleQues;
let currentQuesIndex;
let questiondiv = document.getElementById('question');
let answerdiv = document.getElementById('answer')
let nextbtn = document.getElementById('next');


start.addEventListener('click', startGame)

function startGame(){
console.log('started');
start.classList.add('hide');
shuffleQues = questions.sort(()=> Math.random - 0.5);
currentQuesIndex = 0;
quest.classList.remove('hide');
setNextQuestion()
}

function setNextQuestion(){
   reset()
 showQuest(shuffleQues[currentQuesIndex])
}


function showQuest(question){
questiondiv.innerText = question.question;
question.answers.forEach(ans => {
   const button = document.createElement('button');
   button.innerText = ans.text;
   button.classList.add('btn') ;
    if(ans.correct){
     button.dataset.correct = ans.correct;
      }
    button.addEventListener('click', chooseAnswer);
    answerdiv.appendChild(button)
})
}

 function reset(){
 nextbtn.classList.add('hide');
 while (answerdiv.firstChild) {
    answerdiv.removeChild(answerdiv.firstChild)
 }
}


function chooseAnswer(){

}

const questions = [
    {
     question: 'What is 3*3?',
     answers: [
        {text: '9', correct : true },
        {text: '5', correct : false },
        {text: '12', correct : false },
        {text: '6', correct : false}
     ]
    },

    {question: 'What is 6*5?',
     answer: [
        {text: '11', correct : false },
        {text: '15', correct : false },
        {text: '30', correct : true},
        {text: '15', correct : false}
     ]
    },

    {question: 'What is 10*5?',
     answer: [
        {text: '15', correct : false },
        {text: '5', correct : false },
        {text: '20', correct : false },
        {text: '50', correct : true}
     ]
    }
]