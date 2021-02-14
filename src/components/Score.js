import React from 'react';

class Score extends React.Component {
  render() {
    return <div>{this.props.score}/{this.props.total}</div>;
  }
}

export default Score;
