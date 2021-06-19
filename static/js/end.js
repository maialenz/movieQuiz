const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScore');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

finalScore.innerHTML = mostRecentScore;
//funtion to disable the Save button until the user starts typing
username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
})

saveHighScore = (e) => {
    e.preventDefault();
}