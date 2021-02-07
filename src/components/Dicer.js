import React from 'react';
import Question from './Question';

class Dicer extends React.Component {
  render() {
    const questions = this.props.quiz.map(question => { 
      const questionComponent = <Question number={question.number} word={question.word} answer={question.answer} choices={question.choices}/>
      return <li key={question.number}>{questionComponent}</li>
    });

    return (
      <ol className="dicer">
        {questions}
      </ol>
    );
  }
}

export default Dicer;
