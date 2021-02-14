import React from 'react';
import SubmitButton from './SubmitButton'
import Question from './Question';
import Score from './Score';

class Dicer extends React.Component {
  constructor(props) {
    super(props);
    this.selectedAnswers = new Map();
    this.state = { correctAnswers: 0 };
    this.onQuestionAnswered = this.onQuestionAnswered.bind(this);
    this.submit = this.submit.bind(this);
  }

  onQuestionAnswered(number, selected) {
    this.selectedAnswers[number] = parseInt(selected);
  }

  submit() {
    let correctAnswers = 0;
    for(let i = 0; i < this.props.quiz.length; i++) {
      const answerIndex = i + 1;
      if (parseInt(this.selectedAnswers[answerIndex]) === parseInt(this.props.quiz[i].answer)) {
        correctAnswers++;
      }
    }
    this.setState({ correctAnswers: correctAnswers });
  }

  render() {
    const questions = this.props.quiz.map(question => { 
      const questionComponent = <Question 
        number={question.number} 
        word={question.word} 
        answer={question.answer} 
        choices={question.choices} 
        onQuestionAnswered={this.onQuestionAnswered}/>;

      return <li key={question.number}>{questionComponent}</li>;
    });

    return (
      <div>
        <ol className="dicer">
        {questions}
        </ol>
        <SubmitButton onSubmit={this.submit}/>
        <Score score={this.state.correctAnswers} total={questions.length}/>
      </div>
    );
  }
}

export default Dicer;
