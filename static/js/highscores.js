let highScoresList = document.getElementById("highScoresList");
let highScores = JSON.parse(localStorage.getItem("highScores")) || [];

/**
 * targets the highScoresList on the html and changes it's inner HTML by a template literals to be able
 * to display a list with the name and score saved on the end.js.
 * Everytime a user inputs their name it creates a new list and displays it at the bottom of the previous one
 */

highScoresList.innerHTML = highScores
    .map(score => {
        return `<li class="high-score">${score.name} - ${score.score}</li>`;
    })
    .join("");