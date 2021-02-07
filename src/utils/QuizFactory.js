class QuizFactory {
  constructor(wordnikApi) {
    this.wordnikApi = wordnikApi;
  }

  async createQuiz(numberOfWords) {
    const randomWords = await this.wordnikApi.getRandomWords(numberOfWords);

    const wordDefinitions = [];
    for (let i = 0; i < randomWords.length; i++) {
      console.log(randomWords[i]);
      const definition = await this.wordnikApi.getDefinition(randomWords[i]);
      wordDefinitions.push({ word: randomWords[i], definition: definition });
    }
    
    const quiz = [];
    for(let i = 0; i < wordDefinitions.length; i++) {
      const answerChoices = this.createChoices(wordDefinitions, i);
      const question = {
        number: i + 1,
        word: wordDefinitions[i].word,
        answer: answerChoices.answer,
        choices: answerChoices.choices
      };
    
      quiz.push(question);
    }

    return quiz;
  }

  createChoices(source, exclude) {
    let otherChoiceIndex;
    do {
      const max = source.length - 1;
      const min = 0;
      otherChoiceIndex = Math.round(Math.random() * (max - min) + min);
    } while (otherChoiceIndex === exclude)

    const otherDefinition = source[otherChoiceIndex].definition;
    const correctDefinitionIndex = Math.round(Math.random() * (1 - 0) + 0);
    const correctDefinition = source[exclude].definition;

    let choices;
    if (correctDefinitionIndex === 0) {
      choices = [correctDefinition, otherDefinition];
    } else {
      choices = [otherDefinition, correctDefinition];
    }

    return { answer: correctDefinitionIndex, choices: choices };
  }
}

export default QuizFactory;
