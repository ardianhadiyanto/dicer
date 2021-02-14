import React from 'react';

class Choice extends React.Component {
  handleSelect = (e) => {
    this.props.onSelected(this.props.id);
  }

  render() {
    return (
      <div>
        <input className="choice" 
          type="radio" 
          id={this.props.id} 
          value={this.props.choice} 
          name={this.props.question} 
          onClick={this.handleSelect}
        />{this.props.choice}
      </div>
    );
  }
}

export default Choice;
