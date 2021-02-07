import React from 'react';
import Question from './Question';

class Dicer extends React.Component {
  render() {
    return (
      <div className="dicer">
        {this.props.quiz.map(q => { return <Question number={q.number} word={q.word} answer={q.answer} choices={q.choices}/> })}
      </div>
    );
  }
}

export default Dicer;
