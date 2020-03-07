import React from 'react'

const QuizQuestion = ({question}) => {
    return (
      <main>
        <section>
          <p>{question.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
            <li>{question.answer_options[0]}</li>
          </ul>
        </section>
      </main>
    );
};

export default QuizQuestion;