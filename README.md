# **The Ultimate Movie Quiz**</center>

## Milestone 2 Project - Interactive User-Centric Frontend Development

### [View live project here](https://maialenz.github.io/movieQuiz/)

![Image of the mockup of the live website](docs/testing/Mockup.png)

## Overview

This website is an entertaining quiz game for those who want to have fun testing their general knowledge about the film industry, by answering a series of questions and trying to beat their own scores.

The website will be responsive and accessible on all devices, but it's optimized to be played on a medium/large screen. The website will be visually minimal to focus on the questions and interactive. It will be aimed for people who want to have some fun and learn something new while playing.

---

## Table of Contents

1. [UX](#ux)

- [User Stories](#user-stories)
- [Game goals](#game-goals)
- [User Centered Design](#user-centered-design)
  - [Strategy plane](#strategy-plane)
    - [User needs](#user-needs)
    - [Technical capabilities](#technical-capabilities)
  - [Scope plane](#scope-plane-|-trade-offs)
  - [Structure plane](#structure-plane)
  - [Skeleton plane](#Skeleton-plane)

2. [DESIGN](#design)

- [Color scheme](#color-scheme)
- [Typography](#typography)
- [Imagery](#imagery)
- [Logo](#logo)

3. [FEATURES](#features)

- [Existing Features](#existing-features)
- [Features left to implement](#features-left-to-implement)

4. [TECHNOLOGIES USED](#technologies-used)

- [Syntax](#syntax)
- [Frameworks, Libraries & Programs](#frameworks-libraries-&-programs)

5. [TESTING](#testing)

- [Testing document](TESTING.md)

6. [DEPLOYMENT](#deployment)

- [GitHub Pages](#github-pages)
- [Forking the repository](#forking-the-GitHub-repository)
- [Making a local clone](#making-a-local-clone)

7. [CREDITS](#credits)

8. [REFERENCES](#references)

9. [ACKNOWLEDGEMENTS](#acknowledgements)

## UX

### **User stories**

- As a user I want to:

    - Be able to have the game rules available.
    - Be able to start the quiz by clicking a single button.
    - Be able to choose my answer from a multiple choise answer to each question.
    - See my score as I progress through the game
    - Know which question I am currently on
    - Get a feedback with the total score and the option to retake the quiz or go to the main menu.

### **Game goals**

This is a simple "trivia" game to test the general knowledge about movies and some facts about the industry. The player needs to choose one answer from the given multiple choice. If the answer is right, the user will get a score added in the score bar. If the answer is incorrect, the user won't be able to change the answer and there won't be any points added. The user won't be able to see the right answer as this will give them the choice to retake the quiz and beat their top 5 highest scores. 

Once the player has pressed on the chosen answer, they'll have a second to see if their result is correct or incorrect, and the next question will load automatically. At the end of the game, all the correct answers will be added and the player will get the total result.

This quiz has been created for entertaiment purposes using a public [Trivia API](https://opentdb.com/).

---

## USER CENTERED DESIGN

### **Strategy Plane**

- #### User needs

There’s something satisfying about being able to recall and guess correctly and test the knowledge and test ourselves. This is why quizzes in general are so popular.

By answering the questions, the user will be able to find entertainment and enjoyment by answering questions about movies and by doing so, learn some facts that they did not know before.


- #### Technical capabilities

  - To use this site the user needs to have access to some internet connection within their chosen device.

  - They also need to have basic understanding on how to select and navigate the page.

  - This page can be done with Bootstrap framework to create a structure and implement sections that the user needs. The quiz will be kept separated in 3 main sections (homepage, game and end) but easyly accessible from the homepage. The High scores ranking will be accessible from the main page and the user will input their username on the last page once the quiz ends.

---

### **Scope plane | Trade-offs**

- **Features within the design plan with highest priority:**

  - Minimal but appealing homepage 
  - Start button easily accessible from
  - Instructions for the user on how to play the game
  - Tracker for the questions and score
  - Final page with the final result


- **Lower priority features that may not be included in the initial release of the website:**

  - Responsive navigation bar.
  - Countdown timer for the questions
  - Different levels of difficulty.
  - To give the feedback with the correct answer in the answer is incorrect
  - Populate questions by using a trivia API.

---
### Structure Plane

- The structure of the site will be layed out in four pages.The landing page (homepage) and three clickable buttons (Start Quiz, High Scores and Instructions).

- The Start Quiz will retrieve questions from an API and it's set to easy so the user can enjoy answering the questions without the added difficulty.

- If the questions take longer to load, the user will be presented with a loader as a sign that something is happening

- 

- The score count will be represented at the top of the page (above the footer).

- To ensure the users experience when completing the quiz the end page will show the final score, as well as two buttons allowing the user to go back to the main page or retake the same quiz.

- The footer will contain all the inportant some information about the creator of the quiz.

---

### Skeleton Plane

- [Mobile Wireframe](docs/wireframes/Mobile.png)
- [Ipad Wireframe](docs/wireframes/Ipad.png)
- [Desktop Wireframe](docs/wireframes/Desktop.png)

## DESIGN

The design of the quiz was created to be as simple but pretty as posible, not to distract the customer with too many color schemes and trying to bring the focus to the picture related to the question.

### **Colors**

The colors used in this project are very simple, to keep a minimalistic and tidy quiz, as well as keeping the color contrasts the highests posible to facilitate the screen readers and make this quiz accessible to all.

The colors chosen are combinations of: pale/light blue and green, white and shades of grey. The color were found using
[Coolors](https://coolors.co/)

Some of the colors used in this project are: 

- rgb(87, 15, 55): this color was used as the main color, but I've added opacity to make different shades of it.
- rgba(173, 169, 183, 0.7): used as a background color.
- #fff: used as button background color.
- rgb(181, 228, 140) for correct answers.
- rgb(229, 56, 59) for incorrect answers.

---

### **Typography**

The fonts used for the site were taken from [Google Fonts](https://fonts.google.com/). To make sure the questions are represented on a fun way but easy to read, it was decided to use simple but and consistent fonts previously used in other projects within Code Institute like:

- "Montserrat alternates" 
- "Quicksand"

---
### **Imagery**


- The website will try keep a balance between aesthetic style and fun without overwhelming the user and slowing the loading time of the page, so it was decided to only include one image at the beginning of the site (homepage) as a welcome to the user and introduction to the theme of the trivia/quiz.

- I thought that any other images (end page and highscore page) where out of place, as the user would only want to see the important part: their score and end results.

- Althought in the beginning I wanted to include an image for every question I created, as I decided to use an API instead of the hard coded questions, this wasn't a priority for this release, so I decided to leave this for future releases.

---
### **Logo**

- The favicon was created using [Favicon.io](https://favicon.io/favicon-converter/) and the logo used to create it was created using an online application called [Canva](https://www.canva.com/). It represents a clapperboard nodding the film industry and the main subject of the game. The use of the favicon makes it easier to recognize the game tab in between others that the user might have had already opened.

- The logo's design represents the film industry and is easily recogniseable by users as a movie orientated game.


---

## FEATURES

### Existing Features

- The site will consist of four pages: homepage, the game page, the end page and the highscores page. Based on the user selection, the application will show the respective page. The site will be responsive for most screen sizes, but it's best enjoyed on medium screens.

- **Homepage:** 

  - Logo
  - Header: An area to introduce the user to the game
  - Image: to set the theme of the quiz visually
  - Controls Section: under the hero image there will be a section highlighted on another darker color with lighter buttons to point the user to the contol section:
    - Start the game Button: 'Start' button to hint the user to click on it to Start the quiz
    - High Score Button: a button directing the user to the top 5 scores page which are saved on the end page.
    - A modal button which contains the instructions of the game.

- **Game:** 

  - A section above the displayed question with two areas: the area on the left counts the current question with a progress bar to make the counter more appealing and easier to visually see it. The area on the right display the added score when the user answers the question correctly. 
  - There will be 10 questions on display.
  - The user will be given 4 multiple choice answers. The user has to click on the answer. The answer will turn red or green depending if the answer is correct or incorrect. The user won't be able to see right answer if the choice is incorrect, as the intention is to be able to retake the quiz and try to beat their own score,
  - The question will automatically load a second after the user has made the selection, so there will not be any buttons for the user to jump into the next question manually. This is to make the user's experience nicer, by clicking less.
    
- **End:** This will be the feedback page.
    - There will be a section with the score summary, which will be updated as the user answers correct questions. As each question is 10 points the maximum amount of points the user can get is 100 points.
    - The save button will be disabled until the user starts typing on the input area. When the input is filled the save button will be active.
    - Under the score there will be a input gap whith username as a placeholder where the user will be able to input their name and save it. The top 5 saved scores will be shown on the Highscore page accessible from a button placed on the homepage
    - Two call to action buttons with color changing hover feature allowing the user to return to the main page or to retake the same quiz .

 
---

### Features left to implement

- The posibility of choosing different difficulty: in the first release, there won't be any option to select the difficulty and complexity of the questions, but in a future release there would be three different options for the user to select (easy, medium, hard)

- A countdown timer:

- An API 
---

## TECHNOLOGIES USED

### Syntax

- HTML5:
  - HTML5 is a markup language used for structuring and presenting content on the internet.
- CSS:
  - Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML
- Markdown (for README.md, REFERENCES.md and TESTING.md)
- JavaScript:

## REFERENCESS

https://www.developerdrive.com/html5-javascript-gem-game-with-saved-scoreboard/