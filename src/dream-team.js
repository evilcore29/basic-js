const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!members || !Array.isArray(members)) return false;

  const caseInsensitiveComp = (a, b) =>
    a.toLowerCase().localeCompare(b.toLowerCase());

  return members
    .reduce((acc, item) => {
      if (typeof item !== "string") return acc;
      return [...acc, item.trim()[0].toLocaleUpperCase()];
    }, [])
    .sort((a, b) => caseInsensitiveComp(a, b))
    .join("");
};
