import React, {Component} from 'react'
import QuizQuestionButton from './QuizQuestionButton'

class QuizQuestion extends Component {
    render() {
        const question = this.props.quiz_question;
        return (
            <main>
                <section>
                    <p>{question.instruction_text}</p>
                </section>
                <section className="buttons">
                    <ul>
                        <QuizQuestionButton button_text={question.answer_options[0]} />
                    </ul>
                </section>
            </main>
        );
    }
}

export default QuizQuestion;