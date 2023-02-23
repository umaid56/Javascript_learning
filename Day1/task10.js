//10
function isPalindrome(str) {
  if (str[0] !== str[str.length-1]) return false;
  isPalindrome(str.slice(1, -1));
  return true;
}
console.log(isPalindrome("LOL"));
console.log(isPalindrome("umaid"));
