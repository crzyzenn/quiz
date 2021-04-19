import { Field, Form, Formik } from 'formik'
import React from 'react'

const QuizQuestion = ({ question }) => {
  return (
    <div className="qa-container">
      <p className="question">{question.question}</p>
      <div className="options">
        <Formik
          initialValues={{ answer: '' }}
          onSubmit={({ answer }) => {
            alert(
              answer === question.correct_answer ? 'Correct!' : 'Incorrect!'
            )
          }}
        >
          {({ values }) => (
            <Form>
              {question.choices.map((choice, id) => (
                <div key={id}>
                  <label>
                    <Field type="radio" name="answer" value={choice} />
                    {choice}
                  </label>
                </div>
              ))}

              <button type="submit">Check</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default QuizQuestion
