# **The Ultimate Movie Quiz**</center>

## Milestone 2 Project - Interactive User-Centric Frontend Development

### [View live project here](https://maialenz.github.io/movieQuiz/)

![Image of the mockup of the live website](docs/testing/Mockup.png)

## Overview

This website is an entertaining quiz game for those who want to have fun testing their general knowledge about classic and new movies, by answering a series of questions and trying to beat their own scores.

The website will be responsive and accessible on all devices The website will be visually enjoyable and interactive. It will be aimed for people who want to have some fun and learn something new while playing.

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

8. [REFERENCES](REFERENCES.md)

9. [ACKNOWLEDGEMENTS](#acknowledgements)

## UX

### **User stories**

- As a user I want to:

    - Be able to have the game rules available.
    - Be able to choose a theme.
    - Be able to start the quiz by clicking a single button.
    - Be able to choose my answer from a multiple choise answer to each question.
    - See my score as I progress through the game
    - Know which question I am currently on
    - Get a feedback with the total score and the option to retake the quiz or choose a new theme.

### **Game goals**

This is a simple "trivia" game to test the general knowledge about movies and some fun facts about the industry. The player needs to choose one answer from the given multiple choice. If the answer is right, the user will get a score added in the score bar. If the answer is incorrect, the user won't be able to change the answer and there won't be any points added.

Once the player has chosen the answer, press Next to continue to the following question. At the end of the game, all the correct answers will be added and the player will get the result.

This quiz has been created for entertaiment purposes.

---

## USER CENTERED DESIGN

### **Strategy Plane**

- #### User needs

There’s something satisfying about being able to recall and guess correctly and test the knowledge and test ourselves. This is why quizzes in general are so popular.

By answering the questions, the user will be able to find entertainment and enjoyment by answering questions about movies and by doing so, learn some facts that they did not know before.


- #### Technical capabilities

  - To use this site the user needs to have access to some internet connection within their chosen device.

  - They also need to have basic understanding on how to select and navigate the page.

  - This page can be done with Bootstrap framework to create a structure and implement sections that the user needs. The quiz will be kept separated in 3 different themes but easyly accessible from the homepage.

---

### **Scope plane | Trade-offs**

- **Features within the design plan with highest priority:**

  - Appealing homepage 
  - Ability to choose a theme
  - Following [Bootstrap](https://getbootstrap.com/) grid system with the layout of the site being mainly in thirds and halfs (col-6 col-4).
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

- The structure of the site will be layed out in four pages.The landing page (homepage) with the themes separated in three clickable images. By clicking on a theme user will be redirected to a page with the respective questions shown as well as an image representing each question.

- Depending on the device, the image representing the question will be on the left side of the question and answers, or on the top of each question. 

- A button representing the link to the next question will be available under each question. There won't be a previous button as the user won't be able to change the score.

- The time and score count will be represented at the bottom of the page (above the footer).

- To ensure the users experience when completing the quiz the end page will show the final score and time required to finish the quiz, as well as two buttons allowing the user to go back to the main page or retake the same quiz.

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

>* **(THIS will CHANGE DURING THE PROJECT!! these are old colors from previous projects!!)**

- #a0e0ca: for button background when hovered.
- #ffffff: for some section backgrounds.
- rgba(170, 213, 222, 0.5): for header backgrounds and feedback article background.
- #e9ecefab: as about us information background
- #373d3f: as main typography color.

---

### **Typography**

The fonts used for the site were taken from [Google Fonts](https://fonts.google.com/). To make sure the questions are represented on a fun way but easy to read, it was decided to use simple but and consistent fonts previously used in other projects within Code Institute like:

- "Montserrat alternates" 
- "Quicksand"

---
### **Imagery**

- The imagery will be very important on the site, as it's a way to give a little hint about the respective question to the user.

- Each theme will have imagery related to it's theme, so the user knows which theme is playing.

- The website will try keep a balance between aesthetic style and fun without overwhelming the user and slowing the loading time of the page.

---
### **Logo**

- The favicon was created using [Favicon.io](https://favicon.io/favicon-converter/) and the logo used to create it was created using an online application called [Canva](https://www.canva.com/). It represents a clapperboard nodding the film industry and the main subject of the game. The use of the favicon makes it easier to recognize the game tab in between others that the user might have opened.

Paint. It  was designed to represent the film industry and easily recogniseable by users as a movie orientated game.

---

## FEATURES

### Existing Features

- The site will consist of a single page divided on three big sections which will work as three page: based on the user selection, the application will show the respective section. The site will be responsive for most screen sizes. 

- **Header:** 

  - Navbar:
    - It'll include a link to the main page in the site. The link will increase on size when hovered over it.
    - Change of color and size on the links when hovered over the buttons

- **Body:** 

  - Home section:
    - An area to introduce the user to the game
    - An area with three clickable images, each linking to their respective theme quiz. 
    - Under each image there will be a 'Start' button to hint the user to click on it to Start the quiz.

  - Quiz section: will be the same in all three themes. There will be 3 to 10 questions on display. Only the question and the imagery will change.
    - The section will be divided in two. One part will have the picture of the movie related to the question, and another part with the question and a multiple choice answers.
    - An at the bottom showing the score count (correct answers and incorrect answers).
  - Feedback section:
    - An with the score summary, as well as a sentence with some feedback to the user.
    - Two call to action buttons with color changing hover feature allowing the user to return to the main page or to retake the same quiz .

- **Footer:** it will be repeated in all the pages for consistency and good user experience
  - Contact details: creator's email

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

