const isPalindrome = require("./index");

test("isPalindrome", () => {
  expect(isPalindrome("abccba")).toBe(true);
  expect(isPalindrome("No lemon, no melon")).toBe(true);
  expect(isPalindrome(1234321)).toBe(true);
  expect(isPalindrome("no lemon yes lemon")).toBe(false);
  expect(isPalindrome("A man, a plan, a canal. Panama")).toBe(false);
  expect(isPalindrome(123456789)).toBe(false);
});
