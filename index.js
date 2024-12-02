function isPalindrome(word) {
  const wordWithoutSpaces = word.toString().replaceAll(" ", "").toUpperCase();
  const test = wordWithoutSpaces.split("").reverse().join("");
  return test === wordWithoutSpaces;
}

module.exports = isPalindrome