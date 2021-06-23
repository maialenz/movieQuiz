# **TESTING DOCUMENT**

## **The Ultimate Movie Quiz**</center>
## Milestone 2 Project - Interactive User-Centric Frontend Development

### [View live project here](https://maialenz.github.io/movieQuiz/)

## OVERVIEW

This project was my first ever encounter with a programming language. As seeing from the wireframes and the commit history, I changed my mind a few times as I explored different options to tackle the javaScript side of the project.

Although I found the understanding of JavaScript confusing and difficult, the use of documentation and tutorias as well as the slack community (posts related to issues like mine), I managed to overcome the difficulties and make a responsive and interactive game.

From the very beginning I used Google Chrome Dev Tools to style and fix my code. I also installed LiveServer on the workspace to be able to see the changes and the console as I coded. This helped fix mistakes and error on real time as all the tool helped me see the results of my code on real time. 

Once finished, I tested my site on a two different phones, laptop, tablet and desktop as well as DevTools and different browsers manually.

## Table of Content

1. [USER STORIES](#user-stories-testing)
2. [VALIDATOR CHECKS](#validator)
   - [HTML](#html-validator)
     - Index.html
     - Game.html
     - End.html
   - [CSS](#css-validator)
     - style.css
     - game.css
     - highscore.css
   - [JSHint](#jshint-validator)
3. [LIGHTHOUSE TESTING](#lighthouse-testing)
   - Mobile
   - Desktop
4. [DEVICE RESPONSIVENESS](#device-responsiveness)
5. [BROWSER COMPATIBILITY](#browser-compatibility)
6. [BUGS](#bugs)
7. [KNOWN BUGS](#known-bugs)
8. [BACK TO README.md](README.md)

## USER STORIES TESTING

### **User stories**

- Be able to have the game rules available:
    - This is posible thanks to a large clickable button on the main page in the control panel. 
    ![screenshot of location of the button to open Modal containing game rules](docs/testing/user-stories/RulesModal-button.png)

    - The user can easily see and find the button and when clicked on it, the modal including the rules to the game opens over the homepage. 
    ![screenshot of the opened Rules Modal](docs/testing/user-stories/opened-modal.png)

    - The user will be able to close the Rules window two ways: 
        - the x to close situated on the top of the Modal window
        - A button to close the Modal with the text 'Understood' to hint the user to click over it (this button hovers to hint the user to click over it)
    ![screenshot of the two ways to close the Rules Modal highlighted on yellow](docs/testing/user-stories/close-modal.png)

- Be able to start the quiz by clicking a single button:
    - As the Game rules, the user can easily find the Start button at the bottom of the screen, just below the hero image. The text inside the button has been capitalized to catch the user's eye and the arrow icons make it more visible. The button glows in a darker color when hovered over.
    ![screenshot of the start again button on the homepage](docs/testing/user-stories/start-quiz.png)

    - If the user wants to retake the quiz once they have finished it without going back to the homepage, they can do it so by clicking over the Play again button. The button glows in a darker color when hovered over.
    ![screenshot of the play again button at the end of the quiz](docs/testing/user-stories/play-again-btn.png)

- Be able to choose my answer from a multiple choice answer to each question.
    - Each question has four options for the user to choose. They will be able to hover over the answers and in this release there is no timer so the user won't be preasured to make a choice
    ![screenshot of the multiple choice answers](docs/testing/user-stories/multiple-choice.png)

    - The question will load automatically once the user has answered the question
    - The answer chosen by the user will turn on red if the anwer to the question is incorrect. If the answer is correct, the answer will turn on green.
    ![screenshot of a wrong answer](docs/testing/user-stories/incorrect.png)
    ![screenshot of a correct asnwer](docs/testing/user-stories/corrects.png)

    - If the the loading of the fetched API questions take longer than usual, the user will be notified that the questions are loading with the representation of a loader
    ![screenshot of a wrong answer](docs/testing/user-stories/loader.png)

- See my score as I progress through the game:
    - The score count is situated on the top right, just above the question, so the user can easily identify the score count. 
    - To make it easy to understand, the score count has the word 'Score' on it.
    - When the user answers the question correctly, the score counter will increase by 10 points, the maximum possible of points being 100.
    ![screenshot of score counter](docs/testing/user-stories/score-counter.png)
    ![screenshot of maximum score](docs/testing/user-stories/max-score.png)

    - The user has the posibility to save the score by inputing their alias and clicking on 'Save'. The save button is disabled until the user starts typing on the input area. The top 5 highest scores will be saved on the High Score section. The user can see these by clicking on High Scores button on the main page.
    ![screenshot of save score input and button areas](docs/testing/user-stories/save-score.png)
    ![screenshot of stop scores](docs/testing/user-stories/top-score.png)
    ![screenshot of high score button on the homepage](docs/testing/user-stories/high-score-btn.png)

- Know which question I am currently on
    - The user can see the question they are currently answering on the top left corner, just above the question. 
    - To make it visually more appealing, the user can also see their progress on a progress bar. As the user answers questions, this bar will fill according to the amount of questions the user has answered.
    ![screenshot of the current question tracker and progress bar](docs/testing/user-stories/question-tracker.png)

- Get a feedback with the total score and the option to retake the quiz or go to the main menu.
    - The user can see their total as they are answering the questions. At the end of the quiz, they will be shown the total points they received from the correct answers.
    ![screenshot of the total score area](docs/testing/user-stories/total-score.png)
    - On the end page the user can decide if they want to retake the quiz again or they want to go back home. If the user clicks on Play again, the trivia will restart immediately. If the users clicks on Back Home, they will be taken back to the main page
    ![screenshot of the end control buttons](docs/testing/user-stories/end-controls.png)

---

## VALIDATOR:

During the whole project, I continuously checked my code using [W3 Validator](https://validator.w3.org/#validate_by_uri) to make sure I fixed my code as I wrote it. At the end, I ran all the finished pages and made sure all the errors were fixed (see identified and fixed error list below).

As a css validator, I also used [w3 Validator](https://jigsaw.w3.org/css-validator/) to make sure it checked my style.css file to CSS level 3 + SVG standards.

(See passed validator results at the end of HTML and [CSS](#css-validator) sections.

### HTML VALIDATOR:

INDEX.html:

- Line 125: : Element biggest not allowed as child of element li in this context.
    - Removed Biggest element from line 125

GAME.html: 
- Line 63 and 71: Error: Duplicate ID hud-item.
    - Changed the id attribute and changed it for a class

- Line 87: Warning: Empty h2 heading.
    - I added a header which will be populated the fetched question from the API

END.html: 
- Line 49: Error: Attribute classs not allowed on element div at this point.
    - Fixed class typing error.

- Line 52: Warning: Empty heading.
    - Placed some text which will replace by the js end function.

---

HTML VALIDATOR RESULTS

- [Index.html Validator result](docs/testing/validator/index.html-w3-pass.png)

- [Game.html Validator result](docs/testing/validator/game.html-w3-pass.png)

- [End.html Validator result](docs/testing/validator/end.html-w3-pass.png)

- [Highscore.html Validator result](docs/testing/validator/highscores.html-w3-pass.png)

---

### CSS VALIDATOR

Results for CSS validator check:

- [Style.css Validator result](docs/testing/validator/style-css-validator-pass.png)
- [Game.css Validator result](docs/testing/validator/game-css-validator-pass.png)
- [Highscores.css Validator result](docs/testing/validator/highscores-css-validator-pass.png)

---

### JSHINT

- [End.js JSHint Validator](docs/testing/validator/end-jshint-validator.png)
    - Due to the use of arrow syntax, jshint considers saveHighScore funtion a variable. This is a function.
    - Removed unused variable MAX_HIGH_SCORES
    - Line 43: "Did you mean to return a conditional instead of an assignment?"
        - As this piece of code was not written by me and was introduced to fix an issue on the paths between github and gitpod, I decided to leave this warning untouched.

- [game.js JSHint Validator](docs/testing/validator/game-jshint-validator.png)
    - Line 93:  "Did you mean to return a conditional instead of an assignment?"
        - As this piece of code was not written by me and was introduced to fix an issue on the paths between github and gitpod, I decided to leave this warning unchanged.
    - Due to the use of arrow syntax, jshint considers startQuiz, getNewQuestion and incrementScore funtions variables. This functions are called using the arrow syntax. The repetition on the warnings is because JSHint has considered the callback functions variables too.

- [Highscores.js JSHint Validator](docs/testing/validator/highscore-jshint-validator.png)
    - No warning were found on this file

---

## LIGHTHOUSE TESTING

Using DevTool's Lighthouse tool, I checked all pages on mobile and desktop to make sure the scores were as high as I posibly could. Below can be found the results and scores the tests tests

(All tests were carried out the same way: I cleared cache data, opened new incognito page (Chrome and Edge), and reloaded and tested each page twice. Same procedure was used for mobile and web assessment)

Due to the simplicity of the game, the results of the lighthouse testing have come back very strong. Since there is very few heavy files, the site loads very fast and with no major issues, both on mobile and desktop, increasing like this the UX.

- **Mobile**

  - [Index.html Lighthouse test:](docs/testing/lighthouse/lighthouse-index-mobile.png)
  - [Game.html Lighthouse test:](docs/testing/lighthouse/lighthouse-game-mobile.png)
  - [End.html Lighthouse test:](docs/testing/lighthouse/lighthouse-end-mobile.png)
  - [Highscores.html Lighthouse test:](docs/testing/lighthouse/lighthouse-highscores-mobile.png)

- **Desktop**

  - [Index.html Lighthouse test:](docs/testing/lighthouse/lighthouse-index-desktop.png)
  - [Game.html Lighthouse test:](docs/testing/lighthouse/lighthouse-game-desktop.png)
  - [End.html Lighthouse test:](docs/testing/lighthouse/lighthouse-end-desktop.png)
  - [Highscores.html Lighthouse test:](docs/testing/lighthouse/lighthouse-highscores-desktop.png)






bug --> when selecting answers all answers would come out as incorrect
noticed i was using .answer to target answerss inside the function but in the questions array I had the right answer defined as correctAnswer