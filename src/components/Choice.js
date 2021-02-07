import React from 'react';

class Choice extends React.Component {
  render() {
    return (
      <div className="choice">
        <input type="radio" value={this.props.choice} name={this.props.question}/>{this.props.choice}
      </div>
    );
  }
}

export default Choice;
