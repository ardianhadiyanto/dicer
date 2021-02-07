import React from 'react';
import Choice from './Choice';

class Question extends React.Component {
  render() {
    const number = this.props.number;
    const first = {id: 0, choice: this.props.choices[0]};
    const second = {id: 1, choice: this.props.choices[1]};

    return (
      <div className="question">
        {this.props.number}. {this.props.word}
        <Choice id={first.id} choice={first.choice} question={number}/>
        <Choice id={second.id} choice={second.choice} question={number}/>
      </div>
    );
  }
}

export default Question; 
