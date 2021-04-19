import './style.css'
import questions from './data/questions'
import { useState } from 'react'
import { shuffle, values } from 'lodash'
import { Field, Form, Formik } from 'formik'
import QuizQuestion from './components/QuizQuestion'

let q = questions.results.map((question) => {
  return {
    ...question,
    choices: shuffle([...question.incorrect_answers, question.correct_answer]),
  }
})

console.log(q)

function App() {
  const [page, setPage] = useState(0)

  let question = q[page]

  return (
    <div className="main">
      <div className="quiz">
        <h3>
          Question {page + 1} of {q.length}:
        </h3>

        {/* <span>
          {question.type === 'boolean'
            ? 'Choose whether true or false'
            : 'Choose the correct answers.'}
        </span> */}

        <QuizQuestion question={question} />
        {page === q.length - 1 ? (
          <button>Finish</button>
        ) : (
          <button onClick={() => setPage(page + 1)}>Next</button>
        )}
      </div>
    </div>
  )
}

export default App
