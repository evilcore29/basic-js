const chainMaker = {
  arr: [],
  
  getLength() {
    return this.arr.length;
  },

  addLink(value) {
    this.arr.push(`${value}`);
    return this;
  },

  removeLink(position) {
    const invalidCondition =
      typeof position != "number" ||
      position <= 0 ||
      position > this.arr.length ||
      !position;

    if (invalidCondition) {
      this.arr = [];
      throw new Error();
    }

    this.arr.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.arr.reverse();
    return this;
  },

  finishChain() {
    let resultArr = `( ${this.arr.join(" )~~( ")} )`;
    this.arr = [];
    return resultArr;
  }
};

module.exports = chainMaker;
