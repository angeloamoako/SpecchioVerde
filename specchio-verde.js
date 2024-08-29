let _question, _options, _totalQuestion, _answeredCount, _confirmResponseBtn;

import { callTextToImageApi } from './responsesMapping.js';

var nextQuestionIndex = 0;
var totalQuestion = 10;
let givenResponsesList = [];

document.addEventListener('DOMContentLoaded', () => {

    
    _question = document.getElementById('question');
    _options = document.querySelector('.quiz-options');
    _totalQuestion = document.getElementById('total-question');
    _answeredCount = document.getElementById('answered-count');
    _confirmResponseBtn = document.getElementById('confirm-answer');


    _totalQuestion.textContent = totalQuestion;
    _answeredCount.textContent = nextQuestionIndex + 1;
    eventListeners();
    if(nextQuestionIndex == 0){
        loadNextQuestion(_question, _options);
    }
    

});


const questionsList = [
    {
      question: "How often do you feel stressed during a typical week?",
      options: ["Never", "Rarely", "Sometimes", "Often"],
      category: "stato mentale"
    },
    {
      question: "How would you rate your sleep quality in the past month?",
      options: ["Poor", "Fair", "Good", "Excellent"],
      category: "stato fisico"
    },
    {
      question: "How frequently do you engage in physical exercise?",
      options: ["Never", "Once a week", "2-3 times a week", "Daily"],
      category: "stato fisico"
    },
    {
      question: "How often do you find time to relax or unwind?",
      options: ["Never", "Rarely", "Occasionally", "Frequently"],
      category: "stato fisico"
    },
    {
      question: "How would you describe your current mood?",
      options: ["Anxious", "Sad", "Neutral", "Happy"],
      category: "stato fisico"
    },
    {
      question: "How often do you feel overwhelmed by your responsibilities?",
      options: ["Never", "Sometimes", "Often", "Always"],
      category: "stato fisico"
    },
    {
      question: "How connected do you feel with your friends and family?",
      options: ["Not connected", "Slightly connected", "Moderately connected", "Very connected"],
      category: "stato fisico"
    },
    {
      question: "How often do you engage in activities that you enjoy?",
      options: ["Never", "Rarely", "Sometimes", "Often"],
      category: "stato fisico"
    },
    {
      question: "How would you rate your ability to manage daily stress?",
      options: ["Poor", "Fair", "Good", "Excellent"],
      category: "stato fisico"
    },
    {
      question: "How satisfied are you with your work-life balance?",
      options: ["Very dissatisfied", "Dissatisfied", "Satisfied", "Very satisfied"],
      category: "stato fisico"
    }
];

function loadNextQuestion(currentQuestion, currentOptions){
    _answeredCount.textContent = nextQuestionIndex + 1;
    const nextQuestion = questionsList[nextQuestionIndex];
    _question.innerHTML = `${nextQuestion.question} <br> <span class = "category"> ${nextQuestion.category} </span>`;
    const optionsList = nextQuestion.options;
    _options.innerHTML = `
        ${optionsList.map((option, index)=> `
            <li> ${index + 1}. <span> ${option} </span> </li>
            
        `).join('')}
    `
    selectResponse();
}

function eventListeners(){
    _confirmResponseBtn.addEventListener('click', optionConfirmation);
}

function selectResponse(){
    _options.querySelectorAll('li').forEach((option) => {
        option.addEventListener('click', () => {
            if(_options.querySelector('.selected')){
                const activeOption = _options.querySelector('.selected');
                activeOption.classList.remove('selected');
            }
            option.classList.add('selected');
        })
    });
}

function optionConfirmation(){
    _confirmResponseBtn.desabled = true;
    if(_options.querySelector('.selected')){
        let selectedAnswer = _options.querySelector('.selected').textContent;
        console.log(selectedAnswer[1]);
        givenResponsesList.push(parseInt(selectedAnswer));
        console.log(givenResponsesList);
        const nextToDisplay = questionsList[nextQuestionIndex].question;
        const nextOptionsToDisplay = questionsList[nextQuestionIndex].options;
        if(nextQuestionIndex < 9){
            nextQuestionIndex ++;
            loadNextQuestion(nextToDisplay, nextOptionsToDisplay);
        } else {
            callTextToImageApi(givenResponsesList);
        }
        
    }
}

