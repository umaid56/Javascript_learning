//3
function getSum(num) {
  return num.reduce((acc, curr) => acc + curr);
}
console.log(getSum([1, 2, 3, 4, 5]));
console.log(getSum([1, 2, 3,]));

