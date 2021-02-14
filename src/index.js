import React from 'react';
import ReactDOM from 'react-dom';
import Dicer from './components/Dicer';
import WordnikApi from './utils/WordnikApi';
import QuizFactory from './utils/QuizFactory';

const numberOfQuestions = 10;
const apiKey = 'api-key';
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
