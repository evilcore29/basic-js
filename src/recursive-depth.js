const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  // * parse string solution (fail recursion test)
  // calculateDepth(arr) {
  //   const arrOfBrackets = JSON.stringify(arr)
  //   .split(/[\d,]/)
  //   .filter((item) => item !== "")
  //   .join("")
  //   .split("");

  // const filteredValues = arrOfBrackets
  //   .join("")
  //   .split(/[\w,\]]/)
  //   .filter((item) => item);

  // return Math.max(...filteredValues.map((item) => item.split("").length));
  // }

  // * recursive solution
  calculateDepth(arr) {    
    if (arr.length === 0) return 1;
    return Array.isArray(arr) ? Math.max(...arr.map(item => this.calculateDepth(item))) + 1 : 0
  }
};