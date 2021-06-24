let username = document.getElementById('username');
let saveScoreBtn = document.getElementById('saveScore');
let finalScore = document.getElementById('finalScore');
let mostRecentScore = localStorage.getItem('mostRecentScore');

let highScores = JSON.parse(localStorage.getItem('highScores')) || [];


finalScore.innerText = mostRecentScore;

//funtion to disable the Save button until the user starts typing
username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

/**
 * function to save the high score when the onclick event is triggered on the end page
 * it prevents a reload by default
 * stores the key value pairs on variable. 
 * It sorts the scores from highest to lowest and if there is a new input with a higher score
 * than the saved one, remove the old score from the array with the splice.
 * stringigy the json data and store it on local storage
 */
saveHighScore = (e) => {
    e.preventDefault();

    let score = {
        score: mostRecentScore,
        name: username.value,
    };
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    // code written based on the code written by Sean from tutor support to help fix URL issue
    let url = window.location.protocol + "//" + window.location.host + "/";
    if (window.location.href.includes('github')) url += 'movieQuiz/highscores.html';
    else url += 'highscores.html';
    return window.location.href = url;
};