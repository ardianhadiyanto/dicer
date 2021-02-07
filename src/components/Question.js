import React from 'react';
import Choice from './Choice';

class Question extends React.Component {
  render() {
    const number = this.props.number;
    const first =  this.props.choices[0];
    const second = this.props.choices[1];

    return (
      <div className="question">
        {this.props.number}. {this.props.word}
        <Choice choice={first} question={number}/>
        <Choice choice={second} question={number}/>
      </div>
    );
  }
}

export default Question; 
