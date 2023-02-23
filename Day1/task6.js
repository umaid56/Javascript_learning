//6
function reverseString(str) {
  if (str.length <= 1) {
    return str;
  }
  return (
    str.charAt(str.length - 1) + reverseString(str.slice(1, -1)) + str.charAt(0)
  );
}
console.log(reverseString("HGFEDCBA"));
console.log(reverseString("ABCD"));

