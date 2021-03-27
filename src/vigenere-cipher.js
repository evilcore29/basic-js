const letters = [
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

class VigenereCipheringMachine {
  type = true;

  constructor(type) {
    this.type = undefined === type ? true : type;
  }

  encrypt(message, key, direction) {
    if (message === undefined || key === undefined) throw Error;
    let result = message.toUpperCase();
    let counter = -1;

    key = key.toUpperCase();

    result = message
      .toUpperCase()
      .split("")
      .map((item) => {
        if (letters.includes(item)) {
          counter++;
          return direction === "decrypt"
            ? letters[
                (letters.indexOf(item) -
                  letters.indexOf(key[counter % key.length]) +
                  letters.length) %
                  letters.length
              ]
            : letters[
                (letters.indexOf(item) +
                  letters.indexOf(key[counter % key.length])) %
                  letters.length
              ];
        }
        return item;
      })
      .join("");

    return !this.type ? result.split("").reverse().join("") : result;
  }

  decrypt(encryptedMessage, key) {
    return this.encrypt(encryptedMessage, key, "decrypt");
  }
}

module.exports = VigenereCipheringMachine;
