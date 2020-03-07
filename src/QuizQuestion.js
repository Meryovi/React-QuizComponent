import React, {Component} from 'react'
import QuizQuestionButton from './QuizQuestionButton'

class QuizQuestion extends Component {
    handleClick(buttonText) {
        if (buttonText === this.props.quiz_question.answer) {
            this.props.showNextQuestionHandler();
        }
    }
    render() {
        const question = this.props.quiz_question;
        return (
            <main>
                <section>
                    <p>{question.instruction_text}</p>
                </section>
                <section className="buttons">
                    <ul>
                        {question.answer_options.map((answer_option, index) => 
                            <QuizQuestionButton
                                key={index}
                                clickHandler={this.handleClick.bind(this)}
                                button_text={answer_option} />
                        )}
                    </ul>
                </section>
            </main>
        );
    }
}

export default QuizQuestion;