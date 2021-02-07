const axios = require('axios');

class WordnikApi {
  constructor() {
    this.baseUrl = 'https://api.wordnik.com/v4';
    this.apiKey = 'c23b746d074135dc9500c0a61300a3cb7647e53ec2b9b658e'; // used by wordnik
    // this.apiKey = 't9jh764sbypq25u8cvonu0rd4rhxycw3dxr8ngzbgm1qmtog7';
  }

  async getRandomWords(limit) {
    const url = `${this.baseUrl}/words.json/randomWords?hasDictionaryDef=true&limit=${limit}&api_key=${this.apiKey}`;
    let randomWords; 

    try {
      const response = await axios.get(url);
      randomWords = response.data;
    } catch (error) {
      console.error(error);
    }

    return randomWords;
  }

  async getDefinition(word) {
    const url = `${this.baseUrl}/word.json/${word}/definitions?limit=1&api_key=${this.apiKey}`;
    let definition = '';

    try {
      const response = await axios.get(url);
      definition = response.data;
    } catch (error) {
      console.error(error);
    }

    return definition;
  }
}

export default WordnikApi;
