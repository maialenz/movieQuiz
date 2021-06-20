const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const progressText = document.getElementById('progressText');
const progressBarFull = document.getElementById('progressBarFull');
const scoreText = document.getElementById('score');

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let triviaQuestions = [];

fetch(
        "https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple")
        
        .then((res) => {
            return res.json();
        })
        .then((loadedQuestions) => {
            triviaQuestions = loadedQuestions.results.map((loadedQuestion) => {
                const formattedQuestion = {
                    question: loadedQuestion.question,
                };
    
                const answerChoices = [...loadedQuestion.incorrect_answers];
                formattedQuestion.answer = Math.floor(Math.random() * 4) + 1;
                answerChoices.splice(
                    formattedQuestion.answer - 1,
                    0,
                    loadedQuestion.correct_answer
                );
    
                answerChoices.forEach((choice, index) => {
                    formattedQuestion['choice' + (index + 1)] = choice;
                });
    
                return formattedQuestion;
            });
            startQuiz();
        })
        .catch((err) => {
            console.error(err);
        });

// Constants for the game
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;


startQuiz = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...triviaQuestions];
    getNewQuestion();
};

getNewQuestion = () => {

    //if the user answers all questions available --> bring them to the score page
    //store scores inputed by user to access them on end page

    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        //go to the end page
        return window.location.assign("/end.html")
    }

    //update the score dinamically as user answers questions
    questionCounter++;
    progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
    //update and fill the progress bar
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS)*100}%`;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerHTML = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    //remove used question from array not to reuse it
    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

//Event Lisstener for selecting answers
choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return;

        //create delay before they can answer
        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        const classToApply =
            selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

        //increment score only if user answers question correctly
        if (classToApply === 'correct') {
            incrementScore(CORRECT_BONUS);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        //Continue to the next question after a second, so the user can see if the answer was correct
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();

        }, 1000);

    });
});

//increment score counter
incrementScore = num => {
    score += num;
    scoreText.innerHTML = score;
}