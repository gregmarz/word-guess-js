class Letter {
  constructor(input) {
    this.digLet = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "0",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    this.input = input;
    this.visible = this.visibleCheck();
  }
  visibleCheck() {
    if (this.digLet.includes(this.input)) {
      return false;
    } else {
      return true;
    }
  }

  toString() {
    if (this.digLet.includes(this.input)) {
      return "_";
    } else {
      return this.input;
    }
  }

  guess(answer) {
    return answer === this.input;
  }

  getSolution() {
    return this.input;
  }
}

module.exports = Letter;
