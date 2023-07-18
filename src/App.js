import React, { useState } from 'react'

const data = [
  {
    question: 'Which movie won the Academy Award for Best Picture in 2020?',
    options: ['Parasite', 'Joker', '1917', 'Once Upon a Time in Hollywood'],
    answer: 'Parasite',
    image: 'academy.jpg',
  },
  {
    question: "Who directed the movie 'The Shawshank Redemption'?",
    options: [
      'Christopher Nolan',
      'Martin Scorsese',
      'Frank Darabont',
      'Steven Spielberg',
    ],
    answer: 'Frank Darabont',
    image: 'shawshank.jpg',
  },
  {
    question: 'Which movie features the character Tony Stark?',
    options: [
      'The Dark Knight',
      'Iron Man',
      'Spider-Man: Homecoming',
      'The Avengers',
    ],
    answer: 'Iron Man',
    image: 'tony.jpg',
  },

  {
    question: "Who played the role of Neo in the movie 'The Matrix'?",
    options: ['Tom Cruise', 'Leonardo DiCaprio', 'Brad Pitt', 'Keanu Reeves'],
    answer: 'Keanu Reeves',
    image: 'matrix.jpg',
  },
  {
    question: 'Which movie won the Academy Award for Best Picture in 2019?',
    options: ['Green Book', 'Bohemian Rhapsody', 'Black Panther', 'Roma'],
    answer: 'Green Book',
    image: 'academy.jpg',
  },
  {
    question: "Who directed the movie 'Pulp Fiction'?",
    options: [
      'Martin Scorsese',
      'Christopher Nolan',
      'Steven Spielberg',
      'Quentin Tarantino',
    ],
    answer: 'Quentin Tarantino',
    image: 'pulpfiction.jpg',
  },
  {
    question: 'Which movie features the character Darth Vader?',
    options: [
      "Harry Potter and the Sorcerer's Stone",
      'Star Wars',
      'The Lord of the Rings: The Fellowship of the Ring',
      'The Godfather',
    ],
    answer: 'Star Wars',
    image: 'darth.jpg',
  },
]

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [score, setScore] = useState(0)
  const [selectedOption, setSelectedOption] = useState(null)

  const handleAnswerOptionClick = (answer) => {
    if (answer === data[currentQuestion].answer) {
      setScore(score + 1)
      setSelectedOption(answer)
    } else {
      setSelectedOption(answer)
    }

    const nextQuestion = currentQuestion + 1
    if (nextQuestion < data.length) {
      setTimeout(() => {
        setCurrentQuestion(nextQuestion)
        setSelectedOption(null)
      }, 1000) // Delay transitioning to the next question
    } else {
      setShowScore(true)
    }
  }

  return (
    <div className="container">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {data.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div id="question-count">
              Question {currentQuestion + 1}/{data.length}
            </div>
            <div id="question-text">{data[currentQuestion].question}</div>
            <img
              src={`/images/${data[currentQuestion].image}`}
              alt="Question"
              className="question-image"
              height={400}
              width={400}
            />
          </div>
          <div className="answer-section">
            {data[currentQuestion].options.map((option, index) => {
              let btnClass = 'answer-btn'
              if (selectedOption !== null) {
                if (option === data[currentQuestion].answer) {
                  btnClass += ' correct'
                } else if (option === selectedOption) {
                  btnClass += ' incorrect'
                }
              }
              return (
                <button
                  key={index}
                  className={btnClass}
                  onClick={() => handleAnswerOptionClick(option)}
                >
                  {option}
                </button>
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}

export default App
