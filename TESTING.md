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
2. [FAVICON TEST](#favicon-test)
3. [VALIDATOR CHECKS](#validator)
   - [HTML](#html-validator)
     - Index.html
     - Services.html
     - Contact.html
   - [CSS](#css-validator)
4. [LIGHTHOUSE TESTING](#lighthouse-testing)
   - Mobile
   - Web
5. [DEVICE RESPONSIVENESS](#device-responsiveness)
6. [BROWSER COMPATIBILITY](#browser-compatibility)
7. [BUGS](#bugs)
8. [KNOWN BUGS](#known-bugs)
9. [BACK TO README.md](README.md)

## USER STORIES TESTING

## VALIDATOR:

During the whole project, I continuously checked my code using [W3 Validator](https://validator.w3.org/#validate_by_uri) to make sure I fixed my code as I wrote it. At the end, I ran all the finished pages and made sure all the errors were fixed (see identified and fixed error list below).

As a css validator, I also used [w3 Validator](https://jigsaw.w3.org/css-validator/) to make sure it checked my style.css file to CSS level 3 + SVG standards.

(See passed validator results at the end of HTML and [CSS](#css-validator) sections.

### HTML VALIDATOR:

List of errors found by the validator to be fixed (after the first run):



bug --> footer middle of the page --> removed it, didnt need for quiz game

bug --> when selecting answers all answers would come out as incorrect
noticed i was using .answer to target answerss inside the function but in the questions array I had the right answer defined as correctAnswer