# Movie Quiz

Welcome to the Movie Quiz! Test your knowledge of movies with this interactive quiz application. This project is built using React and allows users to answer multiple-choice questions about movies. It provides immediate feedback on the correctness of the answers and displays the final score at the end of the quiz.

## Features

- Multiple-choice questions about movies
- Dynamically loaded questions and options from the `data` array
- Immediate feedback on correct and incorrect answers
- Score tracking throughout the quiz
- Display of the final score at the end of the quiz
- Support for adding images to each question
- Visual indication of correct and incorrect answers
- Responsive design for optimal viewing on different devices

## How to Run the Application

1. Clone this repository to your local machine.
2. Navigate to the project directory using the terminal or command prompt.
3. Run `npm install` to install the project dependencies.
4. Run `npm start` to start the development server.
5. Open your web browser and visit `http://localhost:3000` to view the Movie Quiz.

## Customizing the Quiz

- To add more questions to the quiz, update the `quizData` array in the `App.js` file. Each question should have a `question` string, an `options` array, an `answer` string, and an optional `image` string for the associated image file name.
- You can place the corresponding images in the `public/images` folder of the project.
- Modify the CSS styles in the `styles.css` file to customize the appearance of the quiz.

Testing

I tested that thos page works in different browsers (Chrome, Firefox, Safari)
I tested the project in different devices (Mobile + desktop)
I tested that the navigation to different section works perfectly

Bugs

I had a problem getting my css wo work
I realised i had linked it as "styles.css" and my file is called "style.css"
By changing it to style it worked
Validator Testing

HTML - No errors returned when passing through the official W3C validator

CSS - No errors were found when passing through the official (jigsaw) validator

Javascript - No errors were found when passing through JSHint JavaScript Validator

Accessibility - I confirmed that the colors and fonts that are chosen are easy to read and accessible ny running it through lighthouse in devtools