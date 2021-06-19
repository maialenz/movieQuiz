const questions = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const progressText = document.getElementById('progressText');
const progressBarFull = document.getElementById('progressBarFull');
const scoreText = document.getElementById('score');

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let triviaQuestions = [{
        question: "What is the name of Harry Potter's owl?",
        choice1: "Scabbers",
        choice2: "Snowy",
        choice3: "Hedwig",
        choice4: "Errol",
        answer: 3
    },
    {
        question: "What creature is Aragog?",
        choice1: "Giant House Spider",
        choice2: "Black Widow",
        choice3: "Tarantula",
        choice4: "Acromantula",
        answer: 4
    },
    {
        question: "Who killed Dobby by throwing a knife at him?",
        choice1: "Bellatrix Lestrange",
        choice2: "Alastor Moody",
        choice3: "Lucius Malfoy",
        choice4: "Voldemort",
        answer: 1
    },
    {
        question: "What was Hagrid's pet dog called?",
        choice1: "Nagini",
        choice2: "Fang",
        choice3: "Max",
        choice4: "Charlie",
        answer: 2
    },
    {
        question: "What was Harry’s Patronus?",
        choice1: "A deer",
        choice2: "An Otter",
        choice3: "A cat",
        choice4: "A stag",
        answer: 4
    },
    {
        question: "What was Neville's favorite subject at Hogwarts?",
        choice1: "Defense against the Dark Arts",
        choice2: "Herbology",
        choice3: "Potions",
        choice4: "Transfiguration",
        answer: 2
    },
    {
        question: "Where are the Slytherin common rooms located?",
        choice1: "The east wing",
        choice2: "The Dungeon",
        choice3: "Behind a painting",
        choice4: "Next to the kitchen",
        answer: 2
    },
    {
        question: "How many staircases are located in Hogwarts?",
        choice1: "506",
        choice2: "143",
        choice3: "142",
        choice4: "1201",
        answer: 3
    },
    {
        question: "Ron Weasley had a phobia for which insect?",
        choice1: "Beatles",
        choice2: "Spiders",
        choice3: "Butterflies",
        choice4: "Mosquitoes",
        answer: 2
    },
    {
        question: "When is Harry Potter’s birthday?",
        choice1: "July 31rst",
        choice2: "December 18th",
        choice3: "May 17th",
        choice4: "August 3rd",
        answer: 1
    },
    {
        question: "What is the real name of the Scarlet Witch?",
        choice1: "Carol Danvers",
        choice2: "Wanda Maximoff",
        choice3: "Natasha Romanoff",
        choice4: "Jessica Jones",
        answer: 2
    },
    {
        question: "Which European city do Hawkeye and Black Widow often reminisce about?",
        choice1: "Paris",
        choice2: "Berlin",
        choice3: "Sokovia",
        choice4: "Budapest",
        answer: 3
    },
    {
        question: "Complete the quote: 'That's my secret, Cap. I'm always...'",
        choice1: "green",
        choice2: "mad",
        choice3: "angry",
        choice4: "ready",
        answer: 3
    },
    {
        question: "What is Captain America’s shield made out of?",
        choice1: "Meteorite",
        choice2: "Vibranium",
        choice3: "Carbon Fiber",
        choice4: "Graphene",
        answer: 2
    },
    {
        question: "In which film’s post-credit scene did Thanos first appear?",
        choice1: "Spiderman",
        choice2: "Ant Man",
        choice3: "Black Panther",
        choice4: "The Avengers",
        answer: 4
    },
    {
        question: "How many Infinity Stones are there?",
        choice1: "4",
        choice2: "5",
        choice3: "6",
        choice4: "7",
        answer: 3
    },
    {
        question: "Which beloved comic book writer cameoed in every Marvel film up to Avengers: Endgame?",
        choice1: "Stan Lee",
        choice2: "The Russo brothers",
        choice3: "Frank Miller",
        choice4: "Geoff Johns",
        answer: 1
    },
    {
        question: "Director Taika Waititi also plays which comedic Thor: Ragnarok character?",
        choice1: "Skurge",
        choice2: "Bob",
        choice3: "Miek",
        choice4: "Korg",
        answer: 4
    },
    {
        question: "Who was the first female superhero to appear in the title of an MCU film?",
        choice1: "Gamora",
        choice2: "Wasp",
        choice3: "Jessica Jones",
        choice4: "Black Widow",
        answer: 2
    },
    {
        question: "What name is Wolverine also known by?",
        choice1: "Logan",
        choice2: "Hogan",
        choice3: "Gogan",
        choice4: "Morgan",
        answer: 1
    },
    {
        question: "Who are the only two characters who appear in every Star Wars movie?",
        choice1: "Darth Vader and Luke",
        choice2: "Han Solo and Chewbacca",
        choice3: "C-3PO and R2-D2",
        choice4: "Obi-Wan and Leia",
        answer: 3
    },
    {
        question: "Who played Mace Windu?",
        choice1: "Samuel L. Jackson",
        choice2: "Liam Neeson",
        choice3: "Mark Hamill",
        choice4: "Hayden Cristensen",
        answer: 1
    },
    {
        question: "Who built C-3PO?",
        choice1: "Kylo Ren",
        choice2: "Anakin Skywalker",
        choice3: "Obi-Wan Kenobi",
        choice4: "Lando Calrissian",
        answer: 2
    },
    {
        question: "What species is Jabba?",
        choice1: "Wookie",
        choice2: "Hutt",
        choice3: "Ewok",
        choice4: "Chagrian",
        answer: 2
    },
    {
        question: "What kind of vehicle did Rey live in?",
        choice1: "AT-ST Walker",
        choice2: "AT-ACT Walker",
        choice3: "AT-TE Walker",
        choice4: "AT-AT Walker",
        answer: 4
    },
    {
        question: "Who composed the iconic Star Wars theme?",
        choice1: "Hans Zimmer",
        choice2: "Ennio Morricone",
        choice3: "John Williams",
        choice4: "James Horner",
        answer: 3
    },
    {
        question: "When was Star Wars: A new Hope (Episode IV) released?",
        choice1: "1976",
        choice2: "1977",
        choice3: "1978",
        choice4: "1979",
        answer: 2
    },
    {
        question: "How many Star Wars movies did Warwick Davis appeared in",
        choice1: "3",
        choice2: "4",
        choice3: "5",
        choice4: "6",
        answer: 3
    },
    {
        question: "How old was Yoda when he died?",
        choice1: "600",
        choice2: "340",
        choice3: "250",
        choice4: "900",
        answer: 4
    },
    {
        question: "What was the cause of Yoda's death?",
        choice1: "Old age",
        choice2: "Lightsaver",
        choice3: "Fell of speeder",
        choice4: "Shot by Stormtrooper",
        answer: 1
    }
];

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
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        //store scores inputed by user to access them on end page
        localStorage.setItem('mostRecentScore', score);
        //go to the end page
        return window.location.assign("/end.html")
    }

    //update the score dinamically as user answers questions
    questionCounter++;
    progressText.innerHTML =`Question ${questionCounter}/${MAX_QUESTIONS}`;
    //update and fill the progress bar
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS)*100}%`;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerHTML = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerHTML = currentQuestion['choice' + number];
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
        if(classToApply === 'correct') {
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

startQuiz();