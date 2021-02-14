import React from 'react';
import Choice from './Choice';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.selectedChoice = { selectedChoice: null };
  }

  updateSelectedChoice = (choice) => {
    this.setState({ selectedChoice: choice });
    this.props.onQuestionAnswered(this.props.number, choice);
  }

  render() {
    const number = this.props.number;
    const first =  this.props.choices[0];
    const second = this.props.choices[1];

    return (
      <div className="question">
        {this.props.word}
        <Choice id="0" choice={first} question={number} onSelected={this.updateSelectedChoice}/>
        <Choice id="1" choice={second} question={number} onSelected={this.updateSelectedChoice}/>
      </div>
    );
  }
}

export default Question; 
