import React from 'react';
import Question from './Question';
import WordnikApi from './WordnikApi';

class Dicer extends React.Component {
  constructor() {
    super();
    this.wordnikApi = new WordnikApi();
    this.state = { questions: [] }
  }

  componentDidMount() {
    this.createQuiz(10)      
  }

  createQuiz(numberOfQuestions) {
    this.wordnikApi.getRandomWords(numberOfQuestions)
      .then(randomWords => {
        const definitionPromises = randomWords.map(randomWord => {
          return this.wordnikApi.getDefinition(randomWord.word);
        });

        Promise.all(definitionPromises).then(wordDefs => {
          const max = numberOfQuestions - 1, min = 0, first = 0, second = 1;
          const qs = [];
          for(let i = 0; i < wordDefs.length; i++) {
            let otherChoiceIndex = null;
            do {
              otherChoiceIndex = Math.round(Math.random() * (max - min) + min);
            } while (otherChoiceIndex === i)
      
            const otherChoice = wordDefs[otherChoiceIndex][0].text;
            const actualDefinitionPosition = Math.round(Math.random() * (max - min) + min);
            const actualDefinition = wordDefs[i][0].text;
      
            const word = wordDefs[i][0].word;
            let question = null;
            const number = i + 1;
            if (actualDefinitionPosition === first) {
              question = {
                number: number,
                word: word,
                answer: first,
                choices: [actualDefinition, otherChoice]
              }
            } else {
              question = {
                number: number,
                word: word,
                answer: second,
                choices: [otherChoice, actualDefinition]
              }
            }
            qs.push(question);
          }

          this.setState({ questions: qs })

          console.log(this.state.questions.length);
        });
      });
  }

  render() {
    console.log(this.state.questions.length);
    return (
      <div className="dicer">
        {this.state.questions.map(q => { return <Question number={q.number} word={q.word} answer={q.answer} choices={q.choices}/> })}
      </div>
    );
  }
}

export default Dicer;
