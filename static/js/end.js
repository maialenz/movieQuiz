const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScore');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const MAX_HIGH_SCORES = 5;

finalScore.innerHTML = mostRecentScore;

//funtion to disable the Save button until the user starts typing
username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
})

saveHighScore = (e) => {
    e.preventDefault();

    const score = {
        score: Math.floor(Math.random() * 100),
        name: username.value
    };

    //sort high scores from highest to lowest and
    //at index 5 remove everything else from the array

    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(5);

    //update local storage
    localStorage.setItem('highScores', JSON.stringify(highScore));
    window.location.assign('/');

};