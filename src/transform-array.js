const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error();
  if(arr.length === 0 ) return [];

  const manipulationTypes = ['--discard-next', '--double-next', '--discard-prev', '--double-prev'];

  return arr.reduce((acc, cur, i) => {
    if (manipulationTypes.includes(cur)) return acc;

    if (arr[i - 1] === '--discard-next') {
      return acc;
    }

    if (arr[i - 1] === '--double-next') {
      acc.push(cur, cur);
    } else {
      acc.push(cur);
    }

    if (arr[i + 1] === '--discard-prev') {
      acc.splice(acc.length - 1, 1)
    }

    if (arr[i + 1] === '--double-prev') {
      acc.push(cur);
    }

    return acc;
  }, []);
};

// !!!

// const CustomError = require("../extensions/custom-error");

// module.exports = function transform(arr) {
//   if (!Array.isArray(arr)) throw new Error();
//   if (arr.length === 0) return [];

//   const arrCopy = arr.map((item) => item);

//   const arrRebuilder = (index, type) => {
//     if (type === "--double-next") arrCopy.splice(index, 1, arrCopy[index + 1]);
//     if (type === "--discard-prev") arrCopy.splice(index - 1, 1);
//     if (type === "--discard-next") arrCopy.splice(index, 1);
//     if (type === "--double-prev") arrCopy.splice(index, 1, arrCopy[index - 1]);
//   };

//   for (let i = 0; i < arr.length; i++) {
//     arrRebuilder(i, arr[i]);
//   }

//   return arrCopy.filter(
//     (item) =>
//       item !== "--double-next" &&
//       item !== "--discard-prev" &&
//       item !== "--discard-next" &&
//       item !== "--double-prev" &&
//       item !== undefined
//   );
// };