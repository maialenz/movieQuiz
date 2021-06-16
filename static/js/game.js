//Variable to get the homepage div
const levelPage = document.getElementById('#homepage');
// Variables to get the target the alert modal, the message inside and the close button
const alertModal = document.getElementById('#alertModal');
const alertMessage = document.getElementById('#alert-modal-message');
const closeAlertModal = document.getElementById('#closeModal');
// Variables to target the level dropdown
const dropdown = document.getElementsByClassName('.dropdown-content');
const levelSelection = document.getElementById('#levelSelection');
const chooseLevel = document.getElementById("#drop")
//Variable to get the button to start the game
const startGame = document.getElementsByClassName('.start-button');

//Variable to get the game div
const gamePage = document.getElementById('#gamepage');
//Variable to get the button to restart the level
const restartLevel = document.getElementById('#restart-level-button');
//Variable to get the button to restart the game
const restartAll = document.getElementById('#restart-game-button');
//Variable to get the div which will contain the questions and answers of the quiz
const questionsContainer = document.getElementById('#questions-box');
//Variable to get the div which will contain the question
const questions = document.getElementById('#question');
// Variable to get the answer buttons in an array
const answers = Array.from(document.getElementsByClassName('.answer-button'));

// Variable to set the score points for each question
const correctPoints = 10;
// Variable to determine if the current question is answered or not
let acceptingAnswers = true;
//
let difficultyLevel = null;
// variable to track the user score
let score = 0;
//Variable to track the question count
let questionCounter = 0;
// Varaible to store fetched questions
let availableQuestions = [];