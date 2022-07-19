const Letter = require("./Letter");

class Word extends Letter {
  constructor(winput) {
    super();
    this.winput = winput;
    this.letters = this.map();
  }

  map() {
    for (let i =0)
    let wordArr = new Letter(this.winput);
  }
}

module.exports = Word;
const newWord = new Word("hi");
console.log(newWord.map);
