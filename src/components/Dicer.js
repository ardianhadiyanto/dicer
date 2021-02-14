import React from 'react';
import SubmitButton from './SubmitButton'
import Question from './Question';

class Dicer extends React.Component {
  constructor(props) {
    super(props);
    this.selectedAnswers = new Map();
    this.onQuestionAnswered = this.onQuestionAnswered.bind(this);
    this.submit = this.submit.bind(this);
  }

  onQuestionAnswered(number, selected) {
    this.selectedAnswers[number] = selected;
  }

  submit() {
    let correctAnswers = 0;
    // alert(this.props.quiz.length);
    for(let i = 0; i < this.props.quiz.length; i++) {
      // alert(`selected answer: ${this.selectedAnswers[i]} correct answer: ${this.props.quiz[i].answer}`);
      if (this.selectedAnswers[i] == this.props.quiz[i].answer) {
        // alert('yeiyy');
        correctAnswers++;
      }
    }
    alert(correctAnswers);
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
      </div>
    );
  }
}

export default Dicer;
