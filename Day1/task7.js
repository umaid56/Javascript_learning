//7
const person = ({ first, last }) => {
  console.log(`Hello ${first} ${last}`);
};
const person2 = [{ first: "Umaid", last: "Khalid" }];
person2.map(person);

