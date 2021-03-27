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
