const axios = require('axios');

class WordnikApi {
  constructor(apiKey) {
    this.baseUrl = 'https://api.wordnik.com/v4';
    this.apiKey = apiKey;
    // this.apiKey = 't9jh764sbypq25u8cvonu0rd4rhxycw3dxr8ngzbgm1qmtog7';
  }

  async getRandomWords(limit) {
    const url = `${this.baseUrl}/words.json/randomWords?hasDictionaryDef=true&limit=${limit}&api_key=${this.apiKey}`;
    let randomWordsResponse; 

    try {
      const response = await axios.get(url);
      randomWordsResponse = response.data;
    } catch (error) {
      console.error(error);
    }

    return randomWordsResponse.map(response => {
      return response.word;
    });
  }

  async getDefinition(word) {
    const url = `${this.baseUrl}/word.json/${word}/definitions?limit=1&api_key=${this.apiKey}`;
    let definition = '';

    try {
      const response = await axios.get(url);
      definition = response.data[0].text;
    } catch (error) {
      console.error(error);
    }

    return definition;
  }
}

export default WordnikApi;
