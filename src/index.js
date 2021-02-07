import React from 'react';
import ReactDOM from 'react-dom';
import Dicer from './components/Dicer';
import WordnikApi from './utils/WordnikApi';
import QuizFactory from './utils/QuizFactory';

const numberOfQuestions = 10;
const apiKey = 'c23b746d074135dc9500c0a61300a3cb7647e53ec2b9b658e';
const wordnikApi = new WordnikApi(apiKey);
const quizFactory = new QuizFactory(wordnikApi);

quizFactory.createQuiz(numberOfQuestions)
  .then(quiz => {
    ReactDOM.render(
      <React.StrictMode>
        <Dicer quiz={quiz} />
      </React.StrictMode>,
      document.getElementById('root')
    );
  });
