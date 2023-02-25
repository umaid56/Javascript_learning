const students = [
  { name: "Alice", grade: 90 },
  { name: "Bob", grade: 80 },
  { name: "Charlie", grade: 95 },
  { name: "Dave", grade: 85 },
];

const newStudents = [
  { name: "Eve", grade: 88 },
  { name: "Frank", grade: 92 },
];

//1 Using concat Method
// let result = students.concat(newStudents);
// console.log("All students", result);

//2 Using iterator Method
// for (let[index, value] of Object.entries(students)){
//     console.log(`On index no. ${index} the name is ${value.name} and grade is ${value.grade}`);
// }

//3 Using every Method
// let result = students.every((student) => student.grade >= 70);
// console.log(result);

//4 Using map Method
// let result = students.map(({grade}) => grade).fill(100);
// console.log(result)

//5 Using filter Method
// let result = students.filter(({grade}) => grade > 90)
// console.log(result)

//6 Using find Method
// let result = students.find(({name}) => name == "Charlie")
// console.log(`The charlie's grade is ${result.grade}`);

//7 Using find Index Method
// let result = students.findIndex(({ grade }) => grade === 85);
// console.log(result);

//8 Using flat Method
// const nestedArray = [[1, 2], [3, 4, 5], [6]];
// let result = nestedArray.flat()
// console.log(result)

//9 Using flatMap Method
// let result = students.flatMap(({grade}) => grade >= 70)
// console.log(result);

//10 Using forEach Method
// students.forEach(({name}) => console.log(name))

//11 Using Array.from Method
// const string = "hello world";
// let result = Array.from(string);
// console.log(result);

//12 Using includes Method
// let result = students.map(({name}) => name.includes("Eve"))
// console.log(result);

//13

//14 Using map Method
// let result = students.map(({grade}) => grade);
// console.log(result);

//15 Using push Method
// let result = students.push({ name: "grace", grade: 87 });
// // console.log(result);
// console.log(students);

//16 Using pop Method
// let result = students.pop();
// // console.log(result);
// console.log(students);

//17 Using reverse Method
// let result = students.reverse();
// console.log(result);

//18 Using shift Method
let result = students.shift();
// console.log(result);
console.log(students);
