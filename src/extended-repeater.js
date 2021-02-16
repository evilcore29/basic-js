const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  const convertableValues = {
    null: "null",
    undefined: "undefined",
    false: "false"
  };

  const createStringWithAddition = () => {
    const additionArr = [];
    let counter = 0;
    while (counter < (options.additionRepeatTimes || 1)) {
      additionArr.push(
        Object.values(convertableValues).includes(options.addition) || options.addition === null
          ? convertableValues[options.addition]
          : options.addition
      );
      counter++;
    }
    return `${str}${additionArr.join(options.additionSeparator || "")}`;
  };

  const resultArr = [];
  let counter = 0;
  while (counter < (options.repeatTimes || 1)) {
    resultArr.push(createStringWithAddition());
    counter++;
  }

  return resultArr.join(options.separator || "+");
};  